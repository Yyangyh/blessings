<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>购物车</text>
			<text v-show="show == true" @click="show = !show">编辑</text>
			<text class="show" v-show="show == false" @click="show = !show">完成</text>
		</view>
		
		<view class="">
			<!-- <view class="all">
				<label class="radio" @click="allElection()"><radio value="r1" :checked="checked" />全选</label>
			</view> -->
			
			<view class="tab">
				<view class="tab_list" v-for="(item,index) in data" :key='item.id'>
					<view class="tab_left">
						<label class="radio" @click="singleElection(index)"><radio value="r1" :checked="item.choice" /></label>
					</view>	
					<image :src="item.images" mode="aspectFill"></image>
					<view class="tab_right">
						<!-- <view class="test_one">
							武汉-特色产品
						</view> -->
						<view class="test_two">
							{{item.title}}
						</view>
						<view class="test_three">
							<view class="test_left">
								￥{{item.price}}
							</view>
							<view class="test_right">
								<text @click="stock(0,index)">-</text>
									<view class="num">
										{{item.stock}}
									</view>
								<text @click="stock(1,index)">+</text>
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		
		<view class="tab_bottom"  v-if="show == true">
			<view class="alls">
				<label class="radio" @click="allElection()"><radio value="r1" :checked="checked" />全选</label>
			</view>
			<view class="total">
				<view class="">
					<view class="">
						合计:<text>￥{{allPrice}}</text>
					</view>
					<view class="">
						（不含运费）
					</view>
				</view>
				<button @click="settlement()">去结算</button>
			</view>
		</view>
		<view class="tab_delete" v-else-if="show == false">
			<view class="alls">
				<label class="radio" @click="allElection()"><radio value="r1" :checked="checked" />全选</label>
			</view>
			
			<button @click="deletes()">删除</button>
		</view>
	</view>
	
</template>

<script>
	export default{
		data() {
			return {
				checked:false,
				num:1,
				show:true,
				data:[],
				allPrice:0,
				shopp_test:'编辑'
			}
		},
		methods:{
			stock(type,index){ //改变数量
				let all = []
				if(type == 0){
					if(this.data[index].stock == 1) return
					this.data[index].stock --
					for (let s of this.data) {
						if(this.data[index].choice === true)all.push(s.stock * s.price)
					}
					if(all != '')this.allPrice = all.reduce((n,m) => n+m)
				}else{
					this.data[index].stock ++
					for (let s of this.data) {
						if(this.data[index].choice === true)all.push(s.stock * s.price)
					}
					if(all != '')this.allPrice = all.reduce((n,m) => n+m)
				}
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.c_Stock,{
					user_id:this.$store.state.user.id,
					id:this.data[index].id,
					goods_id:this.data[index].goods_id,
					stock:this.data[index].stock
				},function(self,res){
				})
			},
			allElection(){ //全选
				this.checked = !this.checked
				if(this.checked == true){
					let all = []
					for (let s of this.data) {
						s.choice = true
						all.push(s.stock * s.price)
					}
					if(all != '')this.allPrice = all.reduce((n,m) => n+m)
				}else{
					for (let s of this.data) {
						s.choice = false
						this.allPrice = 0
					}
				}
			},
			singleElection(index){//单选
				this.data[index].choice = !this.data[index].choice
				if(this.data[index].choice == true){ //全选
					let arr_choice = this.data.map(x => x.choice)
					if(arr_choice.indexOf(false) == -1) this.checked = true
				}
				if(this.data[index].choice == false){ //非全选
					for (let s of this.data) {
						if(s.choice == false) this.checked = false
					}
				}
				let all = []
				
				for (let s of this.data) {
					if(s.choice == true){
						all.push(s.stock * s.price)
					}
				}
				all != '' ? this.allPrice = all.reduce((n,m) => n+m) :this.allPrice = 0
			},
			deletes(){  //删除
				let all =[]
				for (let s of this.data) {
					if(s.choice == true){
						all.push(s.id)
					}
				}
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.c_Delete,{
					user_id:this.$store.state.user.id,
					id:all.join(','),
				},function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						let data = self.data
						for(let i=data.length-1;i>=0;i--){  //倒序删除
							if(data[i].choice == true){
								data.splice(i,1);
							}
						}
						
					}
				})
			},
			settlement(){ //结算
			
			
			
				let all = []
				let choice_list = []
				for (let s of this.data) {
					if(s.choice == true)all.push(s.id)
				}
				
				if(all.length == 0){
					uni.showToast({
						icon:'none',
						title:'请选择需要购买的商品'
					})
					return
				}
				let data = {
					id:all.join(','),
					type:'cart'
				}
				uni.navigateTo({
					url:'./s_order?data='+JSON.stringify(data)
				})
				
				
			},
			
		},
		onReady() {  //获取购物车列表
			this.service.entire(this,'post',this.APIconfig.api_root.com_page.c_Index,{
				user_id:this.$store.state.user.id
			},function(self,res){
				
				let list = res.data.data
				for (let s of list) {
					s.choice = false
				}
				self.data = list
			})
		}
	}
	
</script>

<style scoped lang="scss">
	.content{
		
	}
	.top{
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 105rpx;
		padding: 0 30rpx;
		box-shadow: 0 0 5px #ccc;
		font-size: 32rpx;
		image{
			height: 40rpx;
			width: 40rpx;
		}
		text:nth-of-type(1){
			font-size: 32rpx;
			font-weight: bold;
		}
		text:nth-of-type(2){
			font-size: 28rpx;
			color: #666666;
		}
	}
	.show{
		color: #1D9DFF;
	}
	.all{
		padding: 0 40rpx;
		margin: 44rpx 0 56rpx 0;
	}
	.tab{
		margin-top: 20rpx;
	}
	.tab_list{
		display: flex;
		align-items: center;
		padding: 0 40rpx;
		margin-bottom: 60rpx;
		image{
			width: 220rpx;
			height: 142rpx;
			margin: 0 20rpx 0 10rpx;
		}
		.tab_right{
			/* width: 100%; */
			flex-grow: 2;
			.test_one{
				font-size: 28rpx;
				color: #666666;
			}
			.test_two{
				font-size: 24rpx;
				color: #333333;
				margin: 9rpx 0 17rpx 0;
			}
			.test_three{
				display: flex;
				justify-content: space-between;
				/* width: 100%; */
				.test_left{
					color: #FF431D;
					font-size: 36rpx;
				}
				.test_right{
					font-size: 30rpx;
					text{
						display: inline-block;
						color: #999999;
						border: 2rpx solid #999999;
						border-radius: 8rpx;
						width: 52rpx;
						height: 36rpx;
						line-height: 36rpx;
						text-align: center;
					}
					view{
						display: inline-block;
						width: 60rpx;
						text-align: center;
					}
				}
			}
		}
	}
	
	
	.tab_bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 2rpx solid #F1F1F1;
		padding:0 40rpx;
		height: 120rpx;
		color: #666;
		
		.total{
			display: flex;
			text{
				color: #FF431D;
			}
			view{
				&:nth-of-type(1){
					font-size: 32rpx;
				}
				&:nth-of-type(2){
					font-size: 24rpx;
					text-align: right;
				}
			}
			
		}
		
	}
	.radio{
		display: flex;
		align-items: center;
	}
	.alls{
		font-size: 34rpx;
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
	}
	
</style>
