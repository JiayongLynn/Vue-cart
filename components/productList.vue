<template>
	<view class="product_list">
			<view  class="list"  v-for="(item,index) in productList" :key="index" >
				<view class="product_thumb">
					<image :src='item.image_path' mode="widthFix" class="thumbimage"></image>
				</view>
				<view class="product_info">
					<view class="product_title">{{item.product_name}}</view>
					<view style="bottom: 0;position: absolute;">
						<view class="product_price">
							￥{{item.price}}
						</view>
						<view style="color: #888;font-size: 12px;">
							{{item.sale_count}}人付款
						</view>
					</view>
				</view>
				<button class="addbtn" size="mini" @click="$emit('add',item.id,item.sku_num)">+</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'productlist',
		props:['dataList'],
		data() {
			return {
				productList:[]
			};
		}, 
		watch:{
			dataList :function(n ,o){
				this.productList=n;
			}
		 }
	}
</script>

<style scoped>
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
		width:100px;
		height:100px;
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
		margin-top:5px;
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
		cursor: pointer;

	}
</style>
