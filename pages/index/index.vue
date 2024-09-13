<template>
	<view>
		<view class="login-form">
			<image class="logo" src="../../static/logo.png" mode=""></image>
			<view class="login-input">
				<view class="login">
					<uni-icons type="person" style="margin-right: 12rpx;"></uni-icons>
					<input type="text" v-model="username" placeholder="请输入用户名" />
				</view>

				<view class="login">
					<image src="../../static/password.png" class="icon"></image>
					<input :password="showPassword" v-model="password" placeholder="请输入密码" />
					<uni-icons :type="iconType" @click="changeShow"></uni-icons>
				</view>

			</view>

			<view class="loginButton" @click="enter">
				<uni-icons class="buttonIcon" type="right" color="white"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				showPassword: true,
				iconType: "eye-slash",
				password: "",
			}
		},
		methods: {
			changeShow() {
				this.showPassword = !this.showPassword;
				this.iconType = this.iconType == "eye" ? "eye-slash" : "eye";
			},
			enter() {
				if (this.username != "" && this.password != "") {
					sessionStorage.setItem('userInfo',this.username);
					uni.switchTab({
						url: '/pages/main/main',
					})
				} else {
					alert("用户名或密码错误！")
				}
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #66c18c;
	}

	.logo {
		width: 600rpx;
		height:300rpx;
		position:relative;
		right: 90rpx;
	}

	.icon {
		width: 48rpx;
		height: 48rpx;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		width: 420rpx;
		margin: 0 auto;
		padding-top: 120rpx;
	}

	.login {
		display: flex;
		margin: 24rpx 0;
		background-color: #ffffff;
		border-radius: 46rpx;
		height: 84rpx;
		align-items: center;
		padding: 0 24rpx;
	}

	.loginButton {
		width: 86rpx;
		height: 86rpx;
		background-color: #000000;
		opacity: 0.3;
		border-radius: 86rpx;
		display: flex;
		justify-content: center;
		margin: 48rpx auto;
	}

	.buttonIcon {
		z-index: 999;
		line-height: 86rpx;
	}
</style>