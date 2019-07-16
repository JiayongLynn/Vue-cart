<template>
	<view class="head">
		<view class="header-li" :style="{width:navLength+'%'}" v-for="(item,index) in alist" :key="index" :class="{selected:index==current}" @click="navigateto(item.path,index)">
				{{item.data}}
		</view>
	</view>
</template>

<script>
export default {
    name: 'header',
    props:['ItemList'],
	data(){
		return{
			current:0,
			alist:this.ItemList,
			selected:'selected'
		}
	},
	computed:{
		navLength:function(){
			return 100/this.alist.length;
		}
	},
	methods: {
		navigateto(path,index){
			this.current = index;
			uni.navigateTo({
				url: path
			});
		}
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
