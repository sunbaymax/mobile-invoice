<template>
	<view class="container">

		<view class="content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === item.state }"
				 @click="tabClick(index)">
					{{ item.text }}
				</view>
			</view>
			<view class="way">
				<button v-for="(item, index) in waybtn" :key="index" class="waybtn" :class="{ active: waybtnIndex == item.type }"
				 @click="tabwaybtn(item.type)">
					{{ item.text }}
				</button>
			</view>
			<!-- 显示区域 -->
			<view class="list">
				<view class="aline" v-show="waybtnIndex === 2">
					<view class="left">邮箱<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入邮箱账号" v-model="consignee_email" disabled/></view>
				</view>
				<view class="aline" v-show="waybtnIndex === 1">
					<view class="left">收货人<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入收货人" v-model="consignee" disabled/></view>
				</view>
				<view class="aline" v-show="waybtnIndex === 1">
					<view class="left">收货人地址<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="收货人地址" v-model="consignee_address" disabled/></view>
				</view>
				<view class="aline">
					<view class="left">联系方式<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入联系方式" v-model="consignee_phone" disabled/></view>
				</view>
				<view class="aline">
					<view class="left">公司名称<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入公司名称" v-model="company_name" disabled/></view>
				</view>
				<view class="aline">
					<view class="left">纳税人识别号<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入纳税人识别号" v-model="tax_num" disabled/></view>
				</view>
				<view class="aline">
					<view class="left">发货编号<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入发货编号" v-model="delivery_number" disabled/></view>
				</view>
				<view class="aline" v-show="tabCurrentIndex === 1">
					<view class="left">经营地址<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入经营地址" v-model="company_address" disabled/></view>
				</view>
				<view class="aline" v-show="tabCurrentIndex === 1">
					<view class="left">公司电话<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入公司电话" v-model="company_phone" disabled/></view>
				</view>
				<view class="aline" v-show="tabCurrentIndex === 1">
					<view class="left">开户银行<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入开户银行" v-model="bank" disabled/></view>
				</view>
				<view class="aline" v-show="tabCurrentIndex === 1">
					<view class="left">开户银行账号<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入开户银行账号" v-model="bank_num" disabled/></view>
				</view>

				<view class="bigaline info-table-row">
					<view class="left">回执单<text class="requisite">*</text>：</view>
					<view class="right table-row-right">
						<view class="uploads">
							<view class='upload-image-view'>
								<block v-for="(image,index) in imageList" :key="index">
									<view class='image-view'>
										<image :src="image" :data-src="image" @tap="previewImage"></image>
									</view>
								</block>
							</view>
						</view>
					</view>
				</view>

				<view class="bigalinetea">
					<view class="left">备注</view>
					<view class="right">
						<textarea placeholder="填写备注信息" class="uni-textarea" v-model="desc" disabled></textarea>
					</view>
				</view>
				<view class="bigalinetea" v-show="state==6">
					<view class="left">退票原因</view>
					<view class="right">
						<textarea placeholder="填写退票原因" class="uni-textarea"  v-model="return_reason" disabled></textarea>
					</view>
				</view>
				<view class="bigalinetea" v-show="state==8">
					<view class="left">换票原因</view>
					<view class="right">
						<textarea placeholder="填写换票原因" class="uni-textarea"  v-model="change_reason" disabled></textarea>
					</view>
				</view>
				<view class="bigalinetea" v-show="state==3||state==10">
					<view class="left">未通过原因</view>
					<view class="right">
						<textarea placeholder="填写备注信息" class="uni-textarea" v-model="postil" disabled></textarea>
					</view>
				</view>
			</view>
		</view>

		<!-- <view :class="[tabCurrentIndex==1||waybtnIndex==2?'btnbutton':'btn']"> -->
		<view class='btnbutton' v-show="state==3||state==6||state==10">
			<button type="primary" @click="nowgo">重新开票</button>
		</view>
		
		<w-compress ref='wCompress' />
	</view>
</template>

