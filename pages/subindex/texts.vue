<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>文章</text>
			<image src="../../static/image/com_page/search.png" mode="widthFix"></image>
		</view>
		<view class="tab_list">
			<view class="list_all" @tap="show = !show">
				<view class="">
					{{v_test}}
				</view>
				<image class="all_img" :class="show===false ? 'tran_none' : show===true ? 'tran_show' : ''" src="../../static/image/index/down.png" mode="widthFix"></image>
			</view>
			
			<view class="list_all" @click="condition" :class="{'red':keyword_show === 1}">
				阅读更多
			</view>
		</view>
		<view class="mask_black" v-show="show == true" @tap="show = false">
		</view>
		<view class="down_box"  :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''" >
			<view class="list_box">
				<view class="down_list" @tap="chiose()" >
					全部
				</view>
			</view>
			<view class="list_box" v-for="(item,index) in top_class" :key="item.id" @tap="chiose(item.id,item.name)">
				<view class="down_list" >
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="texts_boxList" v-for="(item,index) in dataList" :key='item.id'>
			<view class="t_box" @tap="$jump('./article?id='+item.id)">
				<view class="">
					<image :src="$api_img() + item.images" mode="scaleToFill"></image>
				</view>
				<view class="b_right">
					<view>{{item.title}}</view>
					<view>{{item.access_count}}次阅读</view>
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
		data(){
			return{
				title:'文章',
				cur:'',
				show:false,
				top_class:'',
				dataList:[],
				more: 'more',
				page: 1,
				loadRecord: true,
				v_test:'全部',
				keyword_show:'',
				req_data:{
					num:10,
					page:1
				}
			}
		},
		methods:{
			Index(){
				this.more = 'loading'
				this.uni_request(this.req_data)
			},
			chiose(cate_id,test){ //二级分类选择
				this.more = 'loading'
				this.req_data.page = 1
				this.loadRecord = true
				if(cate_id){
					this.req_data.cate_id = cate_id
					this.v_test = test
				}else{
					delete this.req_data.cate_id
					this.v_test = '全部'
				}
				this.dataList.length = 0
				this.uni_request(this.req_data)
				this.show = false
			},
			condition(){//条件选择
				this.more = 'loading'
				this.req_data.page = 1
				this.loadRecord = true
				this.dataList.length = 0
				if(this.keyword_show === 1){//重复点击取消
					this.keyword_show = ''
					delete this.req_data.is_access//收看多
					// this.req_data.is_access =ture
					// delete this.req_data.is_free//是否免费
				
				}else {
					// this.keyword_show = type//点击条件选择
					this.keyword_show = 1
					this.req_data.is_access =true//点击观看多
				}
				this.uni_request(this.req_data)//执行分页函数
			},
			uni_request(req_data){
				this.service.entire(this,'get',this.APIconfig.api_root.subindex.s_getArticleList,req_data,function(self,res){
					// self.top_class = res.data.top_list
					let data = self.dataList
					// top_class = self.top_class
					console.log(res)
					self.dataList = res.data
					data.push(...res.data)
					self.dataList = data
					console.log(self.dataList);
					self.req_data.page += 1
					self.more = 'more'
					if (res.data.length < 10) {
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
				})
				
			}
		},
		onLoad(e) {
			if(e.v_pid){
				this.req_data.cate_id = e.v_pid
				this.v_test = e.v_test
			}
			this.Index()
		},
		onShow() {
			
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_getNormalCategory,{//获取文章分类
				user_id:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				self.top_class = res.data
			})
		},
		onReachBottom() {//下拉
			if (this.loadRecord == false) return
			this.Index()
		},
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		padding-top: 205rpx;
		 .top{
			position: fixed;
			width: 100%;
			z-index:1000;
			box-sizing: border-box;
			top: var(--status-bar-height);
			left: 0;
			display: flex;
			height: 105rpx;
			padding: 0 30rpx;
			font-size: 32rpx;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			image:first-child{
				width: 31rpx;
				height: 31rpx;
			}
			image:last-child{
				width: 50rpx;
				height: 50rpx;
			}
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
			view{
				height: 100rpx;
				line-height: 100rpx;
				
			}
			.list_all{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50%;
				view{
					color: #D80000;
				}
			}
			.red{
				color: #D80000;
			}
			.all_img{
				transition: .3s;
				width: 20rpx;
				height: 20rpx;
				margin-left: 20rpx;
			}
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
			z-index: 998;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			// justify-content: space-between;
			transition: .3s;
			transform: translateY(-100%);
			background: #FFFFFF;
			font-size: 28rpx;
			padding: 40rpx 20rpx;
			.list_box{
				width: 33.3%;
				.down_list{
					width: 180rpx;
					height: 60rpx;
					line-height: 60rpx;
					border-radius: 60rpx;
					background: #F1F1F1;
					text-align: center;
					margin: 15rpx auto;
				}
				&:after {
				    content: ""; 
				    width:33.3%;
				} 
				&:nth-of-type(1) .down_list{
					color: #D80000;
				}
			}
			
			
		}
		.mask_none{
			transform: translateY(-100%);
		}
		.mask_show{
			transform: translateY(0%);
		}
		// .down_box {
		// 	&:after {
		// 	    content: ""; 
		// 	    width:180rpx;
		// 	}
		// 	.down_list{
		// 		width: 180rpx;
		// 		height: 60rpx;
		// 		line-height: 60rpx;
		// 		border-radius: 60rpx;
		// 		background: #F1F1F1;
		// 		text-align: center;
		// 		margin-bottom: 30rpx;
		// 		&:nth-of-type(1){
		// 			color: #D80000;
		// 		}
		// 	}
		// }
	}
	.texts_boxList{
		
		.t_box{
		padding: 20rpx 25rpx 20rpx 25rpx;
		display: flex;
		// border-bottom:1rpx solid  ;
			image{
				width: 268rpx;
				height: 179rpx;
				margin-right: 30rpx;
			}
			.b_right{
				flex-grow: 2;
				view:first-child{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					font-size: 28rpx;
					margin: 20rpx 0;
				}
				view:last-child{
					font-size: 28rpx;
					color: #999999;
				}
			}
		}
	}
	
</style>
