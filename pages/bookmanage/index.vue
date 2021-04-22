<template>
	<view class="container">

		<view class="content">
			<view class="list">

				<view class="aline">
					<view class="left">姓名<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入联系人" v-model="name"
							:focus="showname" /></view>
				</view>
				<view class="aline">
					<view class="left">电话<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入联系电话" v-model="phone"
							:focus="showntel" /></view>
				</view>
				<!-- <view class="aline">
					<view class="left">区域地址<text class="requisite">*</text>：</view>
					<view class="right">
						<picker id="picker" mode="multiSelector" :range="range" :value="value"
							@columnchange="columnchange" @cancel="pickerCancel">
							<view :class="[address=='请选择区域地址'?'noarea':'area']" class="">{{address}}</view>
						</picker>
					</view>
				</view> -->
				<view class="bigalinetea">
					<view class="left" @click="backPageRefresh">联系人地址<text class="requisite">*</text>：</view>
					<view class="right">
						<textarea placeholder="请输入联系人地址" class="uni-textarea" v-model="descaddress"></textarea>
					</view>
				</view>
			</view>
		</view>

		<!-- <view :class="[tabCurrentIndex==1||waybtnIndex==2?'btnbutton':'btn']"> -->
		<view class='btnbutton'>
			<button type="primary" @click="nowgo">保存并使用</button>
		</view>
	</view>
</template>

<script>
	import $ from '../../common/tsRequest.js'
	import qs from 'qs';
	import {
		area
	} from '../../js_sdk/lisenh-cityPicker/area.js'
	export default {
		data() {
			return {
				name: '',
				phone: '',
				company_address: '',
				selected: '请选择',
				provselected: '请选择',
				cityselected: '请选择',
				range: [
					[''],
					[''],
					['']
				],
				provinceCodes: [],
				cityCodes: [],
				value: [0, 0, 0],
				address: '请选择区域地址',
				descaddress: '',
				showname: false,
				showntel: false,
				isok:true
			};
		},

		onLoad(options) {
			// 页面显示是默认选中第一个
			let _openid = uni.getStorageSync('invoiceopenId');
			this.openid = _openid
			for (let provinceCode in area.province_list) {
				this.range[0].push(area.province_list[provinceCode])
				this.provinceCodes.push(provinceCode)
			}
		},

		methods: {
			pickerCancel() {
				console.log('pickerCancel')
			},
			columnchange: function(e) {
				this.value[e.detail.column] = e.detail.value
				if (0 == e.detail.column) {
					let provinceCode = this.provinceCodes[e.detail.value - 1]
					this.range[1] = ['']
					this.range[2] = ['']
					let cities = ['']
					this.cityCodes = []
					for (let cityCode in area.city_list) {
						if (Number(cityCode) >= Number(provinceCode) && Number(cityCode) <= Number(provinceCode) +
							9900) {
							cities.push(area.city_list[cityCode])
							this.cityCodes.push(cityCode)
						}
					}
					this.range[1] = cities
					this.value.splice(1, 1, 0)
					this.value.splice(2, 1, 0)
				} else if (1 == e.detail.column) {
					this.value[2] = 0
					let cityCode = this.cityCodes[e.detail.value - 1]
					this.range[2] = ['']
					let counties = ['']
					for (let countyCode in area.county_list) {
						if (Number(countyCode) >= Number(cityCode) && Number(countyCode) <= Number(cityCode) + 99) {
							counties.push(area.county_list[countyCode])
						}
					}
					this.range[2] = counties
					this.value.splice(2, 1, 0)
				}
				this.$forceUpdate()
				if (this.range[2][this.value[2]]) {
					this.selected = this.range[2][this.value[2]]
				} else if (this.range[1][this.value[1]]) {
					this.selected = this.range[1][this.value[1]]
				} else if (this.range[0][this.value[0]]) {
					this.selected = this.range[0][this.value[0]]
				}
				this.address = this.range[0][this.value[0]] + " " + this.range[1][this.value[1]] + " " + this.range[2][
					this.value[2]
				]
			},
			
			nowgo() {
				if (this.isok) {
					if (this.name == '') {
						uni.showToast({
							image: '../../static/image/error.png',
							title: "请输入联系人姓名"
						});
						this.showname = false;
						this.$nextTick(() => {
							this.showname = true;
						});
						return false;
					} else if (this.phone == '') {
						uni.showToast({
							image: '../../static/image/error.png',
							title: "请输入联系人电话"
						});
						this.showntel = false;
						this.$nextTick(() => {
							this.showntel = true;
						});
						return false;
					} else if (this.descaddress == '') {
						uni.showToast({
							image: '../../static/image/error.png',
							title: "请完善联系人地址"
						});
						return false;
					}
					let obj = {}
					obj.openid = this.openid
					obj.name = this.name
					obj.address = this.descaddress
					obj.phone = this.phone
					this.isok=false
					setInterval(() => {
						this.isok=true
					}, 3000)
					$.post('/erp/addressBook/add', obj).then(res => {
						if (res.code == 0) {
							uni.showToast({
								title: "新增成功!"
							})
							setTimeout(() => {
								var pages = getCurrentPages();
								var currPage = pages[pages.length - 1]; 
								var prevPage = pages[pages.length - 2]; 
								prevPage._data.consignee = this.name
								prevPage._data.consignee_address = this.descaddress
								prevPage._data.consignee_phone = this.phone
								uni.navigateBack({
									delta: 1,
								})
							}, 1000)
						} else {
							uni.showToast({
								image: '../../static/image/error.png',
								title: res.message
							});
							return false;
						}
					}).catch(err => {

					})

				}
			}
		}
	};
