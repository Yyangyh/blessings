<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur = 0" class="one" :class="{active:cur == 0}">幸福测评</text>
			  <text @click="cur = 1" class="two" :class="{active:cur == 1}">调查问卷</text>
			  <text @click="cur = 2" class="three" :class="{active:cur == 2}">测评记录</text>
		</view
		<!-- 幸福测评 -->
		<view class="box" v-if="cur === 0">
			<view class="tergum" v-for="(item,index) in dataList" :key='item.id' @tap="$jump('./listbox?id='+item.id+'&name='+item.name+'&img='+item.list_url)">
				<view class="worp">
					<view class="terLeft">
						<view>{{item.name}}</view>
						<view>{{item.total_do}}人已测</view>
					</view>
					<view class="terRight">
						<text>开始测试</text>
						<image src="../../static/image/index/go1.png" mode='widthFix'></image>
					</view>
				</view>
				<image class="Image" :src='$api_img()+item.img_url' mode="widthFix"></image>
			</view>
		</view>
		<!-- 问卷调查 -->
		<view class="questionnaire" v-if="cur === 1">
			<block v-if="voucher != ''">
				
				<image class="q_image" src="../../static/image/evaluating/back.png"  mode="widthFix"></image>
				<view class="q_box"  v-for="(item,index) in voucher" >
					<image class="q_box_img" src="../../static/image/evaluating/conten_back.png" mode="scaleToFill"></image>
					<view class="q_content">
						<block v-if="item.type == 1">
							<view class="title">{{item.name}}</view>
							<view class="line" >
								<view class="question" v-for="(items,indexs) in item.answer" @tap="chiose(index,indexs)" >
									<view class="circle" :class="{circle_red:item.index == indexs}">
										<view class="circle_entity"  :class="{entity_red:item.index == indexs}">
										</view>
									</view>
									<text>
										{{items.name}}
									</text>
								</view>
							</view>
						</block>
						<block v-else v-if="item.type == 2">
							<view class="opinion"  >{{item.name}}</view>
							<textarea @input="bindInput($event,index)" name="" id="" cols="30" rows="10"></textarea>
						</block>
						
						<!-- <view class="ganxie">
							十分感谢您对这次调查的支持！
						</view> -->
					</view>
				</view>
				
				<button  @tap="submit">提交问卷</button>
			</block>
			
			
			<block v-else>
				<view class="not">
					<image src="../../static/image/subhome/no_data.png" mode="widthFix"></image>
					<view class="">
						暂无数据
					</view>
				</view>
			</block>
		</view>
		<!-- 测评记录 -->
		<view class="line_record"  v-if="cur === 2"  v-for="(item,index) in record_data" @tap="$jump('./result?id='+item.id)">
			<view class="l-left">{{item.name}}</view>
			<view class="l-right">
				<text>查看结果</text>
				<image src='../../static/image/index/go1.png'></image>
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
				cur:0,
				dataList:[],
				voucher:'',
				opinion_test:'',
				record_data:'',
				index:0
			}
		},
		methods:{
			bindInput: function(e, index, indexs) {
				this.voucher[index].index = e.target.value
			},
			chiose(index,indexs){
				this.voucher[index].index = indexs
				this.voucher = JSON.parse(JSON.stringify(this.voucher))
			},
			submit(){
				let data = []
				for (let s of this.voucher) {
					if(s.type == 1){
						data.push(s.answer[s.index].id)
					}else{
						data.push(s.index)
					}
				}
				this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_qtn_submitQtn,{ //提交问券调查
					qtn_id :this.qtn_id,
					user_id:this.$store.state.user.id,
					data:data
				},function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						setTimeout(function() {
							self.service.returns()
						}, 1000);
					}
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_test_classify,{//幸福评测列表
				
			},function(self,res){
				self.dataList =res.data
			})
			
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_qtn_getQtn,{//问券调查
				id:5
			},function(self,res){
				self.qtn_id = res.data.id
				self.voucher = res.data.question
				console.log(self.voucher)
				for (let s of self.voucher) {
					s.index = 0
				}
			})
			
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_examList,{//获取用户的评测记录列表
				user_id:this.$store.state.user.id,
			},function(self,res){
				self.record_data = res.data
			})
		}
	}
</script>

