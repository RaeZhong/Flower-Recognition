<template>
	<view>
		<view class="userInfo">
			<view class="user">
				<image :src="avaterImg" mode=""></image>
				<text class="username">{{username}}</text>
			</view>
			<uni-icons color="white" size="24" type="gear-filled"></uni-icons>
		</view>

		<view class="function often">
			<text>常用功能</text>
			<view class="functions">
				<view class="function-item" v-for="(item,index) in functionOften" :key="index"
				@click="enterFunction(index)">
					<image :src="item.imgUrl" class="functionImg" :id="item.id" mode=""></image>
					<label :for="item.id">{{item.tag}}</label>
				</view>
			</view>
		</view>

		<view class="function other">
			<text>其它功能</text>
			<view class="functions">
				<view class="function-item" v-for="(item,index) in functionOther" :key="index">
					<uni-icons size="36" color="Lightgrey" :type="item.tag" :id="item.tag"
						class="functionIcon"></uni-icons>
					<label :for="item.tag">{{item.title}}</label>
				</view>
			</view>
		</view>

		<button class="out-login" type="default" @click="outLogin">退出登录</button>
	</view>
</template>

<script>
	export default {
		created() {
			this.username = sessionStorage.getItem('userInfo');
		},
		data() {
			return {
				username: "用户",
				avaterImg: "../../static/flower2.jpg",
				functionOften: [{
						id: "service",
						tag: "AI聊天室",
						imgUrl: "../../static/service.png",
					},
					{
						id: "collect",
						tag: "收藏",
						imgUrl: "../../static/collect.png",
					},
					{
						id: "feedbac",
						tag: "反馈",
						imgUrl: "../../static/feedback.png",
					},
				],
				functionOther: [{
						tag: "auth-filled",
						title: "用户协议"
					},
					{
						tag: "locked-filled",
						title: "隐式政策"
					},
					{
						tag: "staff-filled",
						title: "关于我们"
					},
					{
						tag: "paperplane-filled",
						title: "版本升级"
					},
				]
			}
		},
		methods: {
			outLogin() {
				sessionStorage.removeItem('userInfo');
				uni.redirectTo({
					url: '/pages/index/index'
				})
			},
			enterFunction(index) {
				if (index == 0) {
					location.href = "http://localhost:5173/#/pages/personal/service/service";
				}
			}
		},
	}
</script>

<style>
	page {
		padding: 0 32rpx;
		background: linear-gradient(#229453 0%, #229453 36%, #ffffff 36%, #ffffff 100%);
	}

	.userInfo {
		display: flex;
		justify-content: space-between;
		margin-top: 126rpx;
		align-items: center;
	}

	.user {
		display: flex;
		align-items: center;
		gap: 24rpx;
	}

	.userInfo .user image {
		width: 128rpx;
		height: 128rpx;
		border-radius: 128rpx;
	}

	.userInfo .user .username {
		color: #ffffff;
	}


	.function {
		display: flex;
		flex-direction: column;
		gap: 48rpx;
		padding: 36rpx 48rpx;
		border-radius: 48rpx;
		margin-top: 48rpx;
		box-shadow: 0px 0px 30rpx rgba(0, 0, 0, 0.1);
		background-color: #ffffff;
	}

	.often text {
		padding-bottom: 12rpx;
		border-bottom: 1rpx solid #eeeeee;
	}

	.function text {
		font-weight: 800;
	}

	.function .functions {
		display: flex;
		justify-content: space-between;
		padding: 0 24rpx;
	}

	.function .function-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12rpx;
	}

	.function .function-item image {
		width: 68rpx;
		height: 68rpx;
	}

	.function .function-item label {
		font-size: 24rpx;
		font-weight: 600;
	}

	.out-login {
		color: #ffffff;
		background-color: #229453;
		margin-top: 48rpx;
	}
</style>