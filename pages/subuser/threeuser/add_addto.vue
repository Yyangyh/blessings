<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="list">
			<text>收货人</text>
			<input type="text" value="" v-model="name" />
		</view>
		<view class="list">
			<text>联系电话</text>
			<input type="text" value=""  v-model="tel" />
		</view>
		
		<view class="list_city" @click="show = 1">
			<text style="">所在地区</text>
			<!-- <input type="text" value=""   disabled/> -->
			<view class="" v-for="(item,index) in county" :key='index'>
				{{item}}
			</view>
		</view>
		<view class="list">
			<text>详细地址</text>
			<input type="text" value=""  v-model="address" />
		</view>
		
		<label class="checkbox" @tap="checked = !checked">
			<checkbox style="transform:scale(.8);" value="" :checked="checked"/>设为默认
		</label>
		<button  @click="preservation()">保存收货地址</button>
			
			
			
			
			
		<view class="mask" v-show="show == 1" @click="show = 0">
			<!-- 遮罩 -->
		</view>
		
		<view class="choice_city" :class="show===0 ? 'mask_none' : show===1 ? 'mask_show' : ''">
			<image src="../../static/image/secondary/close2.png" mode="widthFix" @click="show = 0"></image>
			<view class="ci_test1">
				请选择
			</view>
			<view class="ci_test">
				<view v-for="(item,index) in aggregate" :key='index'>{{item}}</view>
			</view>
			<view class="ci_box">
				<scroll-view class="box_H" scroll-y scroll-top='0'>
					<view class="H_city_test">
						选择省份/地区
					</view>
					<view class="H_city" v-for="item in city" @click="choice_province(item.id,item.name)">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		data() {
			return {
				title:'收货地址管理',
				name:'',
				tel:'',
				city:'',
				county:[],
				address:'',
				checked:false,
				show:0,
				aggregate:[],
				city_id:[]
			}
		},
		components:{
			returns
		},
		methods:{
			
			choice_province(id,name){ //选择地区
				this.city = []
				this.aggregate.push(name)
				this.city_id.push(id)
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.threeuser.region_index,{pid:id},function(self,res){
					console.log(res)
					if(res.data == ''){
						self.show = 0
						self.county = self.aggregate
					}
					self.city = res.data
				})
			},
			preservation(){  //保存
				// console.log(this.city_id)
				let is_default
				console.log(this.checked)
				this.checked == false ? is_default = 0 :is_default = 1
				let data = {
					user_id: this.$store.state.user.id,
					name:this.name,
					tel:this.tel,
					province:this.city_id[0],
					city:this.city_id[1],
					county:this.city_id[2],
					address:this.address,
					is_default:is_default
				}
				if(this.id)data.id = this.id
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.threeuser.address_save,data,function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						setTimeout(function(){
							self.service.returns()
						},1000)
					}
				})
			},
			
		},
		onLoad(options) {
			
			if(options.id){
				this.id = options.id
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.threeuser.address_detail,{
					user_id: this.$store.state.user.id,
					id:options.id
				},function(self,res){
					console.log(res)
					self.name = res.data.name
					self.tel = res.data.tel
					self.address = res.data.address
					res.data.is_default == 0 ? self.checked = false : self.checked = true,
					self.county.push(res.data.province_name)
					self.county.push(res.data.city_name)
					self.county.push(res.data.county_name)
					self.city_id = [res.data.province,res.data.city,res.data.address]
				})
			}
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.threeuser.region_index,{},function(self,res){
				console.log(res)
				self.city = res.data
			})
		},
		watch:{
			show(record,oldrecord){
				this.aggregate = []
				if(record == 1){
					this.service.entire(this,'get',this.APIconfig.api_root.subuser.threeuser.region_index,{},function(self,res){
						console.log(res)
						self.city_id = []
						console.log()
						self.city = res.data
					})
				}
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 99.9%;
		background: #FFFFFF;
		border-top: 1rpx solid #FFFFFF;
	}
	.list_city{
		width: 90%;
		/* height: 90rpx; */
		font-size: 28rpx;
		color: #999999;
		margin: 30rpx auto;
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid #EEEEEE;
	}
	.list{
		width: 90%;
		height: 90rpx;
		font-size: 28rpx;
		color: #999999;
		margin: 30rpx auto;
		border-bottom: 1rpx solid #EEEEEE;
		display: flex;
		/* justify-content: center; */
		align-items: center;
	}
	.list text{
		margin-right: 16rpx;
	}
	.list input{
		flex-grow: 2;
	}
	.checkbox{
		width: 90%;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		color: #999999;
		margin: 30rpx 5%;
	}
	button{
		width: 90%;
		height: 90rpx;
		line-height: 90rpx;
		background: #BE1226;
		color: #FFFFFF;
		margin-top: 30rpx;
		font-size: 30rpx;
		border-radius: 45rpx;
	}
	.mask{
		position: fixed;
		height: 100%;
		width: 100%;
		background:rgba(0,0,0,1);
		opacity:0.3;
		left: 0;
		top: 0;
		z-index: 998;
	}
	.choice_city{
		background: #fff;
		position: fixed;
		height: 884rpx;
		width: 100%;
		left: 0;
		bottom: 0;
		z-index: 999;
		transition: .3s;
		transform: translateY(100%);
	 }
	 .mask_none{
		transform: translateY(100%);
	 }
	 .mask_show{
		transform: translateY(0);
	 }
	.choice_city image{
		position: absolute !important;
		width: 40rpx;
		height: 40rpx;
		right: 20rpx;
		top: 20rpx;
	}
	.choice_city .ci_test1{
		text-align: center;
		padding: 10rpx;
		color: #999;
		font-size: 30rpx;
	}
	.choice_city .ci_test{
		height: 144rpx;
		font-size: 30rpx;
		padding: 20rpx;
	}
	.choice_city .ci_test text{
		
	}
	.choice_city .ci_box{
		height: 700rpx;
	}
	.choice_city .ci_box .box_H{
		height: 700rpx;
		font-size: 30rpx;
	}
	.choice_city .ci_box .box_H view{
		padding: 10rpx;
	}
	.choice_city .ci_box .box_H .H_city_test{
		color: #999;
	}
</style>
