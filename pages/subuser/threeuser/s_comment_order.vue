<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view v-for="(item,index) in data" :key="index">
			<view class="goods">
				<view class="shop">
					<image src="/static/image/subuser/shop.png" mode=""></image>
					<view class="shop_name">
						店铺名
					</view>
					<image src="/static/image/subuser/arrowright.png" mode=""></image>
				</view>
				<view class="goods_detail">
					<image :src="item.images" mode=""></image>
					<view class="detail_right">
						<view class="words">
							{{item.title}}
						</view>
						<view class="amount">
							<view class="num">
								<!-- 两条装 -->
							</view>
							<view class="count">
								x{{item.buy_number}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom">
				<!-- <view class="comment">
				整单评价
			</view> -->
				<view class="star">
					<view class="left">评分</view>
					<!-- <image :src="item.src" mode="" v-for="(item,index) in imgList" :key="index" @click="choose(index)"></image>
				<view :class="[active>=0?'col':'']">
					{{amount}}
				</view> -->
					<star @star="ratingCount" :index='index'></star>
				</view>
				<!-- 晒图 -->
				<view class="pic">
					<view class="left">
						晒图
					</view>
					<view class="pics">

						<view class="pic_box" v-for="(items,indexs) in image_list[index]">
							<image :src="items" mode="aspectFill" :key='indexs'></image>
							<image class="close" @click="deletes(index,indexs)" src="/static/image/com_page/close.png" mode="widthFix"></image>
						</view>
						<image src="/static/image/subuser/addpic.png" mode="" @click="add_image(index)"></image>

					</view>
				</view>
				<!-- 评论 -->
				<view class="say">
					<view class="left">
						评论
					</view>
					<text-Area @saying="inputing" :index="index"></text-Area>
				</view>
			</view>
		</view>
		<view class="box"></view>
		<view class="submit" @click="submit">
			发布
		</view>
	</view>
</template>

<script>
	import star from '../../../components/star.vue'
	import textArea from '../../../components/textArea.vue'
	import returns from '../../common/returns.vue'
	export default {
		data() {
			return {
				title: '发布评价',
				goodsId: [], //商品id
				id: [], // 订单id
				rating: [], // 星级
				content: [], //textarea
				image_list: [], // 上传的图片
				images: [],
				type:'', // 判断是商品订单评论还是积分订单评论  1 商品  2积分
				data: [], // 商品列
			}
		},
		methods: {
			inputing(e) { // 
				const {
					index,
					content
				} = e
				this.content[index] = content
			},
			ratingCount(e) {
				const {
					rating,
					index
				} = e
				this.rating[index] = rating
			},
			submit() { // 提交评论
				if(this.rating.length==0){
					uni.showToast({
						icon:'none',
						title:'请选择评分'
					})
					return
				}
				if(this.content.length == 0){
					uni.showToast({
						icon:'none',
						title:'请输入详细评论'
					})
					return
				}
				var temp = this.content.every((val,ind)=>{
					return val !=''
				})
				// console.log(temp);
				if(!temp){
					uni.showToast({
						icon:'none',
						title:'请输入详细评论'
					})
					return
				}else{
					this.submits({url:this.APIconfig.api_root.subuser.threeuser.s_order_commentssave})
				}
				
			},
			submits(e){
				// 封装提交评论clog
				// console.log(e.url);
				let data = {
					goods_id: this.goodsId, //商品id
					id: this.id, // 订单id
					rating: this.rating, // 星级
					content: this.content, // textarea
					images: this.images, // 上传的图片
					user_id: this.$store.state.user.id,
				}
				this.service.entire(this, 'post',e.url,data, function(self, res) {
					
					uni.showToast({
						title: res.msg
					});
					if (res.code == 0) {
						
						setTimeout(() => {
							uni.navigateTo({
								url: './s_comment_success?id=' + self.id
							})
						}, 1000)
					}
					})
			},
			add_image(i) { // 上传图片
				let that = this
				let path_type = 'order_comments-'+that.$store.state.user.id+'-'+that.id
				uni.chooseImage({
					count: 1, //默认9
					sourceType: ['album'], //从相册选择
					success: function(res) {
						uni.uploadFile({
							url: that.APIconfig.api_root.subuser.threeuser.s_ueditor_index,
							filePath: res.tempFiles[0].path,
							name: 'upfile',
							formData: {
								action:'uploadimage',
								path_type:path_type,
								user_id: that.$store.state.user.id,
							},
							success: (ref) => {
								if (JSON.parse(ref.data).code == 0) {
									// console.log(JSON.parse(ref.data))
									// 新建一个数组保存选择的图片
									if (!that.image_list[i]) { // 如果没有图片 ， 建二维数组
										var arr = [];
										var file = []
										arr.push(res.tempFiles[0].path)
										file.push(JSON.parse(ref.data).data.url)
										that.image_list[i] = [...arr]
										that.images[i] = [...file]
									} else {
										that.image_list[i].push(res.tempFiles[0].path)
										that.images[i].push(JSON.parse(ref.data).data.url)
									}
									that.image_list = JSON.parse(JSON.stringify(that.image_list))
									// console.log(that.image_list);
									// that.image_list.push(res.tempFilePaths[0])
									// that.images.push(JSON.parse(ref.data).data.file)
								}
							}
						});
					}
				});
			},
			deletes(i, index) { //删除图片
				this.image_list[i].splice(index, 1)
				this.images[i].splice(index, 1)
			}
		},
		onLoad(options) {
			// type:1商品评论 type:2 积分评论  type3 景点评论  积分订单里面没有的goods_id
			this.type = options.type
				this.id = options.id // 订单id
				this.service.entire(this, 'post', this.APIconfig.api_root.subuser.threeuser.s_order_detail, {
					id: options.id,
					user_id: this.$store.state.user.id,
				}, function(self, res) {
					self.data = res.data.items;
					for (var i = 0; i < self.data.length; i++) {
						self.goodsId.push(self.data[i].goods_id); // 获取商品id 
					}

					// console.log(self.data,self.id,self.goodsId);
				})
				

		},
		components: {
			returns,
			star,
			textArea
		}
	}
</script>

<style>
	page {
		background: #F1F1F1;
	}

	.goods {
		width: 710rpx;
		/* height: 274rpx; */
		margin: 20rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 20rpx;
		border-radius: 10rpx;
	}

	.goods .shop {
		width: 100%;
		height: 34rpx;
		display: flex;
		align-items: center;
		margin-bottom: 32rpx;
	}

	.goods .shop image:first-child {
		width: 38rpx;
		height: 34rpx;
		margin-right: 14rpx;
	}

	.goods .shop image:last-child {
		width: 12rpx;
		height: 25rpx;
		margin-left: 15rpx;
	}

	.goods .shop .shop_name {
		font-size: 28rpx;
		color: #333333;
	}

	.goods .goods_detail {
		width: 670rpx;
		height: 166rpx;
		display: flex;
	}

	.goods .goods_detail image {
		width: 240rpx;
		height: 166rpx;
		margin-right: 20rpx;
	}

	.goods .detail_right {
		width: 410rpx;

	}

	.goods .detail_right .words {
		color: #333333;
		width: 410rpx;
		font-size: 28rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.goods .detail_right .amount {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		margin-top: 15rpx;
		color: #999999;
	}

	.bottom {
		font-size: 28rpx;
		margin: 0 20rpx;
		width: 710rpx;
		box-sizing: border-box;
		padding: 0 22rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
	}

	.bottom .comment {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}

	.star {
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		color: #666666;
		border-bottom: 2rpx solid #F1F1F1;
	}

	.left {
		width: 100rpx;
	}

	.star image {
		width: 33rpx;
		height: 33rpx;
		margin-top: 4rpx;
		margin-right: 14rpx;
	}

	.pic {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 38rpx 0;
		margin-bottom: 36rpx;
		color: #666666;
		border-bottom: 2rpx solid #F1F1F1;
	}

	.pic image {
		width: 104rpx;
		height: 104rpx;
	}

	.pic .pics {
		display: flex;
		flex-wrap: wrap;
		width: 596rpx;
	}

	.pic .pics .pic_box {
		margin-right: 10rpx;
		position: relative;
	}

	.say {
		display: flex;
		color: #666666;
	}

	.submit {
		width: 710rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 40rpx;
		position: fixed;
		bottom: 20rpx;
		left: 20rpx;

		background: #1D74FF;
	}

	.box {
		width: 100%;
		height: 140rpx;
	}

	.col {
		color: #1D9DFF;
	}

	.pic .pics .close {
		height: 40rpx;
		width: 40rpx;
		position: absolute;
		top: 5rpx;
		right: 5rpx;
	}
</style>
