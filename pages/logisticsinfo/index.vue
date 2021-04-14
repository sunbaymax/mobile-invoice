<template>
	<view class="container">
		<view class="banner">
			<view class="titlemsg" v-if="invoicetype==1">发票开好向邮箱飞奔过去！</view>
			<view class="titlemsg" v-else>订单正向你飞奔过去！</view>
			<view class="sendinfobox" v-if="invoicetype==2">
		     	<text class="sendinfo">收货人：{{name}} {{phone}}</text>
		     	<text class="sendaddress">收货地址：{{address}}</text>
			</view>
			<view class="sendinfobox" v-else>
		     	<text class="sendinfo">邮件地址：{{mail}}</text>
				<text class="sendaddress">发票号：{{invoicenum}}</text>
			</view>
			
		</view>
		<view class="logistics" v-show="invoicetype==2">
			<view class="info" style="">
				<view class="aline alinefrist">
					<text >发票号：{{invoicenum}}</text>
				</view>
				<view  class="aline alinefrist">
					<text >物流单号：{{logisticsnum}}</text>
					<button class="item-btn copy" v-clipboard:copy="logisticsnum" type="primary" v-clipboard:success="(type) => onCopyResult('success')"	v-clipboard:error="(type) => onCopyResult('error')">复制	</button>
				</view>
				<view  class="aline"><text >配送方式：{{logisticstype}}</text></view>
				<view  class="aline"><text >更新时间：{{logisticstime}}</text></view>
				<view  class="aline"><text >配送状态：{{logisticsstate|state}}</text></view>
			</view>
		</view>
		<view class="step" v-show="invoicetype==2">
			<uni-steps :options="list" active-color="#007AFF" :active="active" direction="column" />
		</view>
		<view class="btnbox">
			<button type="default" @click="bindreturn">我要退票</button>
			<button type="default" @click="bindchange">我要换票</button>
			<button type="primary" @click="bindget">确认收货</button>
		</view>
		<uni-popup ref="popup" type="center">
			<image src="../../static/image/getgood.png" class="completeimg"></image>
		</uni-popup>
	</view>
</template>

