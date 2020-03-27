<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @tap="Index(1)" class="one" :class="{active:cur==1}">课程视频</text>
			  <text @tap="Index(2)" class="two" :class="{active:cur==2}">音频</text>
			  <text @tap="Index(3)" class="three" :class="{active:cur==3}">文章</text>
		</view>
		<view class="article" v-if="cur==3">
			<view class="a_list" v-for="(item,index) in article_data" :key='index' @tap="$jump('../subindex/texts?v_test='+item.name+'&v_pid='+item.id)">
				<image :src="$api_img()+item.icon" mode="widthFix"></image>
				<view class="">
					{{item.name}}
				</view>
			</view>
		</view>
		 <view class="boxs" v-else>
			 <view class="allorders" >
				 <view @tap="chiose(index)" class="one" :class="{actives:indexs == index}" v-for="(item,index) in data" :key='item.id'>{{item.cl_name}}</view>
			 </view>
			 <view class="b_right" v-if="data">
				 <view class="b_list" v-for="(item,index) in data[indexs].t_list" :key='item.id' 
				 @tap="$jump('../com_page/video_class?type='+item.type+'&id='+data[indexs].id+'&title='+data[indexs].cl_name+'&v_test='+item.cl_name+'&v_pid='+item.id)"
				 >
				 	<image :src="$api_img()+item.cl_image" mode="scaleToFill"></image>
					<view class="">
						{{item.cl_name}}
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
				title:'分类',
				cur:1,
				bur:'',
				data:'',
				article_data:'',
				indexs:0,
				
			}
		},
		methods:{
			Index(type){
				this.cur = type
				this.indexs = 0
				if(type == 3){
					this.service.entire(this,'get',this.APIconfig.api_root.subindex.s_getNormalCategory,{},function(self,res){
						self.article_data = res.data
					})
				}else{
					this.service.entire(this,'post',this.APIconfig.api_root.subindex.getClassify,{
						userid:this.$store.state.user.id,
						type:type
					},function(self,res){
						self.data = res.data.t_list
					})
				}
				
			},
			chiose(index){
				this.indexs = index
			}
		},
		onLoad() {
			this.Index(1)
		}
	}
</script>

<style lang="scss">
	
	.allorder{
		width: 100%;
		height: 100rpx;
		display: flex;
		text-align: center;
		line-height: 100rpx;
		font-size:28rpx;
		background-color: #F6F6F7;
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
	.article{
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		font-size: 28rpx;
		.a_list{
			width: 50%;
			text-align: center;
			margin-bottom: 20rpx;
			image{
				width: 210rpx;
				height: 103rpx;
			}
		}
	}
	.boxs{
		display: flex;
		background-color: #FFFFFF;
		.allorders{
			width: 25%;
			line-height: 100rpx;
			font-size:28rpx;
			background-color: #F6F6F7;
			border-bottom:1rpx solid #EEEEEE ;
			text-align: center;
			color: #333333;
			
		}
		.actives{
			color:#D80000;
			background-color: #FFFFFF;
		}
		.b_right{
			background-color: #FFFFFF;
			width: 75%;
			height: 100%;
			padding: 20rpx;
			display: flex;
			flex-wrap: wrap;
			.b_list{
				width: 50%;
				text-align: center;
				margin-bottom: 20rpx;
				view{
					font-size: 28rpx;
				}
				image{
					width: 210rpx;
					height: 103rpx;
				}
			}
		}
	}
</style>
