<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">一班同学</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">二班同学</text>
		</view>
		<view class="screen_box">
			<view class="box_list">
				<view class="list_test" @tap="empty">
					清空
				</view>
				<view class="list_test" @tap="confirms">
					确认
				</view>
			</view>
			<view class="box_list">
				<view class="" @tap="open(1)">
					开始日期：{{sta_time}}
				</view>
				<view class="" @tap="open(2)">
					结束日期：{{ent_time}}
				</view>
			</view>
			
		</view>
		<!-- 一级 -->
		<view class="box"  v-show="cur==0"> 
			<view class="line" v-for="(item,index) in dataList.one" :key='item.id'>
				<image class="l_left" :src="APIconfig.api_img+item.avatar"></image>
				<view class="l-right">
					<view style="display: flex;"><text style="display:block;width: 240rpx;">用户名：{{item.username}}</text><text>{{item.mobile}}</text></view>
					<view><text>成为同学时间：</text><text style="margin-right: 20rpx;">{{item.referrer_time == true?item.referrer_time:item.add_time}}</text></view>
				</view>
			</view>
		</view>
		<!-- 二级 -->
		<view class="box"  v-show="cur==1">
			<view class="line" v-for="(item,index) in dataList.two" :key='item.id'>
				<image class="l_left" :src="APIconfig.api_img+item.avatar"></image>
				<view class="l-right">
					<view style="display: flex;"><text style="display:block;width: 240rpx;">用户名：{{item.username}}</text><text>{{item.mobile}}</text></view>
					<view><text>成为同学时间：</text><text style="margin-right: 20rpx;">{{item.referrer_time == true?item.referrer_time:item.add_time}}</text></view>
				</view>
			</view>
		</view>
		<view>
		    <uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
			:showMonth="false"
		     ></uni-calendar>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import uniCalendar from "../../../components/uni-calendar/uni-calendar.vue"
	export default{
		components:{
			returns,
			uniCalendar
		},
		data(){
			return{
				title:'我的同学',
				cur:0,
				dataList:'',
				type:'',
				sta_time:'',
				ent_time:''
			}
		},
		methods:{
			open(type){
				this.type = type
				this.$refs.calendar.open();
			},
			confirm(e) {  //日历表选择日期时间
				console.log(e);
				if(this.type == 1){
					if(new Date(e.fulldate).getTime() > new Date(this.ent_time).getTime()){
						uni.showToast({
							icon:'none',
							title:'请选择正确的时间'
						})
						return
					}else{
						this.sta_time = e.fulldate
					}
				}else{
					if(new Date(this.sta_time).getTime() > new Date(e.fulldate).getTime()){
						uni.showToast({
							icon:'none',
							title:'请选择正确的时间'
						})
						return
					}else{
						this.ent_time = e.fulldate
					}
				}
			},
			empty(){ //清空
				[this.sta_time,this.ent_time] = ''
			},
			confirms(){//确认
				let data = {
					user_id:this.$store.state.user.id,
					start_time:new Date(this.sta_time).getTime(),
					end_time:new Date(this.ent_time).getTime(),
				}
				this.requst(data)
			},
			requst(data){
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_Subordinate,data,function(self,res){
					console.log(res)
					self.dataList = res.data
					if(self.dataList.length == 0){
						uni.showToast({
							icon:'none',
							title:res.msg
						})
					}
				})
			}
		},
		onLoad() {
			let data = {
				user_id:this.$store.state.user.id,
			}
			this.requst(data)
		}
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
			}
		}
		.screen_box{
			font-size: 28rpx;
			background: #fff;
			padding: 0 20rpx 30rpx 20rpx;
			.box_list{
				display: flex;
				border-bottom: 2rpx solid #ccc;
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
		}
		.line{
			background: #FFFFFF;
			display: flex;
			align-items: center;
			padding: 30rpx 20rpx;
			.l_left{
				width: 100rpx;
				height: 100rpx;
				margin-right: 30rpx;
			}
			.l-right{
				view:first-child{
					font-size: 28rpx;
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
