<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<form>
			<view class="write">
				<view class="msg">
					<text>联系人</text><text class="t2">*</text>
					<input type="text" placeholder="您的名字" v-model="name">
				</view>
				<hr />
				<view class="msg">
					<text>手机号</text><text class="t2">*</text>
					<input type="text" placeholder="您的手机号码" v-model="phone">
				</view>
				<hr />
				<view class="t3">请仔细填写联系方式，保证我们能尽快联系到您~</view>
			</view>
			
			<view class="write">
				<view class="msg">
					<text>身份证号</text><text class="t2">*</text>
					<input type="text" placeholder="填写您的身份证号" v-model="idCard">
				</view>
			</view>
			<view class="write">
				<view class="msg1">
					<text>性别</text>
					<view class="msg1_picker">
						<picker @change="Change" :value="index"  :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
						<image src="../../static/image/index/go.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="write">
				<view class="msg">
					<text>文化程度</text><text class="t2">*</text>
					<input type="text" placeholder="请填写文字" v-model="text">
				</view>
				<hr />
				<view class="msg1">
					<text>申请类别</text>
					<view class="msg1_picker">
						<picker @change="Change_grade" :value="grade_index"  range-key="text" :range="grade_list"  v-if="grade_list.length">
							<view class="uni-input">{{grade_list[grade_index].text}}</view>
						</picker>
						<image src="../../static/image/index/go.png" mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="msg1">
					<text>证件类别</text>
					<view class="msg1_picker">
						<picker @change="Change_apply" :value="apply_index"  range-key="text" :range="apply_list"  v-if="apply_list.length">
							<view class="uni-input">{{apply_list[apply_index].text}}</view>
						</picker>
						<image src="../../static/image/index/go.png" mode="widthFix"></image>
					</view>
					
				</view>
				<hr />
				<view class="msg2">
					<text class="t1">收货地址</text><text class="t2">*</text>
					<textarea rows="2" cols="10" value="" placeholder="请填写详细地址" v-model="site"></textarea>
				</view>
			</view>
			<button  @click="register()">立即申请</button>
		</form>
		
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
				title:'申请',
				name:'',
				phone:'',
				idCard:'',
				text:'',
				site:'',
				index:0,
				array: ['男', '女'],
				grade_index:0,
				grade_list:[],
				apply_index:0,
				apply_list:[]
			}
		},
		methods:{
			Change(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			Change_grade(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.grade_index = e.target.value
			},
			Change_apply(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.apply_index = e.target.value
			},
			register(){
				 let tel2 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.phone);
				 let idcard =  /^\d{15}(\d{2}[A-Za-z0-9])?$/.test(this.idCard);
				 let nam = /^[\u4E00-\u9FA5]{2,4}$/.test(this.name);
				 if (this.phone == "" || this.name == ""||this.idCard ==""||this.text == ""||this.idCard ==""||this.site == "") {
				 	uni.showToast({
				 		icon:'none',
						title:'输入框不能为空!'
				 	})
				 }else if(!tel2){
					 uni.showToast({
					 	icon:'none',
					 	title:'请输入正确的11位手机号码!'
					 })
				 }else if(!idcard){
					 uni.showToast({
					 	icon:'none',
					 	title:'请输入正确的身份证号码!'
					 })
				 }else if(!nam){
					 uni.showToast({
					 	icon:'none',
					 	title:'请您输入正确的名字!'
					 })
				 }
			}
		},
		onLoad() {
			this.service.entire(this,'post',this.APIconfig.api_root.subclass.c_formData,{
				// user_id:this.$store.state.user.id,
				// username:this.name
				// mobile:this.phone
				// id_card:this.idCard
				// gender:
				// culture:this.text
				// apply:
				// classify:
				// address:this.site
			},function(self,res){
				console.log(res)
			})
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subclass.c_Index,{},function(self,res){
				console.log(res)
				self.grade_list = res.data.grade
				self.apply_list = res.data.apply
			})
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.content{
		width: 100%;
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
				
			}
			.msg2{
				display: flex;
				padding: 20rpx 30rpx;
				.t1{
					font-size: 28rpx;
					margin-right: 30rpx;
				}
				.t2{
					font-size: 13rpx;
					color: #FF431D;
				}
				textarea{
					width: 70%;
					height:130rpx;
					font-size: 28rpx;
				}
			}
			.msg1{
				display: flex;
				align-items: center;
				padding: 20rpx 30rpx;
				font-size: 28rpx;
				justify-content: space-between;
				image{
					width: 16rpx;
					height: 31rpx;
					margin-left: 20rpx;
				}
				.msg1_picker{
					display: flex;
					align-items: center;
				}
			}
			view{
				font-size: 24rpx;
			}
			input{
				font-size: 24rpx;
			}
		}
		button{
			width:710rpx;
			height:80rpx;
			background:rgba(216,0,0,1);
			border-radius:40rpx;
			color:#FFFFFF;
			text-align: 32rpx;
			line-height: 80rpx;
			font-size: 28rpx;
		}
		.t3{
			padding: 20rpx 30rpx;
		}
	}
</style>
