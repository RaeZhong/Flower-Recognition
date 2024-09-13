<template>
	<view>
		<view class="records" v-for="(item,index) in records" :key="index">
			<text class="record-date">{{item.date}}</text>
			<view class="record-imgs" >
				<image class="record-img-item" v-for="(img,index) in item.imgs" :key="index" :src="img" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'Record',
		props:{
			records:Array,
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
.records{
	padding: 24rpx;
}

.record-imgs{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 12rpx;
	gap: 24rpx;
}

.record-img-item{
	border-radius: 32rpx;
	width: 200rpx;
	height: 200rpx;
	}
</style>
