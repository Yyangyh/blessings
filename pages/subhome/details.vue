<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>产品详情</text>
			<image src='../../static/image/subhome/share.png'></image>
		</view>
		<view class="worp">
			<image :src="goods.images"></image>
			<view class="name">{{goods.title}}</view>
			<view class="evaluate">
				<view class="start"  v-if="isLoad">
					<image src="../../static/image/subhome/start.png" mode="widthFix" v-for="(item,index) in goods.comments_score" :key='index'></image>
				</view>
				
				<text>{{goods.comments_score}}</text>
				<text>已售{{goods.sales_count}}件</text>
			</view>
			<view class="price">{{goods.price}}</view>
		</view>
		<view class="worp">
			<view class="line">
				<view class="l-left">
					<image src="../../static/image/subhome/juan.png" mode="widthFix"></image>
					<text>优惠券</text>
				</view>
				<view class="l-right" @tap="show = true">
					<text>领劵</text>
					<image src='../../static/image/index/go.png' mode="widthFix"></image>
				</view>
			</view>
			<hr />
			<view class="line">
				<view class="l-left">
					<image src="../../static/image/subhome/freight.png" mode="widthFix"></image>
					<text>运费：</text>
					<view>{{is_freight_free == 1 ? '包邮' : freight_price}}</view>
				</view>
				<view class="l-right"></view>
			</view>
		</view>
		<view class="user_top">
			<view class="">
				用户评论
			</view>
			<view class="" @tap="$jump('../subuser/threeuser/s_comment_list'+'?goods_id='+id)">
				全部
			</view>
		</view>
		<view class="user_comment" v-for="(item,index) in comment_data" :key='item.id'>
			<view class="user">
				<view class="user_one">
					<image class="user_img"  :src="item.user.avatar" mode="widthFix"></image>
					<view class="user_test" >
						<view>{{item.user.user_name_view}}</view>
					</view>
				</view>
				<view class="user_star">
					
					<view class="">
						<image v-for="(item,index) in item.rating_num" src="/static/image/com_page/stars.png" mode="widthFix"></image>
					</view>
					<text>{{item.add_time_date}}</text>
				</view>
			</view>
			<view class="com_content">
				<view class="content_test">
					<view class="">
						{{item.content}}
					</view>
				</view>
				<view class="content_img">
					<image v-for="(items,indexs) in item.images" :key='index' :src="items" mode=""></image>
				</view>
				
			</view>
		</view>
		<view class="p-t">活动详情</view>
		<image class="image" src='../../static/image/index/xq.png' mode="widthFix"></image>
		<view class="shopping">
			<view class="to">
				<view class="cart" @tap="$jump('../com_page/shopp_cart')">
					<image src="../../static/image/subhome/cart.png" mode="widthFix"></image>
					<view>购物车</view>
				</view>
				<!-- 收藏 -->
				<view class="collect"  @tap="collect()">
					<!-- <image src="../../static/image/subhome/heart%20.png" mode="widthFix"></image> -->
					<image v-show="collects == 0" src="../../static/image/com_page/collect.png" mode="widthFix"></image>
					<image v-show="collects == 1" src="../../static/image/com_page/collect_HL.png" mode="widthFix"></image>
					<view>收藏</view>
				</view>
			</view>
			<view class="btn">
				<button type="default" @click="show = 1,type = 'cart'">加入购物车</button>
				<button type="default"  @click="show = 1,type = 'goods'">立即购买</button>
			</view>
		</view>
		
		<view class="mask_black" v-show="show == 1 || show === true" @click="show = 0">
			<!-- 遮罩层 -->
		</view>
		
		<view class="discount_box"  :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''">
			<view class="box_top">
				优惠详情
			</view>
			<view class="box_list">
				<scroll-view  scroll-y="true" class="scroll-Y">
					<view class="cou_list" v-for="(item,index) in coupon" :key='item.id'>
						<view class="cou_test">
							<view class="cou_left">
								<view class="left_one">
									￥<text>{{item.discount_value}}</text>{{item.type == 1?'折':'元'}}
								</view>
								<view class="left_two">
									{{item.use_limit_type_name}}
								</view>
								<!-- <view class="left_two">
									有效期：{{item.fixed_time_start}}至{{item.fixed_time_end}}
								</view> -->
							</view>
							
							<view class="cou_right" :class="{already:item.is_operable == 0}" @click="receive(index)">
								{{item.is_operable == 0?'已领取':'领取'}}
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- <button @click="finish()">完成</button> -->
		</view>
		
		
		
		
		<view class="mask_white" :class="show===0 ? 'mask_none' : show===1 ? 'mask_show' : ''">
			<view class="wh_top">
				<image :src="goods.images" mode="aspectFill"></image>
				<view class="wh_right">
					<view class="wh_test1">
						￥{{price}}
					</view>
					<view class="wh_test2">
						库存{{inventory}}
					</view>
					<view class="wh_test3">
						选择 规格 数量
					</view>
				</view>
			</view>
		
			<view class="norms">
				<view class="norms_list" v-for="(item,index) in choose_list" :key='item.id'>
					<view class="norms_test">
						{{item.name}}
					</view>
					<view class="norms_box">
						<button v-for="(items,indexs) in item.value" :key='indexs' :disabled="items.disabled" :class="{norms_show:items.show == true,disabled:items.disabled}"
						 @click="choose(index,indexs)">{{items.name}}</button>
					</view>
				</view>
			</view>
			<view class="wh_bottom">
				<view class="">
					购买数量
				</view>
				<view class="change">
					<text class="reduce" @click="change_num('reduce')">-</text>
					<text class="num">{{num}}</text>
					<text class="plus" @click="change_num('plus')">+</text>
				</view>
			</view>
			<button class="save" @click="save()">确定</button>
			<image class="close" src="../../static/image/secondary/close2.png" mode="widthFix" @click="show = 0"></image>
		</view>
		<load v-if="load_show"></load>
	</view>
