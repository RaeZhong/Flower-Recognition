<template>
	<view>
		<view class="register-form">
			<image class="logo" src="../../../static/logo.png" mode=""></image>
			<view class="register-input">
				<view class="register mail">
					<uni-icons type="email" style="margin-right: 12rpx;"></uni-icons>
					<input type="text" v-model="mail" placeholder="请输入邮箱号" />
				</view>

				<view class="register mailCode">
					<uni-icons type="checkbox" style="margin-right: 12rpx;"></uni-icons>
					<view class="mailCode-input">
						<input type="text" v-model="mailCode" placeholder="请输入验证码" />
					</view>
					<view class="mailCode-btn">
						<text>获取验证码</text>
					</view>
				</view>

				<view class="register password">
					<image src="../../../static/password.png" class="icon"></image>
					<input :password="showPassword" v-model="password" placeholder="请输入密码" />
					<uni-icons class="eye" :type="iconType" @click="changeShow"></uni-icons>
				</view>

				<view class="register rePassword">
					<image src="../../../static/password.png" class="icon"></image>
					<input :password="showPassword" v-model="rePassword" placeholder="请再次输入密码" />
					<uni-icons class="eye" :type="iconType" @click="changeShow"></uni-icons>
				</view>
			</view>

			<view class="register-to-login">
				<text>没有账号？</text>
				<text @click="toLogin">去注册</text>
			</view>

			<view class="registerButton" @click="enter">
				<button type="primary" style="background-color:mediumseagreen">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mail: "",
				mailCode: "",
				password: "",
				rePassword: "",
				iconType: "eye-slash",
			}
		},
		methods: {
			changeShow() {
				this.showPassword = !this.showPassword;
				this.iconType = this.iconType == "eye" ? "eye-slash" : "eye";
			},
			toLogin(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
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
		height: 300rpx;
		position: relative;
		right: 50rpx;
	}

	.icon {
		width: 48rpx;
		height: 48rpx;
	}

	.register-form {
		display: flex;
		flex-direction: column;
		width: 540rpx;
		margin: 0 auto;
		padding-top: 120rpx;
	}

	.register {
		display: flex;
		margin: 24rpx 0;
		background-color: #ffffff;
		border-radius: 46rpx;
		height: 84rpx;
		align-items: center;
		padding: 0 24rpx;
	}

	.register .mailCode-input {
		width: 300rpx;
		padding-right: 12rpx;
	}

	.mailCode .mailCode-btn {
		color: grey;
		width: 200rpx;
		border-left: 2rpx solid gainsboro;
		padding-left: 12rpx;

	}
	
	.register .eye{
		position: relative;
		left: 48rpx;
	}

	.register-to-login {
		text-align: center;
	}

	.register-to-login text:first-child {
		color: dimgray;
	}

	.register-to-login text:last-child {
		color: #ffffff;
	}

	.registerButton {
		margin: 24rpx;
	}
</style>