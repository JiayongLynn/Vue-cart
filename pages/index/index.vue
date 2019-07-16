<template>
	<view class="container">
		<my-header :ItemList='dataList'></my-header>
		<view class="product_list">
			<view  class="list"  v-for="(item,index) in productList" :key="index" >
				<view class="product_thumb">
					<image :src='item.url' mode="widthFix" class="thumbimage"></image>
				</view>
				<view class="product_info">
					<view class="product_title">{{item.data}}</view>
					<view style="bottom: 0;position: absolute;">
						<view class="product_price">
							￥{{item.price}}
						</view>
						<view style="color: #888;font-size: 12px;">
							{{item.count}}人付款
						</view>
					</view>
				</view>
				<button class="addbtn" size="mini">+</button>
			</view>
		</view>
	</view>
	
</template>

<script>
	import header from "../../components/header.vue"
	// import productlist from "../../components/productList.vue"
	export default {
		data() {
			return {
				title: 'Hello',
				dataList:[{'path':'index','data':'推荐'},{'path':'index','data':'数码电器'},{'path':'index','data':'鞋包'},{'path':'index','data':'零食'}],
				productList:[{'url':'http://192.168.1.133/images/Goku.jpg','data':'高档自制新款男装晾衣架 2019新款爆款不好看不给钱只要8999997','price':'999','count':'14666'},
							{'url':'http://192.168.1.133/images/Goku.jpg','data':'iPhone XS','price':'999','count':'14666'},
							{'url':'http://192.168.1.133/images/Goku.jpg','data':'iPhone XR','price':'999','count':'14666'},
							{'url':'http://192.168.1.133/images/Goku.jpg','data':'iPhone8','price':'999','count':'14666'},
							{'url':'http://192.168.1.133/images/Goku.jpg','data':'iPhone X','price':'999','count':'14666'},
							],
			}
		},
		components: {
			'myHeader':header
	    },
		onLoad() {

		},
	
	}
</script>

<style>
	body{
		background-color:#eee;
	}
	.container{
		display: flex;
		flex-direction: column;
	}
	.content {
		text-align: center;
		height: 400upx;
	}
	
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.product_list{
		padding-top: 8px;
		display: flex;
		flex-direction: column;		
	}
	.list{
		background-color:#fff;
		margin-bottom:10px;
		display: flex;
		border-radius:7px;
		position: relative;

		/* height: 75px; */
	}
	.product_thumb{
		width:94px;
		height:94px;
		display: inline-block;
		position: relative;
	}
	.thumbimage{
		border-bottom-left-radius:7px;
		border-top-left-radius:7px;
		width:100%;
	}
	.product_info{
		display: inline-block;
		width:65%;
		margin-left: 8px;
		position: relative;
		font-size: 16px;
		font-weight:400;
		padding-top:14rpx;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
	.product_title{
		width:100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.product_price{
		color: #E5007F;
	}
	.addbtn{
		position: absolute;
		right: 0;
		top:35%;
		background-color:#000;
		color: #FFFFFF;
	}
</style>