</template>

<script>
	import collect_img from '../../static/image/com_page/collect_HL.png'
	import integral_img from '../../static/image/com_page/integral.png'
	import load from '../common/load.vue'
	export default{
		components:{
			load
		},
		data(){
			return{
				title:'产品详情',
				goods:'',
				isLoad: false,
				is_freight_free:'',
				freight_price:'',
				show:0,
				coupon:'',
				num:1,
				choose_list:[],
				price:'',
				inventory:'',
				type:'',
				id:'',
				index_list:0,
				spec:[],
				comment_data:'',
				collects:'',
				load_show:true,
				shows:false,
			}
		},
		methods:{
			receive(index){//领取优惠券
				this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_receive,{
					coupon_id:this.coupon[index].id,
					user_id:this.$store.state.user.id
				},function(self,res){
					if(res.code == 0){
						self.coupon[index].is_operable = 0
					}else{
						uni.showToast({
							icon:'none',
							title:res.msg
						})
					}
				})
			},
			change_num(type){ //改变购买数量
				if(type == 'reduce'){
					this.num == 1 ? this.num = 1 : this.num--
				}else{
					this.num++
				}
			},
			choose(index, indexs) { //选择规格
				// console.log(this.index_list,index)
				
				let data = this.choose_list
				
				if(index == this.index_list){ //同级选择
					
					this.index_list == data.length - 1? this.index_list = index : this.index_list = index + 1 //记录index
					for (let s of data[index].value) {
						s.show = false
					}
					data[index].value[indexs].show = true
					this.choose_list = JSON.parse(JSON.stringify(data))
					
					this.spec[index] = {  
						type: data[index].name,
						value: data[index].value[indexs].name
					}
					console.log(this.spec)
					if(index == data.length -1){ //最后一步，请求商品库存
						this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_SpecDetail,{
							id: this.id,
							spec: this.spec
						},function(self,res){
							console.log(res)
							self.price = res.data.price
							self.inventory = res.data.inventory
							
						})
						return
					}
				}else if(index < this.index_list){  //向上选择
					this.spec.length = index
					for (let i = index; i < data.length; i++) {
						for (let k of data[i].value) {
							k.show = false
						}
					}
					for (let i = index + 1; i < data.length; i++) {
						for (let k of data[i].value) {
							k.disabled = true
						}
					}
					data[index].value[indexs].show = true
					data[index].value[indexs].disabled = false
					this.choose_list = JSON.parse(JSON.stringify(data))
					
					this.spec.push({
						type: data[index].name,
						value: data[index].value[indexs].name
					})
					this.index_list = this.spec.length
					
				}
				console.log(this.spec)
				this.service.entire(this, 'post', this.APIconfig.api_root.subhome.s_SpecType, {
					id: this.id,
					spec: this.spec
				}, function(self, res) {
					console.log(res)
					if (res.code == 0) {
						let res_data = res.data
						for (let k of res_data) {
							for (let s of data[self.index_list].value) {
								if(k == s.name) s.disabled = false
							}
						}
						
						self.choose_list = data
					}
				})
				// console.log(this.index_list,index)
			
			},
			save() { //确定
				if(this.goods.specifications.choose.length != this.spec.length){
					uni.showToast({
						icon:'none',
						title:'请选择商品规格！'
					})
					return
				}
				if(this.type == 'cart'){
					this.service.entire(this, 'post', this.APIconfig.api_root.subhome.s_Save, {
						goods_id: this.id,
						stock: this.num,
						spec: this.spec,
						user_id:this.$store.state.user.id,
					}, function(self, res) {
						if (res.code == 0) {
							uni.showToast({
								icon:'none',
								title:'成功加入购物车！'
							})
							self.show = 0
						}
					})
				}else{
					let data = {
						id:this.id,
						type:'goods',
						num:this.num,
						spec:this.spec
					}
					uni.navigateTo({
						url: '../com_page/s_order?data='+JSON.stringify(data)
					})
				}
					
			},
			collect(){ //商品收藏
			
				let times = this.service.loading()
				this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_Favor,{ 
					user_id:this.$store.state.user.id,
					id:this.id
				},function(self,res){
					console.log(res)
					uni.hideLoading()
					clearTimeout(times)
					self.tips_test = res.msg
					self.tips_img = collect_img
					self.shows = true
					setTimeout(function() {
						self.shows = false
					}, 1500);
					if(res.code == 0){
						self.collects == 1? self.collects = 0 : self.collects = 1
					}
				})
			}
		},
		onLoad(e){
			this.id = e.id
			this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_detail,{
				goods_id:e.id,
				user_id:this.$store.state.user.id,
			},function(self,res){
				
				self.goods = res.data.goods
				self.goods.stars_num = new Array(Number(res.data.goods.comments_score_star))
				self.isLoad = true
				self.is_freight_free = res.data.goods.freight_free.is_freight_free
				self.freight_price = res.data.goods.freight_free.freight_price
				self.coupon =  res.data.plugins_coupon_data
				
				self.comment_data = res.data.goods.comments
				for (let s of self.comment_data) {
					s.rating_num = new Array(Number(s.rating))
				}
				self.price = res.data.goods.price
				self.inventory = res.data.goods.inventory
				let list = res.data.goods.specifications.choose
				if(list != ''){
					for (let s of list) {
						for (let k of s.value) {
							k.show = false
							k.disabled = true
						}
					}
					for (let s of list[0].value) {
						s.disabled = false
					}
				}
				self.choose_list = list
				self.load_show = false
			})
			
		},
		onShow(){
			
		}
	}
