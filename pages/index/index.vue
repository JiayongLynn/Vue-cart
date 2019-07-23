<template>
	<view class="container">
		<my-header @changeData='changeList'></my-header>
		<product-list :dataList='productData' @add='addCart'></product-list>
	</view>
</template>

<script>
	import header from "../../components/header.vue"
	import productlist from "../../components/productList.vue"
	import CartList from "./cart.vue"
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
				// url: 'http://api.apiato.test/v1/product', 
				url: 'http://www.phalapi.com/?s=Product.getinfo', 
				success: (res) => {
					this.productData=res.data.data;
				}
			});
			uni.request({
				url: 'http://api.apiato.test/v1/cart', 
				success: (res) => {
					this.GlOBAL.setMessageAction(res.data.data);
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
				var cart = this.GlOBAL.state.list;
				var cartnew = this.GlOBAL;
				uni.request({
					url:'http://api.apiato.test/v1/cart',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					data:{
						'product_id':value,
						'user_id':3
					},
					success:res=>{
						console.log(res);
						if(res.data.status == 40000){
							uni.showToast({
								title: res.data.msg,
								mask:true,
								duration: 2000,
								image:'../../static/image/cry.png'
							});
							return;
						}
						var goods = res.data.data.product;
						var alreadyIndex = cart.findIndex(function (item, index) {
							return item.id == goods.id;
						});
						if(alreadyIndex==-1){
							var cartIndex = cart.length;
							// 添加新的商品，并初始化其数量、价格、被选中状态
							cart.unshift(goods);
						}else{
							// 如果商品已存在并且库存足够，数量加1
							var alreadyGoods = cart[alreadyIndex];
							var num = alreadyGoods.count,
							stock = alreadyGoods.sku_num;
							cartnew.changeListAction(alreadyIndex,++num);
						}
						var obj=this.productData.find(function (item) {
							return item.id == goods.id;
						});
						obj.sku_num--;
					},
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
