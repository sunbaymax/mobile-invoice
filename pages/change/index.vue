<template>
	<view class="container">
		<view class="content">
			<view class="list">
				<view class="aline" v-show="way==1">
					<view class="left">运单号<text class="requisite">*</text>：</view>
					<view class="right"><input  class="uni-input" placeholder="请输入运单号" v-model="logistics_num"/></view>
				</view>	
				<view class="bigaline">
					<view class="left">换票原因<text  class="requisite">*</text>：</view>
					<view class="right"><textarea  class="textarea" placeholder="请输入换票原因" v-model="change_reason"></textarea></view>
				</view>
				<view class="btn">
					<button class="" type="primary" @click="changebtn">确认换票</button>
				</view>
			</view>
		</view>
	</view>	
</template>

<script>
	import $ from "../../common/tsRequest.js"
	export default{
		data(){
			return{
				way:'',
				logistics_num:'',
				change_reason:''
			}
		},
		onLoad(options) {
			this.way=options.way
			this.id=options.id
			let _openid = uni.getStorageSync('invoiceopenId');
			this.openid = _openid
		},
		methods:{
			changebtn(){
				let data={
					id: this.id,
					logistics_num:this.logistics_num,
					change_reason: this.change_reason,
					openid: this.openid
				}
				$.post('/erp/invoice/change',data).then(res=>{
					if(res.code==0){
						uni.showToast({
							title:res.message
						})
						setTimeout(function(){
						  uni.reLaunch({
						  	url: '/pages/list/index',
						  });	
						},1500)
					}else{
						uni.showToast({
							image: '../../static/image/error.png',
							title: res.message
						})
					}
				}).catch(err=>{
					
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.container{
	    background: #fff;
		.content{
		    background: #fff;
		    height: 100%;
		    padding: 15px;
		    box-sizing: border-box;
			.aline {
			    height: 50px;
			    display: flex;
			    align-items: center;
			    border-bottom: 1px solid #f5f5f5;
				.left {
				    width: 93px;
				    text-align: left;
				    color: #333;
				    font-size: 14px;
					.requisite {
					    display: inline-block;
					    height: 50px;
					    line-height: 50px;
					    color: red;
					}
				}
				.right input {
				    width: 200px;
				    height: 40px;
				    font-size: 14px;
				}
			}
			.bigaline {
			    display: flex;
			    align-items: center;
			    border-bottom: 1px solid #f5f5f5;
					.left {
						padding-top: 8px;
						box-sizing: border-box;
				         text-align: left;
				          color: #333;
				          height: 82px;
				          font-size: 14px;
				          margin-right: 15px;
				          display: flex;
				          align-items: flex-start;
					   .requisite {
					    display: inline-block;
					    color: red;
					}
				}
				.right{
					 textarea{
					    padding: 10px 0 0;
					    display: inline-block;
					    width: 200px;
					    height: 80px;
					    font-size: 14px;
					}
				}
			}
			.btn {
			    cursor: pointer;
			    width: 300px;
			    height: 45px;
			    border: 1px solid #007aff;
			    margin: 0 auto;
			    position: fixed;
			    bottom: 30px;
			    left: 37px;
			    border: none;
			    outline: none;
			    padding: 30px 0 15px;
				button{
				    background: #1b4cef;
				    border-radius: 30px;
				    border: none;
				    font-size: 15px;
				    height: 45px;
				    line-height: 45px;
				    outline: none;
				}
			}
		}
	}
</style>
