<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="content_top">
			<view class="top_returns" @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<view class="top_search">
				{{title}}
			</view>
			<view class="top_img" @tap="$jump('../com_page/notice')">
				<image src="/static/image/com_page/search.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="tab_list">
			<view class="list_all" @tap="show = !show">
				<view class="">
					{{v_test}}
				</view>
				<image class="all_img" :class="show===false ? 'tran_none' : show===true ? 'tran_show' : ''" src="../../static/image/index/down.png" mode="widthFix"></image>
			</view>
			<view  @tap="condition(1)" :class="{'red':keyword_show === 1}">
				{{req_data.type == 1?'免费视频':'免费音频'}}
			</view>
			<view  @tap="condition(2)" :class="{'red':keyword_show === 2}">
				{{req_data.type == 1?'观看多':'收听多'}}
			</view>
		</view>
		
		<view class="mask_black" v-show="show == true" @tap="show = false">
			<!-- 遮罩层 层级888 -->
		</view>
		<view class="down_box"  :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''" >
			<view class="down_list"  @tap="chiose()">
				全部
			</view>
			<view class="down_list" v-for="(item,index) in top_class" :key="item.id"  @tap="chiose(item.id,item.cl_name)">
				{{item.cl_name}}
			</view>
		</view>
		
		<view class="vider_content_two">
			<view class="vider_content">
				<view class="content_list" v-for="(item,index) in video_list" :key='item.id' @tap="$jump('./video_details?id='+item.id)">
					<view class="list_img_box">
						<image :src="APIconfig.api_img+item.v_pic" mode="scaleToFill"></image>
					</view>
					<view class="list_right">
						<view class="list_one">
							{{item.long_title}}
						</view>
						<view class="">
							<view class="list_two">
								<view class="">
									共{{item.catalogue_count}}节
								</view>
								<view class="">
									<view class="list_vip" v-if="item.free_type > 0">
										{{item.free_dec}}免费
									</view>
									<view class="">
										{{item.is_free == 0? '￥'+item.v_price : '免费'}}
									</view>
								</view>
							</view>
							<view class="list_three">
								<view class="">
									讲师：{{item.techer.name}}
								</view>
								<view class="">
									已有{{item.view}}人学习
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>	
		
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default{
		components: {
			uniLoadMore
		},
		data() {
			return {
				data:'',
				type:'',
				show:false,
				top_class:'',
				title:'',
				video_list:[],
				more: 'more',
				page: 1,
				loadRecord: true,
				v_test:'全部',
				old_id:'',
				keyword_show:'',
				req_data:{
					type:'',
					limit:10,
					page:1,
					v_pid:''
				}
			}
		},
		methods:{
			Index(){
				this.more = 'loading'
				this.uni_request(this.req_data)
			},
			chiose(v_pid,test){
				this.req_data.page = 1
				this.more = 'loading'
				this.loadRecord = true
				if(v_pid){
					this.req_data.v_pid = v_pid
					this.v_test = test
				}else{
					this.req_data.v_pid = this.old_id
					this.v_test = '全部'
				}
				this.video_list.length = 0
				this.uni_request(this.req_data)
				this.show = false
			},
			condition(type){//条件选择
				this.more = 'loading'
				this.req_data.page = 1
				this.loadRecord = true
				this.video_list.length = 0
				if(this.keyword_show == type){//重复点击取消
					this.keyword_show = ''
					delete this.req_data.view//收看多
					delete this.req_data.is_free//是否免费
				}else{//判断是否是免费视频
					this.keyword_show = type//点击条件选择
					if(type == 1) {//点击免费时执行
						this.req_data.is_free = 1//点击免费
						delete this.req_data.view//删除播放多
					}
					if(type == 2) {//点击观看多执行
						this.req_data.view = 1//点击观看多
						delete this.req_data.is_free//删除免费
					}
				}
				this.uni_request(this.req_data)//执行分页函数
			},
			uni_request(data){//请求接口
				this.service.entire(this,'get',this.APIconfig.api_root.com_page.videoList,data,function(self,res){
					if(!self.top_class)self.top_class = res.data.top_list
					let data = self.video_list
					data.push(...res.data.video_list)
					self.video_list = data
					console.log(self.video_list);
					self.req_data.page += 1
					self.more = 'more'
					if (res.data.video_list.length < 10) {//判断是否还有下一页
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
				})
			}
		},
		onLoad(e) {
			this.title = e.title
			this.req_data.v_pid = e.id
			this.old_id = e.id
			this.req_data.type = e.type
			if(e.v_pid){
				this.req_data.v_pid = e.v_pid
				this.v_test = e.v_test
			}
			this.Index()
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			this.Index()
		},
	}
</script>

<style lang="scss">
	.content {
		padding-top: calc(205rpx + var(--status-bar-height));
	}
	.content_top{
		position: fixed;
		z-index: 999;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
	}
	.content_top .top_returns image{
		height: 31rpx;
		width: 31rpx;
		padding-right: 10rpx;
	}
	.content_top .top_search{
		flex-grow: 2;
		height: 65rpx;
		line-height: 65rpx;
		text-align: center;
		font-weight:500;
		font-size: 32rpx;
	}
	
	
	.content_top image{
		height: 50rpx;
		width: 50rpx;
		margin-left: 10rpx;
	}
	.tab_list{
		position: fixed;
		z-index: 999;
		top: calc(var(--status-bar-height) + 105rpx);
		left: 0;
		width: 100%;
		box-sizing: border-box;
		background: #F6F6F7;
		color: #666666;
		font-size: 28rpx;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 50rpx;
	}
	.tab_list view{
		height: 100rpx;
		line-height: 100rpx;
	}
	.tab_list .list_all{
		display: flex;
		align-items: center;
		color: #D80000;
	}
	.red{
			color: #D80000;
		}
	.all_img{
		transition: .3s;
	}
	.tran_none{
		transform: rotate(-180deg);
	}
	.tran_show{
		transform: rotate(0deg);
	}
	.tab_list image{
		height: 11rpx;
		width: 19rpx;
		margin-left: 14rpx;
	}
	.down_box{
		position: fixed;
		top: calc(var(--status-bar-height) + 205rpx);
		left: 0;
		width: 100%;
		box-sizing: border-box;
		z-index: 998;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		transition: .3s;
		transform: translateY(-100%);
		background: #FFFFFF;
		font-size: 28rpx;
		padding: 40rpx 20rpx;
	}
	.mask_none{
		transform: translateY(-100%);
	}
	.mask_show{
		transform: translateY(0%);
	}
	.down_box .down_list{
		width: 180rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 60rpx;
		background: #F1F1F1;
		text-align: center;
		margin-bottom: 30rpx;
	}
	.down_box:after { 
	    content: ""; 
	    width:180rpx;
	} 
	.down_box .down_list:nth-of-type(1){
		color: #D80000;
	}
	.vider_content_two{
		border-bottom: 6rpx solid #F1F1F1;
		.vider_content{
			padding: 0 20rpx;
			font-size: 24rpx;
			image{
				width: 268rpx;
				height: 179rpx;
				margin-right: 29rpx;
			}
			.content_list{
				display: flex;
				margin: 30rpx 0;
				.list_right{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					flex-grow: 2;
					padding-bottom: 20rpx;
					.list_one{
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.list_two{
						color: #999999;
						display: flex;
						justify-content: space-between;
						margin-bottom: 10rpx;
						view:nth-of-type(2){
							display: flex;
							color: #D80000;
							font-size: 28rpx;
							.list_vip{
								background: #000000;
								font-size: 24rpx;
								color: #FFFFFF;
								padding: 5rpx 10rpx;
								box-sizing: border-box;
								border-radius: 20rpx;
								margin-right: 10rpx;
							}
						}
					}
					.list_three{
						display: flex;
						justify-content: space-between;
						color: #EF7C38;
						font-size: 24rpx;
						view:nth-of-type(2){
							color: #999999;
						}
					}
				}
			}
		}
	}
</style>
