<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<!-- <from> -->
			<view class="write">
				<view class="msg">
					<text>联系人</text><text class="t2">*</text>
					<input v-model="name" type="text" placeholder="您的名字">
				</view>
				<hr />
				<view class="msg">
					<text>手机号</text><text class="t2">*</text>
					<input v-model="phone" type="text" placeholder="您的手机号码" >
				</view>
				<hr />
				<view class="msg">
					<text>申请等级：</text>
					<view class="msg_picker">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
				</view>
				<hr />
				<view class="t3">请仔细填写联系方式，保证我们能尽快联系到您~</view>
			</view>
			<view class="uploading">
				<view class="lines" @tap="upimg('business')">
					<view class="l_felt">请上传营业执照</view>
					<view class="l_right">
						<image :src="business" mode="widthFix"></image>
						<image src='../../../static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="uploading">
				<view class="lines" @tap="upimg('just')">
					<view class="l_felt">法人身份证正面</view>
					<view class="l_right" >
						<image :src="just" mode="widthFix"></image>
						<image src='../../../static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="lines" @tap="upimg('back')">
					<view class="l_felt">法人身份证反面</view>
					<view class="l_right" >
						<image :src="back" mode="widthFix"></image>
						<image src='../../../static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
			</view>
		<!-- </from> -->
		<button type="default" @tap="apply">立即申请</button>
		<!-- 跳转框 -->
		<view class="mask_black" v-if="reveal">
			
		</view>
		<view class="dianzi" v-if="reveal">正在跳转电子签约…</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				cur:0,
				title:'立即申请',
				name:'',
				phone:'',
				array: ['请选择管理身份','联盟单位', '市学习中心', '省学习中心'],
				index: 0,
				reveal:false,
				business:'/static/image/subuser/photo.png',
				just:'/static/image/subuser/photo.png',
				back:'/static/image/subuser/photo.png'
			}
		},
		methods:{
			bindPickerChange: function(e) {
				
				this.index = e.target.value
			},
			upimg(name){
				let that = this
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        const tempFilePaths = res.tempFilePaths;
						console.log(tempFilePaths)
						that.service.upimg(that,'upfile',that.APIconfig.api_root.subuser.threeuser.s_ueditor_index,{
							action:'uploadimage',
							'path_type': 'papers',
							token:that.$store.state.token,
							user_id:that.$store.state.user.id,
						},tempFilePaths[0],function(self,res){
							console.log(res)
							self[name] = self.APIconfig.api_img + res.data.url
						})
				    }
				});
			},
			apply(){
				let tel = /^1(3|4|5|7|8)\d{9}$/.test(this.phone);
				if (this.phone == "" || this.name == "") {
					uni.showToast({
						icon:'none',
						title:'信息不能为空!'
					})
				  return
				 }else if(!tel){
					  uni.showToast({
						icon:'none',
						title:'请输入正确的11位手机号码!'
					  })
					  return
				}
				if(this.index == 0){
					uni.showToast({
						icon:'none',
						title:'请选择管理身份'
					})
					return
				}
				if(this.business == '/static/image/subuser/photo.png' ||this.just == '/static/image/subuser/photo.png' ||this.back == '/static/image/subuser/photo.png' ){
					uni.showToast({
						icon:'none',
						title:'请上传图片'
					})
					return
				}
				
				let data = {
					user_id:this.$store.state.user.id,
					name:this.name,
					phone:this.phone,
					bus_img:this.business.split(this.APIconfig.api_img)[1],
					id_right:this.just.split(this.APIconfig.api_img)[1],
					id_left:this.back.split(this.APIconfig.api_img)[1],
					level_id:this.index + 3
				}
				uni.navigateTo({
				    url: './agreement?data=' + JSON.stringify(data)
				});
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 92vh;
		background-color: #F6F6F7;
		button{
			width:710rpx;
			height:80rpx;
			line-height: 80rpx;
			font-size: 30rpx;
			background:rgba(216,0,0,1);
			border-radius:40rpx;
			color: #FFFFFF;
		}
		hr{
			height:1rpx;
			border: none;
			border-top:1rpx solid #F4F4F4;
			width: 97%;
			margin: 0 auto;
		}
		.write{
			background-color: #FFFFFF;
			width: 100%;
			margin-bottom: 30rpx;
			.msg{
				display: flex;
				align-items: center;
				padding: 20rpx 30rpx;
				text:first-child{
					font-size: 28rpx;
					margin-right: 30rpx;
				}
				.t2{
					font-size: 13rpx;
					color: #FF431D;
				}
				input{
					font-size: 28rpx;
				}
				.msg_picker{
					font-size: 28rpx;
					flex-grow: 2;
				}
			}
			.t3{
				font-size: 24rpx;
				padding: 20rpx 30rpx;
			}
		}
		.uploading{
			background-color: #FFFFFF;
			width: 100%;
			margin-bottom: 30rpx;
			.lines{
				display: flex;
				align-items: center;
				height: 80rpx;
				margin: 0 35rpx 0 22rpx;
				justify-content: space-between;
				// border-bottom: 1rpx solid #F1F1F1;
				.l_felt{
					font-size: 28rpx;
					// padding: 20rpx 0;
				}
				.l_right{
					display: flex;
					align-items: center;
					image:first-child{
						width: 49rpx;
						height:49rpx ;
						margin-right: 15rpx;
					}
					image:last-child{
						width: 16rpx;
						height: 31rpx;
					}
				}
			}
		}
		.dianzi{
			width:100%;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			top:500rpx;
			z-index: 900;
			text-align: center;
			font-size: 28rpx;
			color:#FFFFFF;
		}
	}
</style>
