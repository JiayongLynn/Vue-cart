<template>
	<view class="container">
		<my-header @changeData='changeList'></my-header>
		<product-list :dataList='productData' @add='addCart'></product-list>
	</view>
</template>

<script>
	import header from "../../components/header.vue"
	import productlist from "../../components/productList.vue"
	export default {
		data() {
			return {
				title: 'Hello',
				dataList:[],
				productData:[],
			}
		},
		components: {
			'myHeader':header,
			'productList':productlist
	    },
		onLoad() {
			uni.request({
				url: 'http://api.apiato.test/v1/product', 
				success: (res) => {
					this.productData=res.data.data;
				}
			});
			
		},
		methods:{
			changeList(ret){
				this.productData = ret;
			},
			addCart(value,num){
				if(num<=0){
					uni.showToast({
						title: '该商品库存不足,请选购其他商品',
						mask:true,
						duration: 2000,
						image:'../../static/image/cry.png'
					});
					return;
				}
				uni.request({
					url:'http://api.apiato.test/v1/cart',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					data:{
						'product_id':value,
						'user_id':3
					}
				})
			}
		}
	
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
	
</style>
