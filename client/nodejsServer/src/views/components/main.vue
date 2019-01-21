<template>
	<div class="main">
        <div class="login">
            <div class="login-area" @click="LoginIn">
            </div>
        </div>
	</div>
</template>

<script>
	export default{
		components:{
			
        },
        data(){
            return {
    
            }
        },
        methods:{
            LoginIn(){
                //路由跳转
                this.$router.push({
                    name:'info',
                    //只有name时传递参数才生效，path未生效
                    params:{ //路由传参数 
                        item:this.item,
                    }, 
                });

            }
        }
	}
</script>

<style lang="less">
.main{
    margin: 0 auto;
    height: 100%;
}
.login{
    height: 100%;
    background-image: url('../../assets/pic_login.png') ;
    background-size: cover;
}
.login-area{
    position: absolute;
    left: 55%;
    top: 40%;
    height: 300px;
    width: 400px;
    //sborder: 1px red solid;
}
</style>