</script>

<style lang="scss">
	@import "/static/css/upload-imgs.css";

	page {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		background-color: #FFFFFF;
	}

	.body-view {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
	}


	.container {
		background: #FFFFFF;
		line-height: 24px;
		width: 100%;

		.content {
			background: #fff;
			height: 100%;
		}

		.list {
			padding: 0 30upx;
			box-sizing: border-box;

			.aline {
				height: 100upx;
				display: flex;
				align-items: center;
				border-bottom: 2upx solid #F5F5F5;

				.left {
					width: 240upx;
					text-align: left;
					color: #333;
					font-size: 28upx;

					.requisite {
						display: inline-block;
						height: 100upx;
						line-height: 100upx;
						color: #FF0000;
					}
				}

				.right {
					.noarea {
						color: grey;
						font-size: 13px;
					}

					.area {
						color: #000;
						font-size: 13px;
					}

					input {
						width: 400upx;
						height: 80upx;
						font-size: 28upx;
					}

					.return {
						display: inline-block;
						width: 14upx;
						height: 25upx;
						transform: rotate(180deg);
						-ms-transform: rotate(180deg);
						/* IE 9 */
						-moz-transform: rotate(180deg);
						/* Firefox */
						-webkit-transform: rotate(180deg);
						/* Safari 和 Chrome */
						-o-transform: rotate(180deg);
						/* Opera */
					}
				}
			}

			.bigalinetea {
				display: flex;
				align-items: center;
				border-bottom: 2upx solid #F5F5F5;

				.left {
					width: 240upx;
					text-align: left;
					color: #333;
					height: 160upx;
					line-height: 80upx;
					font-size: 28upx;

					.requisite {
						display: inline-block;
						height: 100upx;
						line-height: 100upx;
						color: #FF0000;
					}
				}

				.right {
					height: 180upx;

					textarea {
						padding: 40upx 0 0;
						display: inline-block;
						width: 400upx;
						height: 160upx;
						font-size: 28upx;
					}
				}
			}

		}

		body {
			margin: 0;
			padding: 0;
			max-width: 414px;
			margin: 0 auto;
		}

		.submit {
			padding: 15px 0;
			background-color: #287cff;
			color: #fff;
			text-align: center;
			margin: 10px;
			font-size: 20px;
			border-radius: 10px;
		}

		.btnbutton {
			cursor: pointer;
			width: 600upx;
			height: 90upx;
			border: 1px solid #007AFF;
			margin: 0 auto;
			bottom: 60upx;
			left: 75upx;
			border: none;
			outline: none;
			padding: 60upx 0 30upx;
			position: fixed;
			bottom: 30upx;

			button {
				background: #1B4CEF;
				border-radius: 60upx;
				border: none;
				font-size: 30upx;
				height: 90upx;
				line-height: 90upx;
				outline: none;
			}
		}

	}
</style>
