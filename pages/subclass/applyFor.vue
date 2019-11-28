<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<form>
			<view class="write">
				<view class="msg">
					联系人<text>*</text>
					<input type="text" placeholder="您的名字">
				</view>
				<hr />
				<view class="msg">
					手机号<text>*</text>
					<input type="text" placeholder="您的手机号码">
				</view>
				<hr />
				<view>请仔细填写联系方式，保证我们能尽快联系到您~</view>
			</view>
			
		</form>
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
				title:'申请'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: #F6F6F6;
		width: 100%;
		height: 100vh;
		.write{
			background-color: #FFFFFF;
			width: 100%;
			margin-bottom: 30rpx;
			.msg{
				display: flex;
			}
		}
	}
</style>
