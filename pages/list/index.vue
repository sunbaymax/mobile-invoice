<template>
	<view class="container">
		<view v-if="list.length>0">
		<view class="fixed">
			<view class="tabs choosebtn">
				<liuyuno-tabs
					:tabData="tabs"
					:activeIndex="activeIndex"
					:config="{
						color: '#888',
						activeColor: '#313131',
						underLineColor: '#313131',
					}"
					@tabClick="tabClick($event, '自定义下划线')" />
			</view>
			<view class="searchTime">
				   <ruiDatePicker
						start="2010-04-25 08:10:00"
						end="2025-03-02 04:10:00"
						fields="second"
						:value="startTime"
						@change="bindChange"
						@cancel="bindCancel"
						></ruiDatePicker>
						<ruiDatePicker
						start="2010-04-25 08"
						end="2025-03-02 04"
						fields="second"
						:value="endTime"
						@change="bindChange1"
						@cancel="bindCancel1"
						></ruiDatePicker>
			</view>
			<view class="queryline">
				<input v-model="company" placeholder="按公司名称查询" class="companyinput"/>
				<button class="mini-btn" type="primary" size="mini" @click="get_list()">查询</button>
			</view>
		</view>
        <view class="data">
			<view class="itemlist" v-for="(item,index) in list" :key="item.id+item.create_time">
				<view class="itemlist-lt">{{list.length-index}}</view>
				<view class="itemlist-rt">
					<view class="itemlist-top">
						<view class="itemlist-top-tp">
							<text><text class="time">{{item.create_time}}</text></text>
							<text v-if="item.state==1||item.state==8" class="suretxt">{{item.state|state}}</text>
							<text v-else-if="item.state==2||item.state==9" class="successtxt">{{item.state|state}}</text>
							<text v-else-if="item.state==3||item.state==10" class="errortxt">{{item.state|state}}</text>
							<text v-else-if="item.state==4||item.state==11" class="warntxt">{{item.state|state}}</text>
							<text v-else class="overtxt">{{item.state|state}}</text>
						</view>
						<view class="itemlist-top-tb">
							<text class="companyname">{{item.company_name}}</text><text class="invoicenum" v-show="item.invoice_num!=null">发票号：{{item.invoice_num}}</text>
						</view>
						<!-- <view class="itemlist-top-tb" v-show="item.state==4||item.state==7||item.state==11||item.state==12">
							
						</view> -->
					</view>
					<view class="itemlist-bottom">
						<view>
							<text>发票种类：{{item.type==1?'普票':'专票'}}</text>
							<text class="descbtn" @click="detail(item)">查看详情>></text>
						</view>
						<view class="caozubtn">
							<text  @click="copy(item)">复制</text>
							<text @click="binddelbtn(item.id)">删除</text>
						</view>
						
						
					</view>
				</view>
			</view>
		</view>
	   <uni-load-more :status="status" :icon-size="16" :content-text="contentText"></uni-load-more>
	   </view>
	   <view class="nomore" v-else>
	   	<image src="../../static/image/nodata.png"></image>
	   </view>
	</view>
	
</template>

