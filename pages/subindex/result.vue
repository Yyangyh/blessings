<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="worp">
			<view class="worp_box">
				<view class="title">测评结果</view>
				<view class="texts">
					{{result_data}}
				</view>
			</view>
			<view class="word_img">
				<image src="/static/image/evaluating/resultback.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="recommend">相关视频推荐</view>
		
		<view class="vider_content_two">
			<view class="vider_content">
				<view class="content_list" v-for="(item,index) in recommend" :key='item.id' @tap="$jump('../com_page/video_details?id='+item.id)">
					<view class="list_img_box">
						<image :src="item.v_pic" mode="scaleToFill"></image>
					</view>
					<view class="list_right">
						<view class="list_one">
							{{item.long_title}}
						</view>
						<view class="list_two">
							{{item.view}}次观看
						</view>
						<view class="list_three">
							<view class="">
								{{item.is_free == 0? '￥'+item.v_price : '免费'}}
								
							</view>
							<view class="" v-if="item.is_free_vip == 1">
								VIP免费
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'我的测评',
				result_data:'',
				recommend:''
			}
		},
		onLoad(e) {
			if(e.data){
				this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_test_Result,{
					paper_id:e.id,
					user_id:this.$store.state.user.id,
					data:JSON.parse(e.data),
				},function(self,res){
					console.log(res)
					console.log(res.code)
					self.result_data = res.data.result_des
					self.recommend = res.data.recommend
				})
			}else{
				this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_lookSignExam,{
					id:e.id,
				},function(self,res){
					console.log(res)
					console.log(res.code)
					self.result_data = res.data.res_des
					self.recommend = res.data.recommend
				})
			}
			
		}
	}
</script>

<style lang="scss">
	.worp{
		width: 100%;
		height: 813rpx;
		position: relative;
		.worp_box{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 99;
			.title{
				font-size: 32rpx;
				color: #FFFFFF;
				text-align: center;
				padding-top: 82rpx;
			}
			.texts{
				font-size: 26rpx;
				text-indent:2em;
				margin:50rpx 107rpx 0;
			}
		}
		.word_img{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 98;
			image{
				width: 100%;
				height: 800rpx;
			}
		}
		
	}
	.recommend{
		font-size: 28rpx;
		margin:20rpx 20rpx;
		
	}
	.vider_content_two{
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
				padding-bottom: 20rpx;
				.list_right{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding-bottom: 30rpx;
					.list_three{
						display: flex;
						justify-content: space-between;
						color: #D80000;
						font-size: 28rpx;
						view:nth-of-type(2){
							background: #000000;
							font-size: 24rpx;
							color: #FFFFFF;
							height: 20rpx;
							padding: 10rpx;
							line-height: 20rpx;
							border-radius: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
