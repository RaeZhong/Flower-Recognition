<template>
	<view class="collect">
		<image class="img" v-for="(item,index) in imgUrl" :src="item" :key="index" mode="aspectFill" />
	</view>
</template>

<script>
	export default {
		name:'Collect',
		props:{
			imgUrl:Array,
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.collect{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-left: 86rpx;
	padding-top: 24rpx;
	gap: 32rpx;
}	

.img{
	width: 320rpx;
	height: 320rpx;
	border-radius: 24rpx;
}
</style>
