<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// #ifdef APP-PLUS
			if (sessionStorage.getItem('userInfo') != null) {
				//存在则关闭启动页进入首页
				uni.switchTab({
					url: "/pages/main/main"
				})

			} else {
				//不存在则跳转至登录页
				uni.redirectTo({
					url: '/pages/index/index'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.uni-tabbar .uni-tabbar__icon {
		width: 60rpx !important;
		height: 42rpx !important;
	}
</style>