<template>
    <div class="article-main">
        <div class="article-left">
            <div class="article-title">
                <span @click="toArticleInfo">{{item.title}}</span>
            </div>
            <!--<div class="article-info">
                {{item.info}}
            </div> -->
        </div>
        <div class="article-right">
            <div class="article-pic">
                <img :src="item.img" style="height:80px;width:60px"/>
            </div>
        </div>   
    </div>
</template>

<script>
import ArticleInfo from './articleInfo.vue'
    export default{
        props:['item'],
        components:{
            ArticleInfo
        },
        data(){
            return{

            }
        },
        methods:{
            toArticleInfo(){
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

<style>
.article-main{
    height:100px;
    border-bottom: 1px gray solid;
}
.article-left{
    width: 1000px;
    height:100px;
    float: left;
}
.article-right{
    height:100px;
    width: 80px;
    float: right;
}
.article-title{
    height: 60px;
    font-size: 20px;
    font-weight: bolder;
    color: mediumseagreen;
    line-height: 60px;
    padding-left: 80px;
}
.article-info{
    height: 30px;
    font-size: 13px;
    color:grey;
    line-height: 30px;
    padding-left: 80px;
}
</style>
