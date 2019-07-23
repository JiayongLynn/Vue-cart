<template>
	<view class="container">
		<view class="cartlist">
				<view v-for="(item,index) in cart" :key="index" class="list">
					<view class="product_thumb">
								<image :src='item.product.image_path' mode="widthFix" class="thumbimage"></image>
							</view>
							<view class="product_info">
								<view class="product_title">{{item.product.product_name}}</view>
								<view style="bottom: 0;position: absolute;display: inline-block;">
									<view class="product_price">
										￥{{item.product.price}}
									</view>
									<view style="color: #888;font-size: 12px;">
										库存:{{item.product.sku_num}}
									</view>
							</view>
							<view class="goods-num">
								<view class="num-btn btn-add">
								</view>
								<view class="show-num">
									{{item.count}}
								</view>
								<view class="num-btn btn-cut">
								</view>
							</view>
					</view>
				</view>
		</view>
	
				
		<view class="bottom">
			<view :class="[radiocheckbox,{'toggle-active':isSelect}]"  @click='allselect'></view>
			<view class="allselcet">
				全选
			</view>
			<view class="total-price">
				合计:￥0
			</view>
			<view class="paybtn">
				去结算(0)
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'cart',
		data:function() {
			return{
				radiocheckbox:'radiocheckbox',
				isSelect:false,
				cart:[]
			}
				
		},
		components: {
			
	    },
		onLoad() {
			uni.request({
				url: 'http://api.apiato.test/v1/cart', 
				success: (res) => {
					this.GlOBAL.setMessageAction(res.data.data);
					this.cart = res.data.data;
				}
			});
		},
		methods:{
			allselect:function () {
				this.isSelect = !this.isSelect;
			}
		},
		// watch:{
		// 	a:function(n,o){
		// 		this.cart=n;
		// 	}
		//  }
	}
</script>

<style>
	body{
		background-color:#eee;
	}
	.bottom {
		position:fixed; 
		bottom:0; 
		height:52px;
		background:#fff;
		width: 100%;
	}
	 .radiocheckbox{
        width: 38px;
        height:52px;
        float: left;
        /* padding-bottom:5px; */
        cursor: pointer;
        text-align: center;
        /* margin-right: 10px; */
        background-image: url('../../static/image/select.png');
        background-repeat: no-repeat;
        display: inline-block;
        background-position: center;
    }
	.allselcet{
		font-size: 16px;
		font-weight: bold;
		height: 100%;
		line-height:52px;
		position:fixed; 
		display: inline-block;
	}
	.toggle-active{
	    background-image: url('../../static/image/selected.png');
		 background-repeat: no-repeat;
	}
	.total-price{
		display: inline-block;
		font-size: 16px;
		font-weight: bold;
		margin-left:25%;
		line-height:52px;
		position:fixed; 

		height: 100%;
	}
	.paybtn{
		display: inline-block;
		width:120px;
		text-align: center;
		height: 100%;
		background: #623AA2;
		position:fixed; 
		right:0; 
		line-height:52px;
		font-size: 16px;
		color: #FFFFFF;
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
	.goods-num{
		display:inline-block;
		position:absolute;
		top:12%;
		right: 0;
		text-align: center;
	}
	.num-btn{
	    width:30px;
		height:30px;
		cursor: pointer;
		text-align: center;
	}
	.btn-add{
		background-image: url('../../static/image/+.png');
	}
	.btn-cut{
		background-image: url('../../static/image/-.png');
	}
</style>
