<template>
	<view>
		<swiper current="0" previous-margin="80rpx" next-margin="100rpx"  @change="swiperChange" :indicator-dots="true"
			:autoplay="true" :interval="3000" :duration="1000" circular="true" class="swipers">
			<swiper-item class='swiper-item' v-for="(item,index) in imgUrl">
				<image :src="item" mode="aspectFill" :class="['swiper-img',currentIndex === index?'':'active']">
				</image>
			</swiper-item>
		</swiper>

		<view class="info">
			<span class="info-title">花卉资讯</span>
			<Card v-for="(item,index) in cardGroup" :key="index" :title="item.title" :content="item.content"
				:img="item.img" class="card-item">
			</Card>
		</view>
	</view>
</template>

<script>
	import Card from "../../component/Card/Card.vue"

	export default {
		components: {
			Card,
		},
		data() {
			return {
				currentIndex: 0,
				imgUrl: [
					"../../static/flower1.jpg",
					"../../static/flower2.jpg",
					"../../static/flower3.jpg",
					"../../static/flower4.jpg",
					"../../static/flower5.jpg",
				],
				cardGroup: [{
						title: "5种爱沐浴阳光的花卉：阳光越烈，花开得越灿烂，轻松养护！",
						content: "这五种花卉对阳光有着浓厚的热爱。太阳愈猛烈，它们的花便开得愈热烈，养护起来也格外简单！花草植物的生长大多依赖于当地的温度条件。在较高温环境下，植物生长速度加快，开花量亦随之增加。高温可激活植物生长活性根系，使其源源不断地吸收养分，进而促进枝叶生长与开花。每年6月至10月，是最适合养花的四个月。",
						img: "../../static/flower1.jpg"
					},
					{
						title: "发展花卉产业 激发创新活力（国际视点）",
						content: "美丽的花卉不仅装点着自然画卷，也是驱动经济发展的鲜活力量。保加利亚、荷兰、墨西哥等国不断激发花卉产业创新活力，通过发展花卉产业赋能经济。",
						img: "../../static/flower2.jpg"
					},
					{
						title: "适合家庭扦插的常见花卉种类",
						content: "适合扦插的花卉有很多，以下是一些常见的例子：1. 紫薇花：紫薇花是一种常见的攀援花卉，适合在4-6月份进行扦插，选择新梢进行扦插，约3个月后即可生根。",
						img: "../../static/flower3.jpg"
					},
					{
						title: '培育“云花”自主品种 昆明斗南花卉产业进入“4.0基因育种时代”',
						content: "央广网昆明6月20日消息（记者 魏文青）近日，昆明市呈贡区与云南省农科院达成战略合作，在斗南共同打造“云南省种子种业实验室——花卉种业实验室”，让昆明斗南花卉产业进入“4.0基因育种时代”，不断扩大“云花”自主品种占有率和品牌影响力。",
						img: "../../static/flower4.jpg"
					},
					{
						title: "2024年青秀山水生花卉观赏季来了！6月22日至8月18日",
						content: "盛夏之际，正是荷花、睡莲等各类水生花卉盛开的时节。6月20日，记者从南宁青秀山风景名胜旅游区（以下简称青秀山风景区）了解到，青秀山风景区将于6月22日举办2024年青秀山水生花卉观赏季，500多个品种的水生花卉齐齐亮相。",
						img: "../../static/flower5.jpg"
					},
				],
			}
		},
		methods: {
			swiperChange(event) {
				this.currentIndex = event.detail.current
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #eeeeee;
	}

	.swipers {
		margin: 48rpx 0;
	}
	
	.swiper-item{
		text-align: center;
	}
	

	.swiper-img {
		width: 560rpx;
		height: 300rpx;
		border-radius: 9rpx;
		box-shadow: 0px 0px 30rpx rgba(0, 0, 0, 0.2);
		z-index: 1;
		
	}

	.active {
		transform: scale(0.8);
		z-index: 20;
	}

	.info-title {
		position: relative;
		padding-left: 16rpx;
 		margin-left: 36rpx;
		font-weight: 800;
		font-size: 40rpx;
	}
	
	.info{
		background-color: #eeeeee;
	}

	.info-title:before {
		content: "";
		background-color: #66c18c;
		width: 8rpx;
		height: 48rpx;
		position: absolute;
		left: 0;
		top: 50%;
		margin-top: -24rpx;
		border-radius: 3px;
	}
	
	.card-item{
		margin:12rpx 36rpx;
	}
</style>