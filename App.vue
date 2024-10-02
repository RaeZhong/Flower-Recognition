<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// #ifdef APP-PLUS
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