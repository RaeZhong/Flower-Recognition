<template>
	<view>
		<view class="img-border">
			<view class="img-upload" @click="uploadImg">
				<uni-icons type="cloud-upload-filled" color="Darkgray" size="48"></uni-icons>
				<text class="img-upload-text">点击上传</text>
			</view>

			<image :src="userflower" class="img-preview" mode="aspectFill"></image>
		</view>

		<view class="button-upload"></view>
	</view>

	<view class="button-identify" @click="identifyImg">
		<text>识别</text>
	</view>

	<view>
		<uni-popup ref="bottompup" type="bottom" background-color="white" border-radius="10px 10px 0 0">
			<view class="content">
				<text class="preview-res">识别结果</text>
				<image :src="previewflower" mode="aspectFill"></image>
				<uni-icons color="Darkgray" type="heart" size="36" v-if="isCollect == 0"
					@click="showCollect"></uni-icons>
				<uni-icons color="#ff6781" type="heart-filled" size="36" v-else @click="showCollect"></uni-icons>
			</view>
		</uni-popup>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				userflower: "",
				previewflower: "",
				isCollect: 0,
			}
		},
		methods: {
			uploadImg() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					success: (res) => {
						console.log(res);
						this.userflower = res.tempFilePaths[0];
					}
				})
			},
			identifyImg() {
				if (this.userflower != "") {
					uni.showLoading({
						title: '识别中'
					});
					uni.uploadFile({
						url: "http://localhost:5000/detect",
						filePath: this.userflower,
						name: 'flowerimg',
						success: (res) => {
							uni.hideLoading();
							this.previewflower = res.data;
							this.isCollect = 0;
							this.$refs.bottompup.open();
							this.getRecord();
						}
					})
				} else {
					alert("请上传照片");
				}
			},
			showCollect() {
				uni.$emit("collect", this.previewflower);
				this.isCollect = 1;
			},
			getRecord() {
				let obj = {
					date: this.getCurrentDate(),
					imgs: [this.previewflower]
				}
				uni.$emit("send", obj);
			},
			getCurrentDate() {
				let now = new Date();
				let year = now.getFullYear();
				let month = now.getMonth() + 1;
				let day = now.getDate();
				return year + "-" + month + "-" + day;
			},
			reback(){
				this.isCollect = 0;
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.img-border {
		border: 3rpx solid #7E8B92;
		margin: 84rpx 32rpx;
	}

	.img-upload {
		border-bottom: 4rpx dotted #229453;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.img-upload-text {
		font-weight: 800;
	}

	.img-preview {
		padding: 12rpx;
	}

	.button-identify {
		background-color: #BEDCA8;
		color: #ffffff;
		width: 148rpx;
		text-align: center;
		border-radius: 45rpx;
		padding: 12rpx 24rpx;
		font-weight: 800;
		box-shadow: 2rpx 6rpx 7rpx 2rpx rgba(0, 0, 0, 0.04),
			-12rpx 10rpx 20rpx 1rpx rgba(0, 0, 0, 0.1);
	}

	.content {
		height: 800rpx;
		display: flex;
		flex-direction: column;
		gap: 48rpx;
		align-items: center;
		padding-top: 48rpx;
		font-weight: 800;
		font-size: 36rpx;
	}

	.preview-res {
		font-weight: 800;
		font-size: 36rpx;
	}
</style>