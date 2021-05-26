<template>
	<view class="container">

		<view class="content">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item"
					:class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
					{{ item.text }}
				</view>
			</view>
			<view class="way">
				<button v-for="(item, index) in waybtn" :key="index" class="waybtn"
					:class="{ active: waybtnIndex == item.type }" @click="tabwaybtn(item.type)">
					{{ item.text }}
				</button>
			</view>
			<!-- 显示区域 -->
			<view class="list">
				<view class="aline" @click="confirmShare" v-show="waybtnIndex === 1">
					<view class="left" style="color: #333333;font-size: 15px;font-weight: bold;">开票人信息</view>
					<view class="right" style="text-align: right;width: 100%;">
						<image src="../../static/image/return.png" class="return" mode=""></image>
					</view>
				</view>
				<view class="aline" v-show="waybtnIndex === 2">
					<view class="left">邮箱<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入邮箱账号" v-model="consignee_email" />
					</view>
				</view>
				<view class="aline" v-show="waybtnIndex === 1">
					<view class="left">收货人<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入收货人" v-model="consignee" /></view>
				</view>
				<view class="aline" v-show="waybtnIndex === 1">
					<view class="left">收货人地址<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="收货人地址" v-model="consignee_address" />
					</view>
				</view>
				<view class="aline">
					<view class="left">联系方式<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入联系方式" v-model="consignee_phone" />
					</view>
				</view>
				<view class="aline">
					<view class="left">公司名称<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入公司名称" v-model="company_name" /></view>
				</view>
				<view class="aline">
					<view class="left">纳税人识别号<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入纳税人识别号" v-model="tax_num" /></view>
				</view>
				<view class="aline" v-show="tabCurrentIndex === 1">
					<view class="left">经营地址<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入经营地址" v-model="company_address" />
					</view>
				</view>
				<view class="aline" v-show="tabCurrentIndex === 1">
					<view class="left">公司电话<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入公司电话" v-model="company_phone" /></view>
				</view>
				<view class="aline" v-show="tabCurrentIndex === 1">
					<view class="left">开户银行<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入开户银行" v-model="bank" /></view>
				</view>
				<view class="aline" v-show="tabCurrentIndex === 1">
					<view class="left">开户银行账号<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" placeholder="请输入开户银行账号" v-model="bank_num" /></view>
				</view>
				<view class="aline">
					 <view class="left">开票分类<text class="requisite">*</text>：</view>
					 <view class="right">
				          <picker @change="payType" :range="payTypeArray" class="payType">
				              <label :class="classify=='请选择开票分类'?'grey':'choosetxt'">{{ classify }}</label>
				          </picker>
				    </view>
				  </view>
				<view class="aline">
					<view class="left">{{ payImg[payTypeIndex].val}}<text class="requisite">*</text>：</view>
					<view class="right"><input class="uni-input" :placeholder="'请输入'+payImg[payTypeIndex].val" v-model="delivery_number"/>
					</view>
				</view>
				<view class="bigaline info-table-row">
						<view class="left">{{payImg[payTypeIndex].imgtxt}}<text class="requisite">*</text>：</view>
						<view class="right table-row-right">
							<view class="uploads">
								<view class='upload-image-view'>
									<block v-for="(image,index) in imageList" :key="index">
										<view class='image-view'>
											<image :src="image" :data-src="image" @tap="previewImage"></image>
											<view class='del-btn' :data-index="index" @tap='deleteImage'>
												<view class='baicha'></view>
											</view>
										</view>
									</block>
									<view class='add-view' v-if="multi.length < imageLength" @tap="chooseImage">
										<view class="cross">
											<view class="transverse-line"></view>
											<view class="vertical-line"></view>
										</view>
					
									</view>
									<view class='info'>{{payImg[payTypeIndex].title}}。示例如下：
									<view class="payImgs">
										<template v-for="(item,index) in payImg[payTypeIndex].imgs" >
											<image :src="item" :data-src="item" class="template-img" @tap="previewLizi"></image>
										</template>
									</view>
										
									  
									</view>
								</view>
							</view>
						</view>
					</view>
				

				<view class="bigalinetea">
					<view class="left">备注</view>
					<view class="right">
						<textarea placeholder="填写备注信息" class="uni-textarea" v-model="desc"></textarea>
					</view>
				</view>
			</view>
		</view>

		<!-- <view :class="[tabCurrentIndex==1||waybtnIndex==2?'btnbutton':'btn']"> -->
		<view class='btnbutton'>
			<button type="primary" @click="nowgo">申请开票</button>
		</view>
		<!-- 基本示例 -->
		<uni-popup id="popup" ref="popup" :type='popuptype' :animation="false" @change="change">
			<view class="popup-content">
				<view class="bookTitle">
					选择开票人信息
					<uni-icons type="closeempty" size="24" class="bookclose" @click="bookclose" color='#999'>
					</uni-icons>
				</view>
				<view class="bookList">
					<view>
						<scroll-view scroll-y="true" class="scroll-Y" style="max-height: 400px;">
							<radio-group @change="radioChange"
								style="display: flex;flex-direction: column;line-height: 60upx ;">
								<view v-for="(item, index) in Bookitems" class="bookListItem" :key="item.name+item.id">
									<view class="bookItemlt">
										<radio :value="item.id" :checked="index === current"
											style="transform:scale(0.7)" />
										<view class="bookItemcenter">
											<view class="bookCompany overhide">
												{{item.value}}
											</view>
											<view style="display: flex;">
												<text class="bookname overhide">{{item.name}}</text>
												<text class="bookphone overhide">{{item.phone}}</text>
											</view>
										</view>
									</view>
									<view class="bookItemrt">
										<uni-icons type="compose" size="24" class="bookclose" @click="bookedit(item)"
											v-show="item.value==''&&item.name==''&&item.phone==''"></uni-icons>
										<uni-icons type="compose" size="24" class="bookclose" color="#007aff"
											@click="bookedit(item)"
											v-show="item.value!=''&&item.name!=''&&item.phone!=''"></uni-icons>
									</view>
								</view>
							</radio-group>
						</scroll-view>
					</view>
					<view class="footerbtn">
						<uni-tag text="选择" type="success" :circle="true" @click="bookchooseok"></uni-tag>
						<uni-tag text="删除" type="error" :circle="true" @click="bookchoosedel"></uni-tag>
						<uni-tag text="新增" type="primary" :circle="true" @click="addBookinfo"></uni-tag>
						<!-- <button class="addbookbtn" type="warn" style="border-radius: 30px;" @click="addBookinfo" size="mini">删除</button>
						<button class="addbookbtn" type="primary" style="border-radius: 30px;" @click="addBookinfo" size="mini">新增</button> -->
					</view>
				</view>
			</view>
		</uni-popup>
		<w-compress ref='wCompress' />
	</view>
