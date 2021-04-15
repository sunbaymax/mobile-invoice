<template>
	<view>
		<view style="display: flex;width: 100%;text-align: center;">
			<view v-for="(i, index) in list" :key="index" @click="changeys(index)" :class="['w_25', changeid == index + 1 ? 'yscss' : 'w_25']">{{ i }}</view>
		</view>
		<!-- <view v-if="changeid==1" >
			<view>
				<input v-model="money" type="text" value="" style="border: 1px solid #007AFF;"  />
			</view>
			<view>
				<text>{{money}}</text>
			</view>
		</view> -->
		<view v-if="changeid == 1">
			<!-- <view style="display: flex;justify-content: space-between;">
				<view>暑假卡</view>
				<view @click="xq2">剩余2次 <uni-icons type="arrowdown"></uni-icons></view>
			</view>
			<view v-if="showxq2">
				11
			</view> -->
			<view>
			</view>
			<view>
				<radio-group @change="radioChange" style="display: flex;flex-direction: column;line-height: 100rpx ;">
					<label v-for="(item, index) in items" :key="item.value">
						<radio :value="item.value" :checked="index === current" />
						<text>{{item.name}}</text>
					</label>
				</radio-group>
			</view>
			
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			current: 0,
			list: ['a', 'b', 'c', 'd'],
			changeid: 1,
			money: 0,
			showxq2: false,
			items: [
				{
					value: 'aa',
					name: 'A卡'
				},
				{
					value: 'bb',
					name: 'B卡',
					checked: 'true'
				},
				{
					value: 'cc',
					name: 'C卡'
				}
			]
		};
	},
	methods: {
		radioChange: function(evt) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}
		},
		changeys(index) {
			this.changeid = index + 1;
		},
		xq2() {
			if (this.showxq2 == false) {
				this.showxq2 = true;
			} else {
				this.showxq2 = false;
			}
		}
	}
};
</script>

<style>
.w_25 {
	width: 25%;
}
.yscss {
	border-bottom: 2px solid #007aff;
}
</style>


