<template>
	<view class="content">
		<view class="status_bar">
						
		</view >
		<view class="top">
			<image src="/static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>收藏</text>
			<text @tap="show = !show">{{show ? '完成':'编辑'}}</text>
		</view>
		<view class="allorder">
			  <text @click="choise(1)" class="one"   :class="{active:cur==1}">课程视频</text>
			  <text @click="choise(2)" class="two"   :class="{active:cur==2}">音频</text>
			  <text @click="cur=3" class="three" :class="{active:cur==3}">文章</text>
			  <text @click="cur=4" class="four"  :class="{active:cur==4}">商品</text>
		</view>
		<!-- 课程视频\音频-->
		<view class="boxs" >
			<view class="line" v-for="(item,index) in dataList" :key='item.video_id'  @tap="$jump('../com_page/video_details?id='+item.video_id+'&type='+item.type)">
				<view class="tab_left"  style="transform: scale(0.8);" v-show="show">
					<label  class="radio" @click="singleElection(index)"><radio value="r1" :checked="item.choice" /></label>
				</view>	
				<image class="l_left" :src="item.v_pic" mode="scaleToFill"></image>
				<view class="l_right">
					<view>{{item.long_title}}</view>
					<view class="middle">{{item.view}}次观看</view>
					<view>￥99</view>
				</view>
			</view>
		</view>
		
		<!-- 商品-->
		<view class="boxs" v-show="cur==4">
			<view class="box_s">
				<view class="commodity">
					<image src="../../static/image/index/page.png" mode="scaleToFill"></image>
					<view class="texts">
						<view class="t_name">管理魂丨家庭式管理系统</view>
						<view class="t_sell">已售100件</view>
						<view class="t_price">￥2980.0</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 全选 -->
		<view class="tab_delete"  :class="show? 'show' : 'Noshow'">
			<view class="alls" >
				<label class="radio" @click="allElection()"><radio value="r1" :checked="checked" />全选</label>
			</view>
			
			<button @click="deletes()">删除</button>
		</view>
	</view>
</template>

<script>
	
	export default{
		
		data(){
			return{
				cur:'',
				dataList:'',
				type:'',
				show:false,
				checked:false,
			}
		},
		methods:{
			choise(all){
				// console.log(this.$store.state)
				this.cur = all
				let data ={
					user_id:this.$store.state.user.id,
					page:1,
					type:all
				}
				console.log(data)
				this.Index(data)
			},
			Index(data){
				
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_favor,data,function(self,res){
					console.log(res)
					res.data.favor_list.forEach(x => x.choice = false)
					self.dataList = res.data.favor_list
				})
			},
			// detail(){
			// 	if(this.type == 1)|{
			// 		uni.navigateTo({
			// 			url:'../com_page/index_class',
			// 		})
			// 	}else if(this.type == 2){
			// 		uni.navigateTo({
			// 			url:'../com_page/index_class',
			// 		})
			// 	}
				
			// },
			allElection(){ //全选
				this.checked = !this.checked
				if(this.checked == true){
					let all = []
					for (let s of this.dataList) {
						s.choice = true
					}
				}else{
					for (let s of this.dataList) {
						s.choice = false
					}
				}
			},
			singleElection(index){//单选
				this.dataList[index].choice = !this.dataList[index].choice
				if(this.dataList[index].choice == true){ //全选
					let arr_choice = this.dataList.map(x => x.choice)
					if(arr_choice.indexOf(false) == -1) this.checked = true
				}
				if(this.dataList[index].choice == false){ //非全选
				
					for (let s of this.dataList) {
						if(s.choice == false) this.checked = false
					}
				}
			},
			deletes(){  //删除
					let all =[]
					for (let s of this.dataList) {
						console.log(s)
						if(s.choice == true)all.push(s.video_id)
					}
					
					console.log(this.dataList)
					this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_collect,{
						userid:this.$store.state.user.id,
						video_id:all.join(','),
						c_type:0,
						mobile:this.$store.state.user.mobile
					},function(self,res){
						console.log(res)
						uni.showToast({
							icon:'none',
							title:res.msg
						})
						if(res.code == 0){
							let data = self.dataList
							for(let i = data.length - 1;i >= 0;i--){  //倒序删除
								if(data[i].choice == true){
									data.splice(i,1);
								}
							}
						}
					})
				// },
			},
		},
		onLoad() {
			this.choise(1)
		}
	}
</script>

<style lang='scss'>
	page{
		background-color: #FFFFFF;
	}
	.content{
	/* 	background-color: #F6F6F7; */
	}
	.top{
		height: 105rpx;
		width:100%;
		position: fixed;
		top:var(--status-bar-height);
		left: 0;
		background: #FFF;
		z-index: 888;
		padding: 0 40rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		margin-bottom: 24rpx;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		image{
			height: 40rpx;
			width: 40rpx;
		}
		text:nth-of-type(2){
			color: #666666;
			font-size: 28rpx;
			font-weight: 400;
			display: inline-block;
		}
	}
	.allorder{
		width: 100%;
		height: 120upx;
		display: flex;
		text-align: center;
		line-height: 120upx;
		font-size: 32upx;
		background-color: #F6F6F7;
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
	.line{
		display: flex;
		padding: 30rpx;
		border-bottom:1rpx solid #EEEEEE;
		align-items: center;
		background-color: #FFFFFF;
		.l_left{
			width:268rpx;
			height:179rpx;
			margin-right: 30rpx;
		}
		.l_right{
			view:first-child{
				font-size: 24rpx;
			}
			.middle{
				font-size: 24rpx;
				color:#999999;
				margin: 10rpx 0;
			}
			view:last-child{
				font-size: 28rpx;
				color: #D80000;
				font-weight: 500;
			}
		}
	}
	.tab_delete{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 2rpx solid #F1F1F1;
		padding:0 40rpx;
		height: 120rpx;
		color: #666;
		background: #fff;
		transform: translateY(100%);
		transition: .3s;
		.alls{
			font-size: 34rpx;
			.radio{
				display: flex;
				align-items: center;
			}
		}
		button{
			background: #D80000;
			color: #fff;
			width: 224rpx;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: 90rpx;
			margin-left: 20rpx;
			margin-right: 0rpx;
		}
	}
	.box_s{
		display: flex;
		flex-wrap:wrap;
		.commodity{
			width: 50%;
			box-sizing: border-box;
			padding: 20rpx;
			image{
				width: 341rpx;
				height: 341rpx;
			}
			.texts{
				margin-top: 25rpx;
				.t_name{
					font-size: 24rpx;
				}
				.t_sell{
					font-size: 24rpx;
					color: #999999;
					margin: 15rpx 0;
				}
				.t_price{
					font-size: 28rpx;
					color:#D80000;
				}
			}
		}
	}
	.show{
		transform: translateY(0);
	}
	.Noshow{
		transform: translateY(100%);
	}
	
</style>
