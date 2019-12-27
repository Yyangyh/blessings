<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">课程视频</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">音频</text>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'共享资源',
				cur:0,
			}
		},
		onShow(){
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_getShareOrder,{
				mobile:this.$store.state.user.mobile,
				video_type:1
			},function(self,res){
				console.log(res)
			})
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		background-color: #F6F6F7;
		.allorder{
			width: 100%;
			height: 120upx;
			display: flex;
			text-align: center;
			line-height: 120upx;
			font-size: 28upx;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
	}
</style>
