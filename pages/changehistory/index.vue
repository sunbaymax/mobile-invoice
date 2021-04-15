<template>
	<view class="container">
		<view class="content">
			<view class="info">
				<view class="aline alinefrist">
					<text>发票号：{{invoice_num}}</text>
					<text v-if="state==1||state==8" class="suretxt">{{state|state}}</text>
					<text v-else-if="state==2||state==9" class="successtxt">{{state|state}}</text>
					<text v-else-if="state==3||state==10" class="errortxt">{{state|state}}</text>
					<text v-else-if="state==4||state==11" class="warntxt">{{state|state}}</text>
					<text v-else class="overtxt">{{state|state}}</text>
				</view>	
				<view class="aline">
					<text>发票种类：{{type==1?'普通发票':'专用发票'}}</text>
				</view>
				<view class="aline">
					<text>开票时间：{{create_time}}</text>
					<uni-tag text="查看详情" type="default" :circle="true" size="small" @click="detail()"></uni-tag> 
				</view>
			</view>
			<view class="historylist shipping">
				<view v-for="(item,index) in dataList">
					<view>第{{index|indexnum}}次</view>
					<view class="ul" v-for="(sitem,sindex) in item">
						<view class="li">
							<view class="time">
								<text class="timeday">{{sitem.create_time|myday}}</text>
								<text class="timeh"> {{sitem.create_time|myhour}}</text>
							</view>
							<view class="mmmm">
								<view class="yuan first" :class="{'act':sindex==0}"></view>
							</view>
							<view class="desc black">
								<view class="desc ">{{sitem.state|state}}{{sitem.reason==''?'':"("+sitem.reason+")"}}
								
								<uni-tag text="查看物流" type="success" :circle="true" size="small" @click="bindlogistics()" style="width: 50px;margin-left: 15px;" v-show="sitem.state==11"></uni-tag>
								</view> 
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="box">DUANG~没有更多物流信息了哦</view>
		</view>
	</view>
</template>

<script>
	import $ from '../../common/tsRequest.js'
	export default{
		data(){
			return{
				id:'',
				state:'',
				num:'',
				type:'',
				invoice_num:'',
				create_time:'',
				dataList:[]
			}
		},
		onLoad(options) {
			this.id=options.id
			this.state=options.state
			this.num=options.num
			this.type=options.type
			this.query(options.id)
			this.queryhistory(options.id)
		},
		filters: {
		  myday(value){
			  let str=value.substring(5,11)
			  return str;
		  },
		  myhour(value){
			  let str=value.substring(11,16)
			  return str;
		  },
		  indexnum:function(value){
			   if (!value) return ''
			   let str=''
			   str=value.replace("l","")
			   return str;
		  },
		  state: function (value) {
		    if (!value) return ''
			let str=''
			if(value==1){
				str='待审核'
			}else if(value==2){
				str='已通过'
			}else if(value==3){
				str='未通过'
			}else if(value==4){
				str='配送中'
			}else if(value==5){
				str='异常单'
			}else if(value==6){
				str='退单'
			}else if(value==7){
				str='已完成'
			}else if(value==8){
				str='换单待审核'
			}else if(value==9){
				str='换单已通过'
			}else if(value==10){
				str='换单未通过'
			}else if(value==11){
				str='换单配送中'
			}else if(value==12){
				str='换单已完成'
			}else if(value==13){
				str='退单已完成'
			}
		    return str
		  }
		},
		methods:{
			detail(){
				uni.navigateTo({
					url: '../info/index?id='+this.id+'&state='+this.state+'&type='+this.type,
				})
			},
			bindlogistics(){
				uni.navigateTo({
					url: '../logisticsinfo/index?id='+this.id+'&state='+this.state+'&num='+this.logistics_num+'&type='+this.type,
				})
			},
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
							this.change_reason=res.data.change_reason
							this.change_times=res.data.change_times
							this.company_address=res.data.company_address
							this.company_name=res.data.company_name
							this.company_phone=res.data.company_phone
							this.consignee=res.data.consignee
							this.consignee_address=res.data.consignee_address
							this.consignee_email=res.data.consignee_email
							this.consignee_phone=res.data.consignee_phone
							this.create_time=res.data.create_time
							this.desc=res.data.desc
							this.invoice_num=res.data.invoice_num
							this.logistics_num=res.data.logistics_num
							this.state=res.data.state
							this.tax_num=res.data.tax_num
							this.type=res.data.type
							this.way=res.data.way
						}
						
					}).catch(err =>{
						console.log(err)
					})
			},
			queryhistory(id){
				let data={
					invoice_id: id
				}
				$.post('/erp/invoice/get_change_history',data).then(res=>{
					console.log(res)
					if(res.code==0){
						this.dataList=res.data
					}else{
						uni.showToast({
							title:res.message
						})
					}
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss">
	.container .content{
		padding: 0 15px;
		box-sizing: border-box;
		.info{
			margin: 5px 0!important;
			background:url(../../static/image/logistic-tittle.png) no-repeat;
			background-size: contain;
		}
		.alinefrist{
		    position: relative;
		}
		.aline {
			font-size: 13px;
			color: #999;
		    height: 30px;
		    line-height: 30px;
		    display: flex;
		    justify-content: space-between;
		    align-items: center;
			.successtxt{
				color: $uni-color-success;
			}
			.errortxt{
				color: $uni-color-error;
			}
			.warntxt{
				color: $uni-color-warning;
			}
			.suretxt{
				color: $uni-color-primary;
			}
			.overtxt{
				color:$uni-text-color;
			}
		}
		 .shipping .ul .li {
		    width: 100%;
		    display: flex;
		    height: auto;
		    margin-top: 1px;
			.time{
			    width: 16%;
			    padding: 10px 0px;
			    display: flex;
			    flex-direction: column;
			    align-items: center;
			    font-family: PingFang SC;
			    font-weight: 700;
			    color: #b0b1b7;
				.timeday{
					font-size: 14px;
				}
				.timeh{
					font-size: 12px;
				}
			}
			.mmmm{
			    position: relative;
			    width: 10%;
			    display: -webkit-box;
			    display: -webkit-flex;
			    display: flex;
			    flex-direction: column;
			    justify-content: center;
			    align-items: center;
				.yuan {
				    position: absolute;
				    left: 10px;
				    width: 10px;
				    height: 10px;
				    background: #dedede;
				    border-radius: 50%;
				    border: 1px solid #f2f2f2;
				}
				.act{
				    background-color: #fd2e6f;
				}
			}
			.desc{
			    width: 74%;
			    padding: 10px 0px;
			    margin-left: 10px;
			    font-size: 14px;
			    font-weight: 500;
			    height: 40px;
			    line-height: 40px;
			    color: #b0b1b7;
				display: flex;
				align-items: center;
			}

		}
		.box{
		    text-align: center;
		    color: #888;
		    font-size: 10px;
			&:before {
			    content: "---";
			    color: #888;
			    font-size: 12px;
			    margin-right: 10px;
			}
			&:after {
			    content: "---";
			    font-size: 14px;
			    margin-left: 10px;
			}
		}
	}
	
</style>
