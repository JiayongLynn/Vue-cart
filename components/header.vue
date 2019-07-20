<template>
	<view class="head">
		<view class="header-li" :style="{width:navLength+'%'}" v-for="(item,index) in alist" :key="index" :class="{selected:index==current}" @click="switchType(item.path,index)">
				{{item.type_name}}
		</view>
	</view>
</template>

<script>
export default {
    name: 'header',
	data(){
		return{
			current:0,
			alist:[],
			selected:'selected'
		}
	},
	computed:{
		navLength:function(){
			return 100/this.alist.length;
		}
	},
	methods: {
		switchType(path,index){
			this.current = index;
			uni.request({
				// url: 'http://www.phalapi.com/?s=Product.GetInfo&type='+path, 
				url: 'http://api.apiato.test/v1/product?type='+path, 
				success: (res) => {
					this.$emit('changeData',res.data.data);
				}
			})
		}
	},
	mounted() {
		uni.request({
			url: 'http://api.apiato.test/v1/type/product', 
			success: (res) => {
				this.alist=res.data.data;
			}
		});
	}
}
</script>

<style scoped>
	.head{
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
		background-color: rgba(249,202,221,0.8);
	}
</style>
