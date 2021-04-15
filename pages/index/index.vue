<template>
	<view class="container">		
		<view class="content">
			<view class="listItem" v-for="(item,index) in listdata" @click="bindchoose(index)">
				<view class="left">
					<text :class="[{ active: index==active }, 'titleText']">{{item.title}}</text>
					<text :class="[{ active: index==active }, 'descText']">{{item.desc}}</text>
				</view>
				<view>
					<image :src="index==active?'../../static/image/chooseok.png':'../../static/image/choose.png'"></image>
				</view>
			</view>
			<view class='btnbutton'>
				<button type="primary" @click="nowgo">立即前往</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
<<<<<<< HEAD
				openid:'',
				active:'',
=======
				active:0,
>>>>>>> 8f80766e3c827511f24196ad7bf0db61fb81ef3c
				listdata: [
					{
						title:'发票申请',
						desc:'上传发票信息，申请开票'
					},
					{
						title:'发票列表',
						desc:'查看已申请的发票状态和历史记录'
					} 
				]
			}
		},
<<<<<<< HEAD
		onLoad() {
			if(window.localStorage.getItem('intoinvoiceindex')===null){
				this.active=0
			}else{
				this.active=window.localStorage.getItem('intoinvoiceindex')
				
			}
			if(window.localStorage.getItem('invoiceopenId')===null){
			  let urlOpenid = this.$geturl.getUrlKey('openId')
			  this.openid=urlOpenid==null?'':urlOpenid
			  if(urlOpenid!==null||urlOpenid!=''){
			   window.localStorage.setItem('invoiceopenId',urlOpenid)
			  }
			}else{
			  this.openid=window.localStorage.getItem('invoiceopenId')
			  
			}
		},
		methods: {
            bindchoose(index){
				this.active=index
				window.localStorage.setItem('intoinvoiceindex',index)
			},
			nowgo(){
				if(this.active==0){
				    uni.navigateTo({
					  url:"../apply/index"
				    });
				}else{
					uni.navigateTo({
=======
		methods: {
            bindchoose(index){
				this.active=index
			},
			nowgo(){
				if(this.active==0){
				    uni.reLaunch({
					  url:"../apply/index"
				    });
				}else{
					uni.reLaunch({
>>>>>>> 8f80766e3c827511f24196ad7bf0db61fb81ef3c
					  url:"../list/index"
					});
				}
			    
	
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		.content .listItem{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 360upx;
			.left{
				display: flex;
				flex-direction: column;
				justify-content: start;
				.titleText{
					color: $uni-text-color-grey;
					font-size: 40upx;
					margin-bottom: 30upx;
				}
				.descText{
					color: $uni-text-color-grey;
					font-size: $uni-font-size-base;
					margin-bottom: 30upx;
				}
				.active{
					color: #1B4CEF!important;
					font-weight: 500;
				}
			}
			
			image{
				display: inline-block;
				width: 34upx;
				height: 34upx;
			}
			&:first-child{
				border-bottom: 1px solid #ccc;
			} 
		}
		.btnbutton {
			position: fixed;
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
