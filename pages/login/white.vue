<template>
</template>

<script>
	export default{
		onLoad() {
			if(uni.getStorageSync('state_token')){
				uni.switchTab({
					url:'../index/index'
				})
			}else{
				uni.redirectTo({
				    url: './login'
				});
			}
		}
	}
</script>

<style>
</style>