<script>
	import $ from '../../common/tsRequest.js'
    import liuyunoTabs from "../../components/liuyuno-tabs/liuyuno-tabs.vue";
	import ruiDatePicker from '@/components/rattenking-dtpicker/rattenking-dtpicker.vue';
	export default {
		components: {
	        liuyunoTabs,
			ruiDatePicker
		},
		filters: {
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
		data() {
			return {
				startTime: '请选择开始时间',
				endTime: '请选择结束时间',
				activeIndex: 0,
				page:1,
				tabs: [
					{
						state: '',
						name: '全部',
					},
					{
						state: 1,
						name: '待审核'
					},
					{
						state: 2,
						name: '已通过'
					},
					{
						state: 3,
						name: '未通过'
					},
					{
						state: 4,
						name: '配送中'
					},
					{
						state: 5,
						name: '异常单'
					},
					{
						state: 6,
						name: '退单'
					},
					{
						state: 999,
						name: '换单'
					},
					{
						state: 7,
						name: '已完成'
					}

				],
				list:[],
				// 下拉状态
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				// 下一页链接
				next_url: false,
				company:''
				
			}
		},
		onLoad() {
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
		mounted(){
			this.get_list()
		},
		onPullDownRefresh() {
			// 下拉刷新
			// 清空数据
			console.log(' 下拉刷新')
			this.list = []
			// 下一页链接置为false,代表第一次获取数据
			this.next_url = false
			// 开始获取数据
		
		},
		onReachBottom() {
			// 获取更多数据,
			this.status = 'more';
			console.log(' 获取更多数据')
			this.get_list()
		},
		methods: {
			copy(obj){
				console.log(obj)
				uni.navigateTo({
					url: '/pages/again/index?id='+obj.id+'&state='+obj.state+'&type='+obj.type,
				});
			},
			//详情
			detail(obj){
				console.log(obj)
				if(obj.state==4){
					uni.navigateTo({
						url: '/pages/logisticsinfo/index?id='+obj.id+'&state='+obj.state+'&num='+obj.logistics_num+'&type='+obj.type,
					});
				}else if(obj.state==8||obj.state==9||obj.state==10||obj.state==11||obj.state==12){
					uni.navigateTo({
						url: '/pages/changehistory/index?id='+obj.id+'&state='+obj.state+'&num='+obj.logistics_num+'&type='+obj.type,
					});
				}else{
					uni.navigateTo({
						url: '/pages/info/index?id='+obj.id+'&state='+obj.state+'&type='+obj.type,
					});
					
				}
			  
			},
			//删除发票
			binddelbtn(id){
				console.log(id)
				let obj={
					id
				}
				$.post('/erp/invoice/delete',obj).then(res=>{
					console.log(res)
					if(res.code==0){
						uni.showToast({
							title: "删除成功!"
						});
						setTimeout(() => {
							window.location.reload()
						}, 1500)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			bindChange(e){
				console.log(e)
				this.startTime=e
			},
			bindCancel(e){
				console.log(e)
			},	
			bindChange1(e){
				this.endTime=e
				console.log(e)
			},
			bindCancel1(e){
				console.log(e)
			},
			tabClick(index, name) {
				// 点击的index
				console.log(index, name,this.tabs[index]);
				this.activeIndex=index
				this.page=1
				// 获取点击的数据
			},
			get_list: function() {
				// 请求提交的参数
				let data={
					openid:this.openid,
					page: this.page,
					limit: 5,
					state:this.activeIndex==0?'':this.activeIndex
				}
				    let t = this;
					let url = "/erp/invoice/page";
					let params =data;
					$.post(url,params).then(res =>{
						console.log(res)
						if(this.page>1){
							if(res.code==0&&res.data.data.length==0){
								this.status='nomore'
							}else if(res.data.data.length<5){
								this.status='nomore'
								this.list=this.list.concat(res.data.data)
								this.page=this.page+1
								return false
							}else{
								this.list=this.list.concat(res.data.data)
								this.page=this.page+1
							}
						}else{
							if(res.code==0&&res.data.data.length==0){
								this.status='nomore'
								this.list=[]
								this.page=this.page+1
							}else if(res.code==0&&res.data.data.length>=5){
								this.list=res.data.data
								this.page=this.page+1
							}else{
								this.list=res.data.data
								this.status='nomore'
							}
						}
						
					}).catch(err =>{
						console.log(err)
					})
	

			
			}
			
		}
	}
</script>

<style lang="scss">
	.tabs {
		background-color: #fff;
	}
	.container .choosebtn .statebtn{
	    display: inline-block;
	    width: 60px;
	    height: 32px;
	    border: 1px solid #ccc;
	    text-align: center;
	    border-radius: 15px;
	    font-size: 13px;
	    margin-right: 10px;
	}
	.nomore image{
		width: 100%;
		margin: 200px 0;
	}
	
	.searchTime{
		display: flex;
		border-bottom: 1px solid #dedede;
		margin-bottom: 1px;
	}
	.queryline {
		display: flex;
		color: #000;
		border-bottom: 1px solid #dedede;
		margin-bottom: 1px;
		.uni-input-placeholder {
		   color: #000!important;
		}
		input{
			width: 50% !important;
			height: 10vw;
			padding-left: 12px;
			box-sizing: border-box;
			background: #fff;
			font-size: 14px;
			border: none;
			border-left: none;
			color: #000;
			
		}
		button{
			width: 48%;
		}
	}
	.uni-easyinput{
		width: 60%!important;
	}
	.rui-picker{
		width: 50%!important;
		background: #fff;
		font-size: 14px;
		border:none;
		
	}
	.rui-picker:last-child{
		width: 50%!important;
		background: #fff;
		font-size: 14px;
		border:none;
		border-left: none;
	}
	.data{
	    box-sizing: border-box;
		.itemlist{
			background: url(../../static/image/card.png) no-repeat center;
			background-size:100% 100%;
			margin-bottom: 10upx;
			height: auto;
			width: 100%;
			position: relative;
			display: flex;
			flex-direction: row;
			padding-right:30upx;
			box-sizing: border-box;
			font-size: 14px;
			.itemlist-lt{
				 width:16%;
				 text-align: center;
				 height: auto;
				 display: flex;
				 align-items: center;
				 justify-content: center;
			}
			.itemlist-rt{
				 width:84%;
				 display: flex;
				 flex-direction: column;
				  height: auto;
				  color: $uni-text-color-grey;
				.itemlist-top{
					height: auto;
					display: flex;
					justify-content: space-between;
					flex-direction: column;
					.itemlist-top-tp{
						display: flex;
						justify-content: space-between;
						height: 96upx;
						align-items: center;
						.time{
							 color: #1b4cef;
							font-size: 16px;
						}
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
					.itemlist-top-tb{
						height: 60upx;
						align-items: flex-start;
						display: flex;
						justify-content: space-between;
						.companyname{
							display: inline-block;
							width: 340upx;
							overflow: hidden;/*超出部分隐藏*/
							white-space: nowrap;/*不换行*/
							text-overflow:ellipsis;/*超出部分文字以...显示*/
						}
					}
				}
				
				.itemlist-bottom{
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					height: 72upx;
					.descbtn{
						margin-left: 15px;
						color: #1B4CEF;
					
					}
					.caozubtn{
						background:#CCDEFF;
						width:142upx;
						height: 44upx;
						
						border-radius: 15upx;
						text{
							display: inline-block;
							width:70upx;
							height: 32upx;
							font-size: 12px;
							line-height: 32upx;
							text-align:center;
							color: #1B4CEF;
							
						}
						text:first-child{
							border-right: 1px #333333 dashed;
						}
					}
				}
			}
		
		}
	
	}
</style>