<style lang="scss">
	
	.content{
		width: 100%;
		.allorder{
			width: 100%;
			position: fixed;
			top: calc(105rpx + var(--status-bar-height));
			z-index: 888;
			left: 0;
			height: 120rpx;
			background-color: #F6F6F7;
			display: flex;
			text-align: center;
			line-height: 120rpx;
			font-size: 28rpx;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
		.box{
			width: 100%;
			background-color: #FFFFFF;
			padding: 20rpx 20rpx 0 20rpx;
			box-sizing: border-box;
			.tergum{
				height: 350rpx;
				
				margin-bottom: 33rpx;
				position: relative;
				z-index: 80;
				.Image{
					width: 100%;
					height: 350rpx;
					top:0;
					left: 0;
					position: absolute;
					z-index: 75;
				}
				.worp{
					position:absolute;
					top: 50%;
					transform: translateY(-50%);
					width: 100%;
					z-index: 91;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 20rpx;
					.terLeft{
						view:first-child{
							font-size: 32rpx;
							color: #fff;
						}
						view:last-child{
							margin-top: 10rpx;
							font-size: 24rpx;
							color: #FFFFFF;
						}
					}
					.terRight{
						display: flex;
						align-items: center;
						image{
							width: 20rpx;
							height:20rpx;
						}
						text{
							font-size: 24rpx;
							color: #FFFFFF;
						}
					}
				}
			}
			.tergum1{
				width: 710rpx;
				height: 170rpx;
				// background: url(../../static/image/evaluating/cur2.png) no-repeat;
				// background-size: 100% 100%;
				margin: 30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 20rpx;
						margin: 0 50rpx 0 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
			.tergum2{
				width: 710rpx;
				height: 170rpx;
				// background: url(../../static/image/evaluating/cur3.png) no-repeat;
				// background-size: 100% 100%;
				margin: 30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 20rpx;
						margin: 0 50rpx 0 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
			.tergum3{
				width: 710rpx;
				height: 170rpx;
				// background: url(../../static/image/evaluating/cur4.png) no-repeat;
				// background-size: 100% 100%;
				margin:30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 20rpx;
						margin: 0 50rpx 0 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
		}
		.line_record{
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #FFFFFF;
			padding: 20rpx;
			margin-top:30rpx ;
			.l-left{
				font-size: 28rpx;
			}
			.l-right{
				font-size: 28rpx;
				color:#666666;
				display: flex;
				align-items: center;
				image{
					width: 35rpx;
					height: 34rpx;
					margin-left: 10rpx;
				}
			}
		}
		.questionnaire{
			position: relative;
			width: 100%;
			top: 105rpx;
			.not{
				color: #BFBFBF;
				text-align: center;
				image{
					width: 50%;
				}
			}
			.q_image{
				width: 100%;
				position:fixed ;
				top:220rpx;
				left: 0;
			}
			.q_box{
				font-size: 28rpx;
				position: relative;
				width: 90%;
				min-height: 280rpx;
				margin: 20rpx auto;
				top: 305rpx;
				.q_box_img{
					width: 100%;
					position: absolute;
					height: 100%;
					top:0;
					left: 0;
					z-index: 80;
				}
				.q_content{
					box-sizing: border-box;
					padding: 20rpx;	
					width: 100%;
					height: 100%;
					position: absolute;
					top:0;
					left: 0;
					z-index: 90;
				}
			}
			
			// background: url(../../static/image/evaluating/back.png) no-repeat;
			// background-size: 100% 100%;
			
			.line{
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
				margin-top: 20rpx;
				// width: 100%;
				.question{
					display: flex;
					align-items: center;
					height: 50rpx;
					width: 50%;
					.circle{
						width: 28rpx;
						height: 28rpx;
						box-sizing: border-box;
						background-color: #FFFFFF;
						border: 1rpx solid #999999;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 50%;
						margin-right: 10rpx;
						.circle_entity{
							height: 16rpx;
							width: 16rpx;
							border-radius: 50%;
							background: #fff;
							display: inline-block;
						}
						.entity_red{
							background: #D80000;
						}
					}
					.circle_red{
						border-color: #D80000;
					}
					text{
						font-size: 24rpx;
						color: #333333;
					}
					.tetes{
						margin-right:22rpx;
					}
				}
			}
			.opinion{
				font-size: 28rpx;
			}
			textarea{
				background-color: #FFFFFF;
				display: block;
				margin: 20rpx auto;
				width: 96%;
				height: 180rpx;
				padding: 20rpx;
				box-sizing: border-box;
			}
			.ganxie{
				font-size: 28rpx;
				color: #FFFFFF;
				text-align: center;
				margin-top: 60rpx;
			}
			button{
				width: 350rpx;
				height: 80rpx;
				background:linear-gradient(-90deg,rgba(253,176,100,1) 0%,rgba(255,133,49,1) 100%);
				box-shadow:10rpx 17rpx 25rpx 0rpx rgba(247,81,90,0.4);
				border-radius: 40rpx;
				text-align:center;
				line-height: 80rpx;
				color:#FFFFFF;
				margin: 345rpx auto 50rpx; 
			}
		}
	}
</style>
