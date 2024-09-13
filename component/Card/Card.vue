<template>
	<view>
		<view class="card">
			<text class="card-title">{{title}}</text>
			<view class="card-content">
				<text class="card-text">
					{{content}}
				</text>
				<view class=""></view>
				<image class="card-right" :src="img" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Card',
		props: {
			title: String,
			content: String,
			img: String
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.card {
		/* background-color: aqua; */
		background-color: #fbfbfb;
		display: flex;
		flex-direction: column;
		padding:24rpx;
		height: 210rpx;
		border-bottom: 1rpx #cccccc solid;
	}

	.card-title {
		font-weight: 600;
		font-size: 32rpx;
		color: #333333;

		display: -webkit-box;
		/*弹性伸缩盒子模型显示*/
		-webkit-box-orient: vertical;
		/*排列方式*/
		-webkit-line-clamp: 1;
		/*显示文本行数*/
		overflow: hidden;
	}

	.card-content {
		display: flex;
		flex-direction: row;
		height: 140rpx;
		gap: 24rpx;
		font-size: 26rpx;
		padding-top: 28rpx;
		color: #7A7A7A;
	}

	.card-text {
		width: 1600rpx;
		height: 100rpx;
		display: -webkit-box;
		/*弹性伸缩盒子模型显示*/
		-webkit-box-orient: vertical;
		/*排列方式*/
		-webkit-line-clamp: 3;
		/*显示文本行数*/
		overflow: hidden;
		/*溢出隐藏*/
	}

	.card-right {
		height:120rpx;
		border-radius: 8rpx;
	}
</style>