<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'联系我们',
			}
		},
		methods:{
			chooseLocation() {
			   uni.chooseLocation({
			    success: data => {
			     console.log(data);
			     this.addressData.addressName = data.name;
			     // this.addressData.address = data.name;
			    }
			   });
			  }
		},
		onLoad() {
			this.chooseLocation() 
		}
	}
</script>

<style>
</style>
