<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="give_box">
			<view class="give_top">
				赠送说明
			</view>
			<view class="give_text">
				<view class="">
					1.请在我的“个人中心”完成亲情号邀请注册。
				</view>
				<view class="">
					2.购买课程后，可通过链接分享给亲情好友。
				</view>
				<view class="">
					3.在亲情号共享资源领取后就能免费观看课程。
				</view>
				<view class="">
					4.邀请您的亲密爱人或其它家人一起学习吧。
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
				title:'赠送说明',
			}
		},
		onLoad(e) {
			
		}
	}
</script>

<style lang="scss">
	.give_box{
		padding: 10rpx 15rpx;
		.give_top{
			text-align: center;
		}
	}
	
</style>
