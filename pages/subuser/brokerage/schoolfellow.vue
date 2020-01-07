<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">直推</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">间推</text>
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
			:startDate = "startDate"
			:endDate = "endDate"
			:selected = 'buy_selected'
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
				dataList:''
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_Subordinate,{
				user_id:this.$store.state.user.id,
			},function(self,res){
				console.log(res)
				self.dataList = res.data
			})
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		background-color: #F6F6F7;
		.allorder{
			width: 100%;
			height: 100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			background-color: #FFFFFF;
			margin-bottom: 30rpx;
			text{
				flex: 1;
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
