<template>
	<view class="container">
		<view class="header">
			<view class="header-li" :style="{width:navLength+'%'}" v-for="(item,index) in dataList" :key="index" :class="[index==2 ? selected : '']">
				{{item}}
			</view>
		</view>
		<view class="content">
			<view>
				<text class="title">{{title}}</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				dataList:['推荐','数码电器','鞋包','零食'],
				selected:'selected'
			}
		},
		computed:{
			navLength:function(){
				return 100/this.dataList.length;
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
	}
	.content {
		text-align: center;
		height: 400upx;
	}
	.header{
		height:60px;
		background: linear-gradient( 135deg, #F97794 10%, #623AA2 100%);
		display: flex;
	}
	.header-li{
		height: 60px;
		text-align: center;
		display: flex;
	    align-items: center;         
	    justify-content: center;
	    flex-direction: column;	
		font-size: 14px;
		color:#fff;
	}
	.selected{
		background-color: rgba(249,202,221,1);
	}
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
