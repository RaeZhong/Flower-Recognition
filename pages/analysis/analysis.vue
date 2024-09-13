<template>
	<view class="main">
		<view class="title">
			<text class="zh">识图博物馆</text>
			<text class="eg">Museum of knowledge</text>
		</view>

		<view class="panel">
			<text class="note">已鉴定{{number}}张图片</text>
			<view class="tap">
				<text v-for="(item,index) in tabTitle" :class="activeNum===index ? 'active' :''" :key="index"
					@click="active(index)" :id="item.cla">
					{{item.title}}
				</text>
			</view>
			<keep-alive>
				<component class="tab-content" :is="tabContent" :imgUrl="imgUrl" :records="records"></component>
			</keep-alive>
		</view>
	</view>
</template>

<script>
	import Record from "../../component/Record/Record.vue"
	import Collect from "../../component/Collect/Collect.vue"

	export default {
		components: {
			Record,
			Collect
		},
		onLoad() {
			uni.$on("send", (obj) => {
				if (obj.date === this.records[0].date) {
					this.records[0].imgs.unshift(obj.imgs[0])
					this.number++;
				} else {
					this.records.unshift(obj);
					this.number++;
				}
			});
			uni.$on("collect", val => {
				this.imgUrl.unshift(val);
			})
		},
		data() {
			return {
				number: 6,
				tabTitle: [{
						cla: "one",
						title: "识图记录"
					},
					{
						cla: "two",
						title: "我的收藏"
					},
				],
				activeNum: 0,
				tabContent: "Record",
				records: [{
						date: "2024-06-24",
						imgs: [
							"../../static/111.jpg",
							"../../static/222.jpg",
						]
					},
					{
						date: "2024-06-23",
						imgs: [
							"../../static/333.jpg",
							"../../static/1111.jpg",
							"../../static/2222.jpg",
							"../../static/3333.jpg",
						]
					}
				],
				imgUrl: [
					"../../static/1111.jpg",
					"../../static/222.jpg",
					"../../static/2222.jpg",

				]
			}
		},
		methods: {
			active(index) {
				this.activeNum = index;
				if (index == 0) {
					this.tabContent = "Record";
				} else {
					this.tabContent = "Collect";
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #229453;
	}

	.main {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.title {
		display: flex;
		flex-direction: column;
		color: #ffffff;
		gap: 12rpx;
		margin: 0 48rpx;
	}

	.zh {
		font-size: 48rpx;
	}

	.panel {
		margin-top: 36rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #ffffff;
		border-radius: 48rpx 48rpx 0 0;
		flex: 1;
	}

	.panel .note {
		background-color: #BEDCA8;
		margin: 48rpx;
		padding: 12rpx 24rpx;
		border-radius: 48rpx;
		color: #229453;
	}

	.panel .tap {
		display: flex;
		gap: 240rpx;
		font-weight: 800;
	}

	#one:after {
		content: "";
		background-color: #a0a0a0;
		width: 3rpx;
		height: 48rpx;
		position: absolute;
		left: 50%;
		border-radius: 3px;
	}

	.active {
		padding-bottom: 12rpx;
		border-bottom: 7rpx solid #229453;
	}

	.tab-content {
		width: 100%;
	}
</style>