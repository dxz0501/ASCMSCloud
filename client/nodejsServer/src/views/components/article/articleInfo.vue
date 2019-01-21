<template>
    <div class="articleInfo">
         <div class="article-info-main">
             <div class="article-info-main-img">
                <img :src="this.item.content_img" style="height:375px;width:600px"/>
            </div> 
            <div class="article-info-main-title">
                <span>{{this.item.title}}</span>
            </div> 
            <div class="article-info-main-author">
                <img :src="this.item.author_img" style="height:20px;width:20px"/>
                <span>{{this.item.author}}</span>
            </div> 
            <div class="article-info-main-content">
                {{this.item.info}}
            </div>
         </div>    
    </div>    
</template>

<script>
    export default{
        data(){
            return{
                item:{},
            }
        },
        created(){
            this.item = this.$route.params.item; //接收路由传递参数
            console.log(this.item);
        }
    }
</script>

<style>
.articleInfo{
    width: 600px;
    border-left: 1px gray solid;
    border-right: 1px gray solid;
    margin:0 auto;
    height: auto;
}
.article-info-main{
    margin:0;
}
.article-info-main-img{
    width: 600px;
    height: 375px;
    margin: 0 auto;
}
.article-info-main-title{
    height: 80px;
    font-size: 20px;
    font-weight: bolder;
    color: mediumseagreen;
    line-height: 80px;
    text-align: center;
}
.article-info-main-author{
    height: 22px;
    font-size: 16px;
    font-family: 'Helvetica Neue',Helvetica,Arial,Sans-serif;
    width: 520px;
    padding-left: 30px;
    color:#444;
    margin: 0 auto;
}
.article-info-main-content{
    font-size: 15px;
    color:black;
    padding-left: 10px;
    padding-right: 10px;
}
</style>
