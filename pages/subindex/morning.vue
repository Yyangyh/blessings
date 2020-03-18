<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<share ref="share" :datas='share_arr'></share>
		<view class="top">
			<view class="top_enlarge"  @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<text>早间晨语</text>
			<view class="screen" @tap="open()">
				<image src="../../static/image/index/screen.png" mode="widthFix"></image>
				<text>筛选</text>
			</view>
		</view>
		<view class="m_box">
			<view class="box_list" v-for="(item,index) in data" :key="item.id">
				<view class="list_logo">
					<view class="logo">
						<image :src="$api_img() + item.logo" mode="scaleToFill"></image>
					</view>
					<view class="logo_test">
						<view class="test_top">
							{{item.name}}
						</view>
						<view class="test_btm">
							{{item.spoke}}
						</view>
					</view>
				</view>
				<view class="list_content">
					{{item.content}}
				</view>
				<view class="list_img">
					<image :src="$api_img() + item.image" mode=""></image>
				</view>
				<view class="list_time">
					{{service.Test(item.create_time)}}
				</view>
				<view class="list_oper">
					<view class="oper" @tap="preservation(item.image,item.id,index)">
						<image v-if="item.is_downimage == 0" src="../../static/image/index/oper1.png" mode="widthFix"></image>
						<image v-else src="../../static/image/index/Hoper1.png" mode="widthFix"></image>
						<view class="">
							图片下载
						</view>
					</view>
					<view class="oper" @tap="copy(item.content,item.id,index)">
						<image v-if="item.is_copycontent == 0"  src="../../static/image/index/oper2.png" mode="widthFix"></image>
						<image v-else src="../../static/image/index/Hoper2.png" mode="widthFix"></image>
						<view class="">
							文案复制
						</view>
					</view>
					<view class="oper"  @tap="forward(index)">
						<image v-if="item.is_share == 0"  src="../../static/image/index/oper3.png" mode="widthFix"></image>
						<image v-else src="../../static/image/index/Hoper3.png" mode="widthFix"></image>
						<view class="">
							一键转发
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view>
		    <uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
			:showMonth="false"
		     ></uni-calendar>
		</view>
		
	</view>
</template>

<script>
	import uniCalendar from "../../components/uni-calendar/uni-calendar.vue"
	import js_sdk from '../../js_sdk/ican-H5Api/ican-H5Api.js'
	import share from'../common/share.vue'
	export default{
		components:{
			uniCalendar,
			share
		},
		data(){
			return{
				data:'',
				share_arr:{},
			}
		},
		methods:{
			open(type){
				this.type = type
				this.$refs.calendar.open();
			},
			confirm(e) {  //日历表选择日期时间
				this.service.entire(this,'post',this.APIconfig.api_root.subindex.getMorningnew,{ //
					page:1,
					start_time:new Date(e.fulldate).getTime()/1000,
					user_id:this.$store.state.user.id,
				},function(self,res){
					self.data = res.data
				})
			},
			copy(data,id,index) { //复制文案
				let that = this
				uni.setClipboardData({
					data: data,
					success: function(res) {
						that.oper(2,id)
						that.data[index].is_copycontent = 1
						uni.showToast({
							icon: 'none',
							title: '复制成功'
						})
					}
				})
			},
			oper(type,id){
				this.service.entire(this,'post',this.APIconfig.api_root.subindex.satusOfMorningnew,{ //
					morning_id:id,
					user_id:this.$store.state.user.id,
					type:type
				},function(self,res){
				})
			},
			preservation(Url,id,index) { //保存图片
				// #ifdef APP-PLUS
				let that = this
				//在app内运行
				Url = this.$api_img() + Url
				let filename = Math.random() + ".png"
				plus.downloader.createDownload(Url, {
					filename: "_downloads/" + filename
				}, (download, status) => {
					if (status == 200) { //下载成功  
						plus.gallery.save(download.filename, () => {
							uni.hideLoading();
							that.oper(1,id)
							that.data[index].is_downimage = 1
							uni.showToast({
								icon: 'none',
								title: '保存成功！'
							});
						})
					}
				}).start()
				// #endif
			}
		},
		onShow() {
			this.share_arr.Url = 'http://www.wufu-app.com/h5/#/pages/subindex/morning'
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.getMorningnew,{ //
				page:1,
				user_id:this.$store.state.user.id,
			},function(self,res){
				console.log(res)
				self.data = res.data
				
				console.log(self.data)
			})
		}
	}
</script>

<style lang="scss">
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		top: var(--status-bar-height);
		z-index: 333;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		.top_enlarge{
			display: flex;
			align-items: center;
			height: 100%;
			width: 180rpx;
		}
		.screen{
			width: 180rpx;	
			display: flex;
			align-items: center;
			justify-content: flex-end;
			image{
				margin-right: 12rpx;
				width: 30rpx;
				height: 34rpx;
			}
			text{
				font-size: 30rpx;
				font-weight: 400;
				display: inline-block;
				text-align: right;
			}
		}
		
		image{
			height: 40rpx;
			width: 40rpx;
		}
	}
	.m_box{
		.box_list{
			padding:  20rpx;
			margin-bottom: 20rpx;
			border-bottom: 2rpx solid #F2F2F2;
			.list_logo{
				display: flex;
				align-items: center;
				.logo{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					overflow: hidden;
					margin-right: 32rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.logo_test{
					font-size: 28rpx;
					height: 80rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.test_btm{
						font-size: 24rpx;
						color: #999999;
					}
				}
				
			}
			.list_content{
				font-size: 24rpx;
				line-height: 36rpx;
				margin: 42rpx 0 30rpx 0;
			}
			.list_time{
				font-size: 24rpx;
				color: #999999;
				margin: 34rpx 0 30rpx 0;
			}
			.list_oper{
				display: flex;
				justify-content: space-between;
				.oper{
					font-size: 24rpx;
					color: #333333;
					text-align: center;
					image{
						height: 50rpx;
						width: 50rpx;
					}
				}
			}
		}
	}
</style>
