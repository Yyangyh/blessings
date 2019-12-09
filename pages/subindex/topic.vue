<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<image src="../../static/image/evaluating/topicback.png" mode="widthFix"></image>
		<view class="worp"><!-- v-for="(item,index) in questionList" v-if='index == nums' -->
		
			<view class="topic" >{{item.name}}</view>
			<block v-for="(li,idx) in item.answer">
				<view :class="numer === li.id?'option option1':'option'" @click="num(li.id)">{{li.name}}<!-- A.中国象棋 --></view>
			</block>
			<view class="btn" @click="net(index)" v-if="index <= questionList.length - 2">下一题</view>
			<view class="btn" @click="net(index)" v-else >提交</view>
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
				numer :'',
				id:0,
				questionList:[],
				data:[],
				item:[],
				index:0,
			}
		},
		methods:{
			num(id){
				this.numer = id;
			},
			
			net(index){
				var num = this.questionList.length - 1;
				if(this.numer ==''){
					uni.showToast({
						icon:'none',
						title:'请选择您的答案'
					})
					return
				}
				if(index < num){
					
					this.data.push(this.numer)// += this.numer + ',';
					this.numer =''
					var id = index + 1;
					this.index = id;
					console.log(id)
					this.item = this.questionList[id];
				}else{
					this.data.push(this.numer);
					let data = JSON.stringify(this.data)
					uni.redirectTo({
						url:'./result?id='+this.id+'&data='+data
					})
					
					
				}
				/* var data = {
					'user_id': this.$store.state.user.id,
					'paper_id':this.questionList[index].id,
					''
				}; */
			}
		},
		onLoad(e){
			this.id = e.id;
			// console.log(e)
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_test,{
				id:e.id
			},function(self,res){
				// console.log(res)
				console.log(res.data.question)
				self.questionList = res.data.question
				self.item = res.data.question[0];
			})
		}
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		image{
			width: 100%;
			height: 1229rpx;
			position: absolute;
			z-index: 0;
			left: 0;
			top:calc(var(--status-bar-height) + 105rpx);		
		}
		.worp{
			width: 100%;
			height: 1229rpx;
			position: absolute;
			top:calc(var(--status-bar-height) + 105rpx);
			left: 0;
			.topic{
				font-size: 32rpx;
				font-weight: 500%;
				padding: 191rpx 309rpx 67rpx 107rpx;
				
			}
			.option{
				width: 337rpx;
				height: 80rpx;
				line-height: 80rpx;
				border:1px solid rgba(170,170,170,1);
				font-size: 28rpx;
				color:#999999;
				border-radius:40rpx;
				padding-left: 51rpx;
				margin: 0 0 30rpx 110rpx;
			}
			.option1{
				width: 337rpx;
				height: 80rpx;
				line-height: 80rpx;
				background: #1B1B1B;
				font-size: 28rpx;
				color:#999999;
				border-radius:40rpx;
				padding-left: 51rpx;
				margin: 0 0 30rpx 110rpx;
			}
			.btn{
				position: absolute;
				width: 187rpx;
				height: 70rpx;
				border: 1rpx solid #D80000;
				font-size: 28rpx;
				color: #D80000;
				line-height: 70rpx;
				text-align: center;
				border-radius:40rpx;
				position: absolute;
				bottom: 295rpx;
				left: 400rpx;
			}
		}
	}
	
</style>