<script>
	import $ from '../../common/tsRequest.js'
	export default {
		data(){
			return {
				logisticsnum:'',
				id:'',
			    list: [
						// {title: '买家下单',desc: '2018-11-11'}
				],
				active: 1,
				logisticstype:'',
				logisticstime:'',
				logisticsstate:'',
				invoicenum:'',
				name:'',
				phone:'',
				address:'',
				way:'',
				state:'',
				mail:''
			}
		},
		filters:{
			state: function (value) {
			  if (!value) return ''
			  let str=''
			  if(value==0){
			  	str='快递收件(揽件)'
			  }else if(value==1){
			  	str='在途中'
			  }else if(value==2){
			  	str='正在派件'
			  }else if(value==3){
			  	str='已签收'
			  }else if(value==4){
			  	str='派送失败'
			  }else if(value==5){
			  	str='疑难件'
			  }else if(value==6){
			  	str='退件签收'
			  }else{
				str='未知'
			  }
			  return str;
			}
		},
		onLoad(options){
			this.logisticsnum=options.num
			this.id=options.id
			this.state=options.state
			this.invoicetype=options.type
			console.log(options.num)
			if(options.type==2){
				//this.logisticsquery(this.logisticsnum)
			}
			this.query(options.id)
		},
		methods:{
			bindreturn(){
				uni.navigateTo({
					url: '/pages/return/index?id='+this.id+'&state='+this.state+'&way='+this.way,
				});
			},
			bindchange(){
				uni.navigateTo({
					url: '/pages/change/index?id='+this.id+'&state='+this.state+'&way='+this.way,
				});
			},
			bindget(){
				//$.post()
				let that=this
				uni.showModal({
					title: '提示',
					content: '确认收票后发票将无法退换，是否确认收票？',
					cancelText: "取消", // 取消按钮的文字  
					confirmText: "确认收票", // 确认按钮文字  
					showCancel: true, // 是否显示取消按钮，默认为 true
					success: (res) => {
						if(res.confirm) { 
							let data={
								id:that.id,
								state: 12
							}
							$.post('/erp/invoice/modifyState',data).then(res=>{
								if(res.code==0){
									this.$refs.popup.open();
									setTimeout(()=>{
									  uni.navigateTo({
									  	url:'../list/index'
									  })	
									},1500)
								}else{
									uni.showToast({
										title: "收票失败!"
									})
								}
							}).catch(err=>{
								
							})
						} else {  
							console.log('else', res)
						}  
					} 
				})
			},
			query(id){
				let data={
					id
				}
				$.post('/erp/invoice/detail',data).then(res=>{
					if(res.code==0){
						this.invoicenum=res.data.invoice_num;
						this.name=res.data.consignee;
						this.phone=res.data.consignee_phone;
						this.address=res.data.consignee_address;
						this.way=res.data.way
						this.mail=res.data.consignee_email
					}
				}).catch(errr=>{
					
				})
			},
			logisticsquery(){
				let data={
					num: this.logisticsnum
				}
				this.list=[]
				$.post('/erp/invoice/logistics',data).then(res=>{
					if(res.status==0){
						let arr=res.result.list
						this.logisticstype=res.result.expName
						this.logisticstime=res.result.updateTime
						this.logisticsstate=res.result.deliverystatus
						let newarr=[]
						arr.forEach(function(item,index){
							let obj={}
							obj.title=item.status
							obj.desc=item.time
							newarr.push(obj)
						})
						this.list=newarr.reverse()
					}
				}).catch(errr=>{
					
				})
			},
			onCopyResult(type) {
				if (type==='success') {
					uni.showToast({
						image: '../../static/image/error.png',
						title:'复制成功',
					});	
				} else {
					uni.showToast({
						image: '../../static/image/error.png',
						title: '复制失败'
					});
				}
			}
			

		}
		
	}
</script>

<style lang="scss"> 
	.container{
		.banner{
			width: 100%;
			height: 300upx;
			background: url(../../static/image/banner.png) no-repeat;
			background-size: cover;
			position: relative;
			.titlemsg{
				color: #fff;
				font-size: 18px;
				font-weight: 600;
				position: absolute;
				top: 86upx;
				letter-spacing: 2px;
				left: 15px;
			}
			.sendinfobox{
				.sendinfo{
					color: #fff;
					font-size: 14px;
					position: absolute;
					bottom: 90upx;
					left: 15px;
					display: inline-block;
					width: 500upx;
				}
				.sendaddress{
					color: #fff;
					font-size: 14px;
					position: absolute;
					bottom: 15upx;
					left: 15px;
					display: inline-block;
					width: 500upx;
				}
				
			}
		}
		.step{
			padding-bottom: 30px;
		}
		.completeimg{
			display: inline-block;
			width: 340upx;
			height: 312upx;
		}
		.btnbox{
			position: fixed;
			bottom: 30upx;
			right: 30upx;
			z-index: 99;
			display: flex;
			width: 300px;
			button{
				width: 90px;
				height: 30px;
				font-size: 12px;
			}
		}
		.logistics .info{
		    margin: 5px 0!important;
		    background: url(../../static/image/logistic-tittle.png) no-repeat;
		    background-size: contain;
		    padding: 0 15px;
		    box-sizing: border-box;
			.aline{
				height: 24px;
				line-height: 24px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
				    color: #656565;
				    font-size: 13px;
				}
			}
			.alinefrist .copy {
			    display: inline-block;
			    width: 55px;
			    height: 24px;
			    line-height: 24px;
			    font-size: 12px;
			    position: absolute;
			    right: 15px;
			}	
		}
	}
</style>