<script>
	import $ from '../../common/tsRequest.js'
	// import utils from '../../commons/request.js';
	import WCompress from '@/components/w-compress/w-compress.vue'
	let isok = true
	var sourceType = [
		['camera'], //拍照
		['album'], //相册
		['camera', 'album'] //拍照或相册
	]
	var sizeType = [
		['compressed'], //压缩
		['original'], //原图
		['compressed', 'original'] //压缩或原图
	]
	export default {
		components: {
           WCompress
		},
		data() {
			return {
				multi: [],
				tabCurrentIndex: '',
				waybtnIndex: '',
				imageList: [], //保存图片路径集合
				imageLength: 10, //限制图片张数
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				company_name: '',
				company_address: '',
				company_phone: '',
				tax_num: '',
				waybtn:[],
				navList:[],
				delivery_number:'',
				consignee: '',
				consignee_address: '',
				consignee_phone: '',
				consignee_email: '',
				bank: '',
				bank_num: '',
				file: [],
				desc: '',
				openid: '',
				id: '',
				curimg:[],
				return_reason:'',
				change_reason:'',
				postil:''

			};
		},

		onLoad(options) {
			let _id=options.id
			console.log(_id)
			this.id=_id
			this.tabCurrentIndex=options.type==1?0:1;
			this.state=options.state
			if(this.tabCurrentIndex==0){
				this.navList= [
					{
						state: 0,
						text: '增值税普通发票',
						orderList: []
					}
				]
	
			}else{
				this.navList= [
					{
						state: 1,
						text: '增值税专用发票',
						orderList: []
					}
				]
			}
			
			// 页面显示是默认选中第一个
			let _openid = uni.getStorageSync('invoiceopenId');
			this.openid = _openid
			this.query(_id)
		},

		methods: {
			query(id){
					let data={
						id
					}
				    let t = this;
					let url = "/erp/invoice/detail";
					let params =data;
					$.post(url,params).then(res =>{
						console.log(res)
		                if(res.code==0){
							this.waybtnIndex=res.data.way=='1'?1:2;
							if(this.waybtnIndex==1){
								this.waybtn=[
									{
										text: '纸质发票',
										type: 1
									}
								]
							}else{
								this.waybtn= [
									
									{
										text: '电子发票',
										type: 2
									}
								]
							}
							this.bank=res.data.bank
							this.bank_num=res.data.bank_num
							console.log(res.data.change_reason)
							this.change_reason=res.data.change_reason==null?'':res.data.change_reason
							this.change_times=res.data.change_times
							this.company_address=res.data.company_address
							this.company_name=res.data.company_name
							this.company_phone=res.data.company_phone
							this.consignee=res.data.consignee
							this.consignee_address=res.data.consignee_address
							this.consignee_email=res.data.consignee_email
							this.consignee_phone=res.data.consignee_phone
							this.create_time=res.data.create_time
							this.delivery_number=res.data.delivery_number
							this.desc=res.data.desc
							this.file=res.data.file
							this.invoice_num=res.data.invoice_num
							this.is_del=res.data.is_del
							this.logistics_num=res.data.logistics_num
							this.peisong_time=res.data.peisong_time
							this.postil=res.data.postil
							this.return_reason=res.data.return_reason
							this.state=res.data.state
							this.tax_num=res.data.tax_num
							this.type=res.data.type
							this.way=res.data.way
							let arrimg = res.data.file.split(";")
							console.log(arrimg)
							var imgs=[]
							arrimg.forEach(function(item,index) {
								console.log(item)
								if(item != '') {
									let url = 'http://www.zjcoldcloud.com/managesystem/storage/app/public/uploads/invoice/' + item;
									console.log(url)
									imgs.push(url)
								}
							});
							console.log(imgs)
							this.imageList=imgs
						}
						
					}).catch(err =>{
						console.log(err)
					})
			},
			onMulti() {
				uni.chooseImage({
					count: 9,
					success: res => {
						uni.showLoading({ title: '图片压缩中...', mask: true })
						this.$refs.wCompress.start(res.tempFilePaths)
							.then(res => {
								console.log(res)
								this.multi = res
								uni.hideLoading()
							})
							.catch(e => {
								console.log(e)
								uni.hideLoading()
							})
					}
				})
			},
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
				console.log(index)
				let arr=[]
				if(index==1){
					arr=[{
						text: '纸质发票',
						type: 1
					}]
					this.waybtn=arr
					this.waybtnIndex=1
				}else{
					arr=[
						{
							text: '电子发票',
							type: 2
						}]
						this.waybtn=arr
						this.waybtnIndex=2
				}
				
			},
			//
			tabwaybtn(index) {
				this.waybtnIndex = index;
			},
			checkMobile(mobile) {
				return RegExp(/^1[34578]\d{9}$/).test(mobile);
			},
			nowgo() {
				uni.navigateTo({
					url: '/pages/again/index?id='+this.id+'&state='+this.state+'&type='+this.type,
				});
			},
			//选择图片
			chooseImage: async function() {
				uni.chooseImage({
					count: 9,
					success: res => {
						uni.showLoading({ title: '图片压缩中...', mask: true })
						this.$refs.wCompress.start(res.tempFilePaths)
							.then(res => {
								this.multi = res
								this.imageList=res
								// this.imageList = this.imageList.concat(res.tempFilePaths);
								let curimages = res
								let imgs = curimages.map((value, index) => {
									return {
										name: "image" + index,
										uri: value
									}
								});
						
								if (imgs.length <= 0) {
									uni.showToast({
										image: '../../static/image/error.png',
										title: "请上传回执单"
									});
									return false;
								}
								uni.uploadFile({
									url: 'http://www.zjcoldcloud.com/managesystem/public/index.php/erp/invoice/upload',
									files: imgs,
									name: 'file',
									formData: {
										id: 1
									},
									success: (res) => {
										let result = JSON.parse(res.data)
										if (result.code == 0) {
											let imgs = result.data.file.split(";")
						
											let newArr = imgs.filter(function(item, index) {
												return item != ''
											})
											let oldimg = this.curimg
											this.curimg = oldimg.concat(newArr)
										}
						
									}
								})
								uni.hideLoading()
							})
							.catch(e => {
								console.log(e)
								uni.hideLoading()
							})
					}
				})

			},
            //查看发票案例
			previewLizi: function(e) {
				 let current = e.target.dataset.src
				 let imgArr = [];
			     imgArr.push(current);
			     uni.previewImage({
			          current: imgArr[0],
			          urls: imgArr,
			     });
				
			},
			//预览图片
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			//删除图片
			deleteImage: function(e) {
				console.log(e, '删除')
				var index = e.currentTarget.dataset.index;
				var that = this;
				var images = that.imageList;
				var curimage = that.curimg;
				console.log(images[index], 'del')
				images.splice(index, 1);
				curimage.splice(index, 1);
				that.imageList = images;
				that.curimg = curimage;
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

	.info-table {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		background-color: #FFFFFF;
	}

	.info-table .info-table-row {
		height: 120upx;
		width: 92%;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1upx solid rgba(204, 204, 204, 1);
	}

	.info-table .info-table-row .table-row-left {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(28, 28, 28, 1);
		line-height: 40upx;
	}

	.info-table .info-table-row .table-row-right {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-table .info-table-row .table-row-right image {
		width: 13upx;
		height: 24upx;
	}

	.info-table .info-table-row .table-row-right input {
		width: 560upx;
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(28, 28, 28, 1);
		line-height: 40upx;
	}

	.table-btn-view {
		position: fixed;
		bottom: 27upx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.table-btn-view .save-btn {
		width: 92%;
		height: 90upx;
		background: rgba(0, 170, 255, 1);
		border-radius: 10upx;
		color: #FFFFFF;
	}

	.uploads {
		width: 92%;
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

					input {
						width: 400upx;
						height: 80upx;
						font-size: 28upx;
					}
				}
			}

			.bigaline {
				display: flex;
				align-items: center;
				border-bottom: 2upx solid #F5F5F5;

				.left {
					width: 240upx;
					text-align: left;
					color: #333;
					height: 165upx;
					font-size: 28upx;

					.requisite {
						display: inline-block;
						height: 100upx;
						line-height: 100upx;
						color: #FF0000;
					}
				}

				.right {
					height: auto;
					flex: 1;

					.uploadimgs {
						display: inline-block;
						height: 120upx;
						width: 120upx;
						margin: 30upx 0;
						box-sizing: border-box;
					}

					textarea {
						padding: 20upx 0 0;
						display: inline-block;
						width: 400upx;
						height: 160upx;
						font-size: 28upx;
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
				}

				.right {
					height: 180upx;

					textarea {
						padding: 20upx 0 0;
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
        .template-img{
			display: inline-block;
			    width: 110px;
			    height: 50px;
		}
		.upload-fh {
			background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD1klEQVRoQ+XbTYhWVRgH8P8fwZUguFKi2pShbvqg2lhhG0PJlc40zQg62WhDg+jklIo1wViUNgwVTGSWWMngyvCjVdLHLrHaJaOBIIK2DHL7lweegcvL48D7vveee7xztu+d972/Ofec8zznPJe4T5qkRQC2AVgP4A8AMySvt3v7bPcP6rhe0lIAJwFsKvz+CZLb272f7MGSHnDsiy24WZKPNQosyUDWs88EsEGS3zQGLOkpx64OUG+T/LhdrF2f5SMt6QXHPhSghklOd4LNEixpo2OXBaitJL/rFJsdWFKvYxe3oO4A6Cd5phtsVmBJrwH4KgD9C+BVkj91i80GLGk3gKkA9I9jfy8DmwVY0kEAEwHoL8f+XRa2drCkDwG8E4B+A9BH8maZ2FrBkj4D8GYA+hHAKyT/KxtbG1iSRUiWCLS2045VFdjkYEm23HwPYHMAOk5yR1XQue9NFmlJskDCsC8FqCmSe6rGJuthSRYiGnZtgJogeSgFNglYkgX/hn08QI2RPJIKWzlYkqV1hn0kQL1B8ouU2ErBkixhN+zyADVA0j5L3iqZtCTZVoyBlrSILAmwNfZscqn/YOlgSf0AohTOkoBekj/XhS39kZa0E0A0Li0JMOzlOrGlgiWNAjgagCwJ6CF5tW5saWBJ7wEYD0CWBBj2Vg7YUsCSbB19KwBdcOz/uWC7BkuyzbRdAchOBfpygs7dS8eztKRvAQwEqGMkh3LEdtzDkj4CMBagJkna5JVt66iHJUX56jjJ97OVdhN4SLJtGdueaW3N7GFTLqgxPNetC2qWLqDtUGtf8Hif93CyOetwAf0ugGjC+tXRzYm0Cui9AD4JevpPRzcnli6gXwfwZYC+5mGm4WttHa3D892xJAspTwXX3Pae/qVOcelgX7JednS042F58bm60JWAHb3Ot3lWBDg7N5qpA10Z2NFPO/rRADdE8lhqdKVgR69y9BMBbpTkZEp05WBHP+jo5wJc0qQjCdjRdrZkOfSGAJ0s6UgGdrSdHhq6J0An2ThICi4EKMcBDAZom7mtgKUZ58NFoCQrYrFiltZmSYehm1MBUOjpwwAOBGhLOgzdnBqPAno/gA8CtMXdhr5S5rJVyxhuBUgaAfBpALOkw9CXykJnAfYZ3Iq9vw5glnQY+mIZ6GzAjt7iJ49RraWhf+gWnRXY0RaY2Frd/GrawkT2vFfVPhz0aLPqpQvoJx29JkA3qyK+gF7p6GcD9AjJz9sd09mN4WDJutdbLTdIRq8IzPs/yB7sE9nCeW+p8Hjbm2nDAKwcahbAdGPfTGt3nM53/V00ckNMKWY8LAAAAABJRU5ErkJggg==');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			height: 30px;
			width: 30px;
		}

		.upload-hedaer {
			height: 55px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			padding: 0 10px;
			box-sizing: border-box;
			align-items: center;
			text-align: center;
			background: #287cff;
			color: #fff;
			border-bottom: 1px solid #efefef;
			font-size: 19px;
		}

		.upload-hedaer div:last-child {
			text-align: right;
		}

		.upload-textarea {
			width: 100%;
			height: 60px;
			font-size: 28px;
			border: 1px solid #efefee;
			max-height: 300px;
		}

		.upload-article-text {
			width: 100%;
			padding: 10px;
			box-sizing: border-box;
		}

		.upload-file {
			position: relative;
			background: url(../../static/image/upload.png) no-repeat 50%/100% 100%;
			/* width: 100px; */
			height: 120px;
			order: 9;
		}

		.upload-piclist {
			padding: 0 10px;
			box-sizing: border-box;
			display: grid;
			grid-template-columns: repeat(3, 120px);
			justify-content: space-between;
			grid-gap: 14px;
		}

		#file {
			width: 100%;
			height: 100%;
			opacity: 0;
		}

		.upload-Picitem {
			width: 100%;
			height: 120px;
		}

		.upload-Picitem>img {
			width: 100%;
			height: 100%;
			object-fit: cover;
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

		.upload-sm {
			padding: 10px;
			box-sizing: border-box;
			color: gray;
		}

		.upload-sm ol>li {
			margin-bottom: 10px;
		}

		.way {
			padding: 0 30upx;
			box-sizing: border-box;
			height: 100upx;
			line-height: 100upx;
			display: flex;
			align-items: center;
			border-bottom: 2upx solid #F5F5F5;

			button {
				display: inline-block;
				width: 180upx;
				height: 54upx;
				line-height: 54upx;
				font-size: 26upx;
				margin: 0;
				background: #FFFFFF;
				margin-right: 70upx;
				border-radius: 60upx;
				border: 1px solid #CCCCCC;
			}

			.active {
				color: #1B4BEF;
				background: #D8E6FF;
				border: 1px solid #1B4BEF;
			}

		}

		.navbar {
			display: flex;
			height: 100upx;
			line-height: 100upx;
			padding: 0 30upx;
			// padding: 40upx 5px;
			background: #fff;
			border-bottom: 2upx solid #F5F5F5;
			position: relative;
			z-index: 10;

			.nav-item {
				display: flex;
				margin-right: 60upx;
				justify-content: start;
				align-items: center;
				height: 100%;
				font-size: 14px;
				color: #333;
				position: relative;

				&.current {
					color: #1B4BEF;

					&:after {
						content: '';
						position: absolute;
						left: 50%;
						bottom: 0;
						transform: translateX(-50%);
						width: 100%;
						height: 0;
						border-bottom: 2px solid #1B4BEF;
					}
				}
			}
		}

		.uni-swiper-item {
			height: auto;
		}

		.btn {
			cursor: pointer;
			width: 600upx;
			height: 90upx;
			border: 1px solid #007AFF;
			margin: 0 auto;
			position: fixed;
			bottom: 60upx;
			left: 75upx;
			border: none;
			outline: none;
			padding: 60upx 0 30upx;

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
