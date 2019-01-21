<template>
	<!--百分比屏幕自适应-->
	<div style="margin: 0 auto;height: 100%">
		<!--<m-header></m-header> 去掉header-->
		<router-view></router-view>
	</div>
</template>

<script>
	import MHeader from './layout/header.vue'
	import MFooter from './layout/footer.vue'
	export default{
		components:{
			MHeader,
			MFooter,
		}
	}
</script>

<style>
	body{
		color: blue;
	}
</style>