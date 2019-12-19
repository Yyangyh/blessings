<template>
<view class="content">
	<view class="status_bar">
		
	</view>
	<view class="top">
		<view class="top_enlarge"  @click="service.returns()">
			<image src="/static/image/com_page/returns.png" mode="widthFix" ></image>
		</view>
		<text>我的证书</text>
		<text @tap="show = !show">{{show ? '完成':'编辑'}}</text>
	</view>
	<view class="line" v-for="(item,index) in data_lsit" :key='item.id'>
		
		<view class="l_left">
		
			<view class="tab_left"  style="transform: scale(0.8);" v-show="show">
				<label  class="radio" @click="singleElection(index)"><radio value="r1" :checked="item.choice" /></label>
			</view>	
			<view class="">
				{{item.text}}
			</view>
		</view>
		<view class="l_right" v-if="item.status == 1"  @tap="$jump('./certificate?id='+item.tid)">
			<text>查看</text>
			<image src="../../static/image/index/go.png"></image>
		</view>
		<view class="l_right" v-else-if="item.status == 0">
			<text>审核中</text>
			<!-- <image src="../../static/image/index/go.png"></image> -->
		</view>
		<view class="l_right" v-else-if="item.status == -1">
			<text>被驳回</text>
			<!-- <image src="../../static/image/index/go.png"></image> -->
		</view>
	</view>
	
	<view class="tab_delete"  :class="show? 'show' : 'Noshow'">
		<view class="alls" >
			<label class="radio" @click="allElection()"><radio value="r1" :checked="checked" />全选</label>
		</view>
		
		<button @click="deletes()">删除</button>
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
				title:'我的证书',
				data_lsit:'',
				show:false,
				checked:false,
			}
		},
		methods:{
			allElection(){ //全选
				this.checked = !this.checked
				if(this.checked == true){
					let all = []
					for (let s of this.data_lsit) {
						s.choice = true
					}
				}else{
					for (let s of this.data_lsit) {
						s.choice = false
					}
				}
			},
			singleElection(index){//单选
				this.data_lsit[index].choice = !this.data_lsit[index].choice
				if(this.data_lsit[index].choice == true){ //全选
					let arr_choice = this.data_lsit.map(x => x.choice)
					if(arr_choice.indexOf(false) == -1) this.checked = true
				}
				if(this.data_lsit[index].choice == false){ //非全选
				
					for (let s of this.data_lsit) {
						if(s.choice == false) this.checked = false
					}
				}
			},
			deletes(){  //删除
				let all =[]
				for (let s of this.data_lsit) {
					if(s.choice == true)all.push(s.aid)
				}
				
				this.service.entire(this,'post',this.APIconfig.api_root.subclass.c_certificateDel,{
					user_id:this.$store.state.user.id,
					id_dels:all.join(','),
				},function(self,res){
					console.log(res)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						let data = self.data_lsit
						for(let i = data.length - 1;i >= 0;i--){  //倒序删除
							if(data[i].choice == true){
								data.splice(i,1);
							}
						}
					}
				})
			},
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subclass.c_certificateList,{
				user_id:this.$store.state.user.id
			},function(self,res){
				res.data.list.forEach(x => x.choice = false)
				self.data_lsit = res.data.list
			})
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F7;
	}
	
	.content{
		padding-bottom: 120rpx;
	}
	.top{
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		z-index: 99;
		height: 105rpx;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		image{
			height: 30rpx;
			width: 30rpx;
		}
		text:nth-of-type(2){
			/* width: 40rpx; */
			font-size: 28rpx;
			color: #666;
			font-weight: 400;
			display: inline-block;
		}
	}

	.line{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 110rpx;
		padding: 0 20rpx;
		background-color: #FFFFFF;
		margin-bottom: 30rpx;
		// color: #000000;
		.l_left{
			font-size: 28rpx;
			display: flex;
			align-items: center;
			height: 110rpx;	
		}
		.l_right{
			font-size: 24rpx;
			color: #666666;
			display: flex;
			align-items: center;
			image{
				width: 11rpx;
				height: 20rpx;
				margin-left: 23rpx;
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
	.show{
		transform: translateY(0);
	}
	.Noshow{
		transform: translateY(100%);
	}
</style>
