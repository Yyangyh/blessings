<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="chiose(1)" class="one" :class="{active:type == 1}">一班同学</text>
			  <text @click="chiose(2)" class="two" :class="{active:type == 2}">二班同学</text>
		</view>
		<view class="screen_box">
			<view class="box_list">
				<view class="list_test">
					{{one_num}}人
				</view>
				<view class="list_test">
					{{two_num}}人
				</view>
			</view>
			<!-- <view class="box_list">
				<view class="" @tap="open(1)">
					开始日期：{{sta_time}}
				</view>
				<view class="" @tap="open(2)">
					结束日期：{{ent_time}}
				</view>
			</view> -->
			
		</view>
		<!-- 一级 -->
		<view class="box"> 
			<view class="line" v-for="(item,index) in dataList" :key='item.id'>
				<view class="l_left">
					<image class="" :src="$api_img()+item.avatar"></image>
				</view>
				<view class="l-right">
					<view ><text style="">昵称：{{item.nickname}}</text><text>{{item.mobile}}</text></view>
					<view><text>成为同学时间：</text><text style="margin-right: 20rpx;">{{item.referrer_time}}</text></view>
				</view>
			</view>
		</view>
		<!-- 二级 -->
		<!-- <view class="box"  v-show="cur==1">
			<view class="line" v-for="(item,index) in dataList.two" :key='item.id'>
				<image class="l_left" :src="$api_img()+item.avatar"></image>
				<view class="l-right">
					<view style="display: flex;"><text style="display:block;width: 240rpx;">用户名：{{item.username}}</text><text>{{item.mobile}}</text></view>
					<view><text>成为同学时间：</text><text style="margin-right: 20rpx;">{{item.referrer_time == true?item.referrer_time:item.add_time}}</text></view>
				</view>
			</view>
		</view> -->
		<!-- <view>
		    <uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
			:showMonth="false"
		     ></uni-calendar>
		</view> -->
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue'
	// import uniCalendar from "../../../components/uni-calendar/uni-calendar.vue"
	export default{
		components:{
			returns,
			// uniCalendar
		},
		data(){
			return{
				title:'我的同学',
				type:1,
				dataList:[],
				one_num:0,
				two_num:0,
				more: 'more',
				page:1,
				loadRecord: true
				// sta_time:'',
				// ent_time:''
			}
		},
		methods:{
			// open(type){
			// 	this.type = type
			// 	this.$refs.calendar.open();
			// },
			// confirm(e) {  //日历表选择日期时间
			// 	if(this.type == 1){
			// 		if(new Date(e.fulldate).getTime() > new Date(this.ent_time).getTime()){
			// 			uni.showToast({
			// 				icon:'none',
			// 				title:'请选择正确的时间'
			// 			})
			// 			return
			// 		}else{
			// 			this.sta_time = e.fulldate
			// 		}
			// 	}else{
			// 		if(new Date(this.sta_time).getTime() > new Date(e.fulldate).getTime()){
			// 			uni.showToast({
			// 				icon:'none',
			// 				title:'请选择正确的时间'
			// 			})
			// 			return
			// 		}else{
			// 			this.ent_time = e.fulldate
			// 		}
			// 	}
			// },
			// empty(){ //清空
				
			// 	[this.sta_time,this.ent_time] = ''
			// 	let data= {
			// 		user_id:this.$store.state.user.id,
			// 	}
			// 	this.requst(data)
			// },
			// confirms(){//确认
			// 	let data = {
			// 		user_id:this.$store.state.user.id,
			// 		start_time:new Date(this.sta_time).getTime(),
			// 		end_time:new Date(this.ent_time).getTime(),
			// 	}
			// 	this.requst(data)
			// },
			chiose(type){
				this.more = 'loading'
				if(type != this.type){
					this.type = type
					this.page = 1
					this.dataList.length = 0
				}
				let data = {
					user_id:this.$store.state.user.id,
					// user_id:'174',
					type:type,
					page:this.page
				}
				this.requst(data)
			},
			requst(data){
				let req_data = data
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_Subordinate,data,function(self,res){
					console.log(res)
					
					// self.dataList = res.data.data
					let data = self.dataList
					if(res.data.data){
						if(req_data.type == 1 && !self.one_num){
							self.one_num = res.data.total
						}else if(req_data.type == 2 && !self.two_num){
							self.two_num = res.data.total
						}
						data.push(...res.data.data)
						self.dataList = data
						self.page ++
						self.more = 'more'
						if (res.data.data.length < 20) {
							self.more = 'noMore'
							self.loadRecord = false
							return
						}
					}else{
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
					
					
					
				})
			}
		},
		onLoad() {
			let data = {
				user_id:this.$store.state.user.id,
				// user_id:174,
				type:1,
				page:this.page
			}
			// this.chiose(2)
			this.requst(data)
			
			
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_Subordinate,{
				user_id:this.$store.state.user.id,
				type:2,
			},function(self,res){
				if(res.data.data){
					self.two_num = res.data.total
				}
			})
			
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			this.chiose(this.type)
		},
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F7;
	}
	.content{
		width: 100%;
		// height: 100vh;
		background-color: #F6F6F7;
		.allorder{
			width: 100%;
			height: 100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			background-color: #FFFFFF;
			border-bottom: 2rpx solid #ccc;
			text{
				flex: 1;
				border-bottom: 4rpx solid #fff;
			}
		}
		.screen_box{
			font-size: 28rpx;
			background: #fff;
			// padding: 0 20rpx 30rpx 20rpx;
			.box_list{
				display: flex;
				.list_test{
					text-align: center;
				}
				view{
					width: 50%;
					height: 90rpx;
					line-height: 90rpx;
				}
				
			}
			
		}
		.active{
			color:#D80000;
			border-bottom-color: #D80000 !important;
		}
		.box{
			margin-top: 20rpx;
		}
		.line{
			background: #FFFFFF;
			display: flex;
			align-items: center;
			padding: 30rpx 20rpx;
			.l_left{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 30rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.l-right{
				flex-grow: 2;
				view:first-child{
					font-size: 28rpx;
					text{
						margin-right: 60rpx;
					}
				}
				view:last-child{
					font-size: 24rpx;
					color:#999999;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