</template>

<script>
	import $ from '../../common/tsRequest.js'
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
				tabCurrentIndex: 0,
				waybtnIndex: 2,
				imageList: [], //保存图片路径集合
				imageLength: 10, //限制图片张数
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				navList: [{
						state: 0,
						text: '增值税普通发票',
						orderList: []
					},
					{
						state: 1,
						text: '增值税专用发票',
						orderList: []
					}
				],
				waybtn: [
					// {
					// 	text: '纸质发票',
					// 	type: 1
					// },
					{
						text: '电子发票',
						type: 2
					}
				],
				company_name: '',
				company_address: '',
				company_phone: '',
				tax_num: '',
				delivery_number: '',
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
				curimg: [],
				popuptype: 'bottom',
				Bookitems: [],
				current: '',
				payTypeArray:['采购产品','维修维护','服务费','短信','语音'],
				payTypeIndex:0,
				classify:'请选择开票分类',
				payImg:[
					{imgtxt:'回执单',title:'请您务必上传收货的中集智冷成品出库单,否则无法正常开票',imgs:['../../static/image/fahuodan.png'],val:'发货编号'},
					{imgtxt:'工单截图',title:'请您务必上传维修报告和付款截图,否则无法正常开票',imgs:['../../static/image/gongdan.jpeg','../../static/image/pay.jpeg'],val:'工单号'},
					{imgtxt:'付款截图',title:'请您务必上传年费截图,否则无法正常开票',imgs:['../../static/image/nianfei.jpeg','../../static/image/pay.jpeg'],val:'登录账号'},
					{imgtxt:'付款截图',title:'请您务必上传短信购买截图,否则无法正常开票',imgs:['../../static/image/pay.jpeg'],val:'登录账号'},
					{imgtxt:'付款截图',title:'请您务必上传语音购买截图,否则无法正常开票',imgs:['../../static/image/pay.jpeg'],val:'登录账号'},
				]

			};
		},

		onLoad(options) {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
			let _openid = uni.getStorageSync('invoiceopenId');
			this.openid = _openid
			let _id = options.id
			console.log(_id)
			this.id = _id
			this.tabCurrentIndex = options.type == 1 ? 0 : 1;
			this.state = options.state
			this.query(_id)
		},
		onShow: function() {
			this.$nextTick(function() {
				this.$refs.popup.close()
			})
		},
		methods: {
			payType(e) {
			    this.payTypeIndex = e.target.value;
			    this.classify=this.payTypeArray[this.payTypeIndex]
			},
			//加开票人信息联系人
			addBookinfo() {
				uni.navigateTo({
					url: '../bookmanage/index'
				})
				return false;
				// let obj={
				// 		value: '',
				// 		phone:'',
				// 		name: ''
				// 	}
				// this.Bookitems=this.Bookitems.concat(obj)	
			},
			del(id) {
				this.Bookitems.some((item, i) => {
					if (i == id) {
						this.Bookitems.splice(i, 1)
						//在数组的some方法中，如果return true，就会立即终止这个数组的后续循环
						return true
					}
				})
				this.current = ''
			},
			//删除开票人信息联系人
			bookchoosedel() {
				let _id = []
				_id.push(this.Bookitems[this.current].id)
				console.log(_id)
				let _data = {
					id: _id
				}

				$.post('/erp/addressBook/del', qs.stringify(_data)).then(res => {
					console.log(res)
					if (res.code == 0) {
						uni.showToast({
							title: '删除成功'
						})
						this.del(this.current)
					} else {
						uni.showToast({
							image: '../../static/image/error.png',
							title: '删除成功'
						})
					}
				}).catch(err => {
					console.log(err)
				})
			},
			bookedit(item) {
				uni.navigateTo({
					url: '../bookmanageedit/index?id=' + item.id
				})
			},
			bookclose() {
				this.$refs.popup.close()
				// 需要执行 done 才能关闭对话框
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.Bookitems.length; i++) {
					if (this.Bookitems[i].id === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			bookchooseok() {
				console.log(this.current)
				this.consignee = this.Bookitems[this.current].name
				this.consignee_address = this.Bookitems[this.current].value
				this.consignee_phone = this.Bookitems[this.current].phone
				this.$refs.popup.close()
			},
			confirmShare() {
				this.$refs.popup.open()
				let obj = {
					limit: 10,
					page: 1,
					openid: this.openid
				}
				this.Bookitems = []
				this.current = ''
				$.post('/erp/addressBook/index', obj).then(res => {
					console.log(res)
					if (res.code == 0) {
						let arr = []
						let _id=''
						let newarr = res.data.data.forEach((item, index) => {
							let cobj = {}
							_id=String(item.id)
							cobj.id = _id
							cobj.name = item.name
							cobj.value = item.address
							cobj.phone = item.phone
							arr.push(cobj)
						});

						console.log(arr)
						this.Bookitems = arr
					}
				}).catch(err => {

				})
			},
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			},
			select(e, done) {
				uni.showToast({
					title: `您选择了第${e.index+1}项：${e.item.text}`,
					icon: 'none'
				})
				done()
			},
			query(id) {
				let data = {
					id
				}
				let t = this;
				let url = "/erp/invoice/detail";
				let params = data;
				$.post(url, params).then(res => {
					console.log(res)
					if (res.code == 0) {
						this.waybtnIndex = res.data.way == '1' ? 1 : 2;
						if (this.waybtnIndex == 1) {
							this.waybtn = [{
								text: '纸质发票',
								type: 1
							}]
						} else {
							this.waybtn = [

								{
									text: '电子发票',
									type: 2
								}
							]
						}
						this.bank = res.data.bank
						this.bank_num = res.data.bank_num
						this.change_reason = res.data.change_reason
						this.change_times = res.data.change_times
						this.company_address = res.data.company_address
						this.company_name = res.data.company_name
						this.company_phone = res.data.company_phone
						this.consignee = res.data.consignee
						this.consignee_address = res.data.consignee_address
						this.consignee_email = res.data.consignee_email
						this.consignee_phone = res.data.consignee_phone
						this.create_time = res.data.create_time
						this.delivery_number = res.data.delivery_number
						this.desc = res.data.desc
						this.file = res.data.file
						this.invoice_num = res.data.invoice_num
						this.is_del = res.data.is_del
						this.logistics_num = res.data.logistics_num
						this.peisong_time = res.data.peisong_time
						this.postil = res.data.postil
						this.return_reason = res.data.return_reason
						this.state = res.data.state
						this.tax_num = res.data.tax_num
						this.type = res.data.type
						this.way = res.data.way
						this.payTypeIndex=res.data.classify-1
						if(res.data.classify==1){
							this.classify='采购产品'
						}else if(res.data.classify==2){
							this.classify='维修维护'
						}else if(res.data.classify==3){
							this.classify='服务费'
						}else if(res.data.classify==3){
							this.classify=='短信'
						}else{
							this.classify=='语音'
						}
						let arrimg = res.data.file.split(";")
						console.log(arrimg)
						var imgs = []
						this.curimg = arrimg
						arrimg.forEach(function(item, index) {
							console.log(item)
							if (item != '') {
								let url =
									'http://www.zjcoldcloud.com/managesystem/storage/app/public/uploads/invoice/' +
									item;
								console.log(url)
								imgs.push(url)
							}
						});
						console.log(imgs)
						this.imageList = imgs
						this.multi = imgs
					}

				}).catch(err => {
					console.log(err)
				})
			},
			onMulti() {
				uni.chooseImage({
					count: 9,
					success: res => {
						uni.showLoading({
							title: '图片压缩中...',
							mask: true
						})
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
				let arr = []
				if (index == 1) {
					arr = [{
						text: '纸质发票',
						type: 1
					}]
					this.waybtn = arr
					this.waybtnIndex = 1
				} else {
					arr = [{
						text: '电子发票',
						type: 2
					}]
					this.waybtn = arr
					this.waybtnIndex = 2
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
				var a = this.curimg; //定义数组
				var s = a.join(";"); //指定分隔符
				if (isok) {
					//tabCurrentIndex 发票类型 waybtnIndex 发票方式 
					let obj = {}
					let imglist = []
					let piclist = document.querySelectorAll('.upload-Picitem');
					for (let i = 0; i < piclist.length; i++) {
						imglist.push(piclist[i].lastChild.src)
					}

					if (this.tabCurrentIndex == '0' && this.waybtnIndex == '1') {
						if (this.consignee == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "收货人不能为空"
							});
							return false;
						} else if (this.consignee_address == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "收货人地址不能为空"
							});
							return false;
						} else if (this.consignee_phone == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "联系方式不能为空"
							});
							return false;
						} else if (!this.checkMobile(this.consignee_phone)) {
							uni.showToast({
								title: '手机号格式错误',
								icon: 'none'
							});
							return;
						} else if (this.company_name == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "公司名称不能为空"
							});
							return false;
						} else if (this.tax_num == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "纳税人识别号不能为空"
							});
							return false;
						} else {
							obj = {
								type: 1,
								way: 1,
								state: 1,
								consignee: this.consignee,
								consignee_address: this.consignee_address,
								consignee_phone: this.consignee_phone,
								company_name: this.company_name,
								tax_num: this.tax_num,
								desc: this.desc
							}
							// 0 普通发票 1纸质
							console.log(' 0 普通发票 1纸质')
							// get请求
						}

					} else if (this.tabCurrentIndex == '0' && this.waybtnIndex == '2') {
						if (this.company_name == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "公司名称不能为空"
							});
							return false;
						} else if (this.tax_num == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "纳税人识别号不能为空"
							});
							return false;
						} else if (this.consignee_email == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "邮箱账号不能为空"
							});
							return false;
						}
						obj = {
							type: 1,
							way: 2,
							state: 1,
							consignee_phone: this.consignee_phone,
							consignee_email: this.consignee_email,
							company_name: this.company_name,
							tax_num: this.tax_num,
							desc: this.desc
						}
						// 0 普通发票 2电子
					} else if (this.tabCurrentIndex == '1' && this.waybtnIndex == '1') {
						if (this.consignee == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "收货人不能为空"
							});
							return false;
						} else if (this.consignee_address == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "收货人地址不能为空"
							});
							return false;
						} else if (!this.checkMobile(this.consignee_phone)) {
							uni.showToast({
								title: '手机号格式错误',
								icon: 'none'
							});
							return;
						} else if (this.consignee_phone == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "联系方式不能为空"
							});
							return false;
						} else if (this.company_name == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "公司名称不能为空"
							});
							return false;
						} else if (this.tax_num == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "纳税人识别号不能为空"
							});
							return false;
						} else if (this.company_address == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "公司营业地址不能为空"
							});
							return false;
						} else if (this.company_phone == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "公司电话不能为空"
							});
							return false;
						} else if (this.bank == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "开户银行不能为空"
							});
							return false;
						} else if (this.bank_num == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "开户银行账号不能为空"
							});
							return false;
						}
						obj = {
							type: 2,
							way: 1,
							state: 1,
							consignee: this.consignee,
							consignee_address: this.consignee_address,
							consignee_phone: this.consignee_phone,
							company_name: this.company_name,
							tax_num: this.tax_num,
							company_address: this.company_address,
							company_phone: this.company_phone,
							bank: this.bank,
							bank_num: this.bank_num,
							desc: this.desc
						}
						// 1 专用发票 1纸质
						console.log('1 专用发票 1纸质')
					} else {
						if (this.company_name == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "公司名称不能为空"
							});
							return false;
						} else if (this.tax_num == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "纳税人识别号不能为空"
							});
							return false;
						} else if (this.company_address == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "公司营业地址不能为空"
							});
							return false;
						} else if (this.company_phone == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "公司电话不能为空"
							});
							return false;
						} else if (this.bank == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "开户银行不能为空"
							});
							return false;
						} else if (this.bank_num == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "开户银行账号不能为空"
							});
							return false;
						} else if (this.consignee_email == '') {
							uni.showToast({
								image: '../../static/image/error.png',
								title: "邮箱不能为空"
							});
							return false;
						}
						obj = {
							type: 2,
							way: 2,
							state: 1,
							consignee_email: this.consignee_email,
							consignee_phone: this.consignee_phone,
							company_name: this.company_name,
							tax_num: this.tax_num,
							company_address: this.company_address,
							company_phone: this.company_phone,
							bank: this.bank,
							bank_num: this.bank_num,
							desc: this.desc
						}
						console.log('1 专用发票 2电子')

						// 1 专用发票 2电子
					}
					if (this.classify == '请选择开票分类') {
						uni.showToast({
							image: '../../static/image/error.png',
							title: '请选择开票分类'
						});
						return false;
					}
					if (this.delivery_number == '') {
						uni.showToast({
							image: '../../static/image/error.png',
							title: "请输入"+this.payImg[this.payTypeIndex].val
						});
						return false;
					}
					
					let imgs = this.imageList.map((value, index) => {
						return {
							name: "image" + index,
							uri: value
						}
					});

					if (imgs.length <= 0) {
						uni.showToast({
							image: '../../static/image/error.png',
							title: '请上传'+this.payImg[this.payTypeIndex].imgtxt
						});
						return false;
					}
					let _classify=''
					if(this.classify=='采购产品'){
						_classify=1
					}else if(this.classify=='维修维护'){
						_classify=2
					}else if(this.classify=='服务费'){
						_classify=3
					}else if(this.classify=='短信'){
						_classify=4
					}else{
						_classify=5
					}
					obj.classify=_classify
					// obj.id = this.id
					obj.file = s
					obj.openid = this.openid
					obj.delivery_number = this.delivery_number
					// return false;
					$.post('/erp/invoice/add', obj).then(res => {
						console.log(res)
						isok = false;
						setTimeout(function() {
							isok = true;
						}, 1000);
						if (res.code == 0) {
							uni.showToast({
								title: "提交成功!"
							});
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/list/index',
								});
							}, 1500)

						} else {
							uni.showToast({
								image: '../../static/image/error.png',
								title: res.message
							});
							return
						}
					}).catch(err => {
						console.log(err)
						uni.showToast({
							image: '../../static/image/error.png',
							title: "提交失败!"
						});
						return
					})
				}
			},
			//选择图片
			chooseImage: async function() {
				console.log("sc")
				uni.chooseImage({
					count: 9,
					success: res => {
						uni.showLoading({
							title: '图片压缩中...',
							mask: true
						})
						this.$refs.wCompress.start(res.tempFilePaths)
							.then(res => {
								this.multi = this.multi.concat(res)
								// this.imageList=res
								this.imageList = this.imageList.concat(res);
								let curimages = res
								let imgs = curimages.map((value, index) => {
									return {
										name: "image" + index,
										uri: value
									}
								});
								console.log(imgs)
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

											let newArr = imgs.filter(function(item,
												index) {
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

	.popup-content {
		background-color: #fff;
		padding: 15px;

		.bookTitle {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #333333;
			font-size: 15px;
			font-weight: 600;

			.bookclose {
				position: absolute;
				right: 30upx;

			}
		}

		.bookListItem {
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20upx;

			.bookItemlt {
				display: flex;
				align-items: center;

				.bookItemcenter {
					display: flex;
					flex-direction: column;
					align-items: start;

					.uni-input-input {
						font-size: 14px;
					}

					.bookCompany {
						width: 580upx;
						font-weight: 520;
						font-size: 15px;
					}

					.bookname {
						width: 200upx;
					}

					.bookphone {
						width: 380upx;
					}
				}
			}

		}
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

	.overhide {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
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

		.template-img {
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
			z-index: 99;
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

		.footerbtn {
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-top: 30upx;
		}

	}
</style>