</script>

<style lang="scss">
	.content{
		overflow: hidden;
		width: 100%;
		// height: 100vh;
		background-color: #F6F6F6;
		padding-bottom: 130rpx;
		.top{
			position: fixed;
			width: 100%;
			z-index: 886;
			box-sizing: border-box;
			top: var(--status-bar-height);
			left: 0;
			display: flex;
			height: 105rpx;
			padding: 0 30rpx;
			font-size: 32rpx;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			image:first-child{
				width: 31rpx;
				height: 31rpx;
			}
			image:last-child{
				width: 50rpx;
				height: 50rpx;
			}
		}
		
		.worp{
			width: 100%;
			background-color: #FFFFFF;
			margin-bottom: 30rpx;
			image{
				width: 100%;
				height: 750rpx;
			}
			hr{
				height:1rpx;
				border: none;
				border-top:1rpx solid #F4F4F4;
				width: 97%;
				margin: 0 auto;
			}
			.name{
				font-size: 28rpx;
				font-weight:500;
				padding: 0 20rpx;
			}
			.evaluate{
				display: flex;
				align-items: center;
				margin: 20rpx 20rpx;
				.start{
					display: flex;
					margin-right: 15rpx;
					image{
						width: 25rpx;
						height: 25rpx;
					}
				}
				text{
					font-size: 24rpx;
					color:#999999;
					margin-right: 15rpx;
				}
			}
			.price{
				font-size: 32rpx;
				color:#D80000;
				padding: 0 0 20rpx 20rpx;
			}
			.line{
				display: flex;
				justify-content: space-between;
				padding: 30rpx 20rpx;
				align-items: center;
				.l-left{
					display: flex;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-right: 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #999999;
					}
					view{
						font-size: 24rpx;
					}
				}
				.l-right{
					display: flex;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-left: 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #999999;
					}
				}
			}
			.top{
				display: flex;
				justify-content: space-between;
				align-items:center;
				margin: 0 30rpx;
				padding: 20rpx 0;
				text:first-child{
					font-size: 27rpx;
					color: #000000;
				}
				text:last-child{
					font-size: 23rpx;
					color:#EF7C38;
				}
			}
			.comment{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 20rpx 30rpx;
				.c-left{
					display: flex;
					align-items: center;
					image{
						width: 80rpx;
						height: 80rpx;
						margin-right: 15rpx;
					}
					text{
						font-size: 28rpx;
						color: #333333;
					}
				}
				.c-right{
					.start{
						display: flex;
						image{
							width: 32rpx;
							height: 32rpx;
							margin-right: 5rpx;
						}
					}
					view{
						font-size: 24rpx;
						color: #999999;
						text-align: center;
						margin: 5rpx 0 0 0;
					}
				}
			}
			.type{
				font-size: 24rpx;
				color: #333333;
				margin: 20rpx 30rpx;
			}
		}
		.user_top {
			background: #fff;
			display: flex;
			justify-content: space-between;
			font-weight: bold;
			font-size: 28rpx;
			padding: 20rpx;
			view{
				&:nth-of-type(2){
					color: #EF7C38;
				}
			}
			
		}
		.user_comment {
			background: #fff;
			border-bottom: 2rpx solid #EEEEEE;
			padding: 20rpx 30rpx;
			.user {
				display: flex;
				// align-items: center;
				justify-content: space-between;
				margin: 20rpx 0;
				.user_one{
					display: flex;
					.user_img {
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
					}
					.user_test {
						margin: 0 20rpx;
						font-size: 32rpx;
						view {
							font-weight: bold;
							color: #333333;
							font-size: 28rpx;
						}
						
					}
				}
				.user_star {
					align-self: flex-start;
					font-size: 24rpx;
					color: #333333;
					image {
						height: 26rpx;
						width: 26rpx;
					}
					text {
						font-size: 24rpx;
						color: #999999;
						
					}
				}
			}
			.com_content {
				.content_test view {
					font-size: 24rpx;
					color: #666666;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.content_img image {
					height: 120rpx;
					width: 120rpx;
					margin-right: 16rpx;
					margin-top: 30rpx;
				}
				.more {
					font-size: 32rpx;
					color: #666666;
					margin: 20rpx 0;
				}
				
			}
		}
		.p-t{
			font-size: 28rpx;
			margin-left: 20rpx;
		}
		.image{
			margin-top: 30rpx;
			width: 100%;
			// height: 988rpx;
		}
		.shopping{
			width: 100%;
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			align-items: center;
			position: fixed;
			bottom: 0;
			height: 126rpx;
			.to{
				display: flex;
				margin: 0 30rpx;
				.cart{
					padding-right:20rpx ;
					image{
						width: 44rpx;
						height: 44rpx;
					}
					view{
						color:#999999;
						font-size: 24rpx;
						margin-left:-5rpx ;
					}
				}
				.collect{
					text-align: center;
					image{
						width: 44rpx;
						height: 44rpx;
						// margin-left:10rpx ;
					}
					view{
						color:#999999;
						font-size: 24rpx;
						margin-left:-5rpx ;
					}
				}
			}
			.btn{
				display: flex;
				margin-right:20rpx ;
				button:first-child{
					font-size: 30rpx;
					color:#FFFFFF;
					background-color: #EF7C38;
					text-align: center;
					width: 263rpx;
					height: 80rpx;
					line-height: 80rpx;
					border-radius: 50rpx 0 0 50rpx;
				}
				button:last-child{
					font-size: 30rpx;
					color:#FFFFFF;
					background-color: #D80000;
					text-align: center;
					width: 263rpx;
					height: 80rpx;
					line-height: 80rpx;
					border-radius:0 50rpx 50rpx 0;
				}
			}
		}
		
		.discount_box{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			min-height: 760rpx;
			background: #fff;
			z-index: 999;
			transition: .3s;
			transform: translateY(100%);
			button{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				font-size: 30rpx;
				color: #fff;
				background: #1D74FF;
			}
			.box_top{
				text-align: center;
				font-size: 28rpx;
				padding: 20rpx 0;
				color: #333333;
			}
			.box_list{
				height: 560rpx;
				.scroll-Y{
					height: 660rpx;
					.cou_list{
						/* position: relative; */
						background: url('../../static/image/com_page/coupon_blue.png') no-repeat;
						background-size: 100% 100%;
						width: 710rpx;
						height: 182rpx;
						display: flex;
						align-items: center;
						margin: 0 auto;
						margin-top: 30rpx;
						color: #1D9DFF;
						.cou_test{
							/* position: absolute; */
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 0 40rpx;
							.cou_left{
								color: #1D9DFF;
								font-size: 28rpx;
								text{
									font-size:48rpx;
									margin-right: 16rpx;
								}
								.left_two{
									font-size: 24rpx;
								}
								
							}
							.cou_right{
								width: 142rpx;
								height: 60rpx;
								line-height: 60rpx;
								border-radius: 60rpx;
								text-align: center;
								font-size: 30rpx;
								color: #FFFFFF;
								background: #1D9DFF;
							}
							
						}
						image{
							width: 45rpx;
							height: 45rpx;
						}
					}
				}
			}
		}
		.mask_none{
			transform: translateY(100%) !important;
		}
		.mask_show{
			transform: translateY(0) !important;
		}
		.already{
			background: #999999 !important;
		}
		
		
		.mask_white {
			position: fixed;
			padding: 20rpx;
			background: #fff;
			box-sizing: border-box;
			width: 100%;
			min-height: 884rpx;
			bottom: 0;
			left: 0;
			z-index: 999;
			transition: .2s;
			transform: translateY(100%);
			.wh_top {
				display: flex;
				align-items: flex-end;
				color: #333333;
				font-size: 24rpx;
				margin-bottom: 28rpx;
				image {
					width: 250rpx;
					height: 160rpx;
					margin-right: 22rpx;
				}
				.wh_right{
					.wh_test1 {
						color: #FF431D;
						font-size: 36rpx;
					}
					.wh_test2 {
						color: #999999;
						font-size: 24rpx;
						margin: 7rpx 0 8rpx 0;
					}
				}
			}
			.save {
				background: #D80000;
				color: #fff;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 80rpx;
				position: absolute;
				bottom: 20rpx;
				left: 2%;
				width: 96%;
			}
			.norms_test {
				margin: 0rpx 0 18rpx 0;
				font-size: 30rpx;
				
			}
			button {
				display: inline-block;
				background: #F1F1F1;
				color: #333333;
				font-size: 28rpx;
				height: 60rpx;
				line-height: 60rpx;
				padding: 0 34rpx;
				text-align: center;
				margin-bottom: 26rpx;
				margin-right: 20rpx;
				border-radius: 10rpx;
			
			}
			.wh_bottom {
				display: flex;
				justify-content: space-between;
				padding: 34rpx 0;
				border-top: 2rpx solid #F1F1F1;
				font-size: 30rpx;
				.change {
					display: flex;
					align-items: center;
				}
				.reduce {
					display: inline-block;
					background: #F3F3F3;
					height: 54rpx;
					line-height: 54rpx;
					text-align: center;
					width: 74rpx;
					color: #999999;
					font-size: 46rpx;
					border-radius: 10rpx;
				}
				.num {
					background: #E8E8E8;
					font-size: 30rpx;
					display: inline-block;
					height: 54rpx;
					line-height: 54rpx;
					border-radius: 10rpx;
					width: 74rpx;
					text-align: center;
					margin: 0 4rpx;
				}
				.plus {
					background: #E8E8E8;
					font-size: 46rpx;
					display: inline-block;
					height: 54rpx;
					line-height: 54rpx;
					color: #999999;
					width: 74rpx;
					text-align: center;
					border-radius: 10rpx;
				}
			}
			.close {
				height: 40rpx;
				width: 40rpx;
				position: absolute !important;
				top: 12rpx;
				right: 12rpx;
			}
			.norms_show {
				background: #1D9DFF !important;
				color: #fff !important;
			}
			
			.disabled {
				opacity: 0.5;
			}
		}
		
	}
</style>
