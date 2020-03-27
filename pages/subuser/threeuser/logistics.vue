<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="log_box">
			<rich-text :nodes="nodes"></rich-text>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'物流信息',
				nodes:''
			}
		},
		methods:{
		},
		
		onLoad(e) {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.threeuser.s_order_getexpinfo,{
				express_id:e.id,
				express_number:e.number,
			},function(self,res){
				let richtext = res.data
				const regex = new RegExp('<li', 'gi');
				const regexs = new RegExp('<p', 'gi');
				
				richtext= richtext.replace(regex, `<li style="padding:10px 0;font-size: 16px;border-bottom: 1px solid #F1F1F1;color:#666"`);
				richtext = richtext.replace(regexs, `<p style="margin-bottom:10px;font-size: 18px"`);
				self.nodes = richtext
			})
			
		}
	}
</script>

<style scoped>
	.log_box{
		padding: 20rpx;
	}
	
</style>
