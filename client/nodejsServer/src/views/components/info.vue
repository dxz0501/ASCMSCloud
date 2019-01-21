<template>
	<div class="info">
        <div class="info-nav">
            <div @click="ClickDataList" style="float:left"><i class="el-icon-tickets" style="line-height:30px;"></i></div>
            <div @click="ClickBoard1" style="float:left"><i class="el-icon-menu" style="line-height:30px;"></i></div>
            <div @click="ClickBoard2" style="float:left"><i class="el-icon-news" style="line-height:30px;"></i></div>
            <div @click="ClickBoard3" style="float:left"><i class="el-icon-location" style="line-height:30px;"></i></div>
            <div @click="ClickBoard4" style="float:left"><i class="el-icon-message" style="line-height:30px;"></i></div>
            <div class="info-nav-2"></div>
        </div>
        <div class="dataList" v-if="dataListFlag"></div>
        <div class="board1" v-if="board1Flag"></div>
        <div class="board2" v-if="board2Flag"></div>
        <div class="board3" v-if="board3Flag"></div>
        <div class="board4" v-if="board4Flag"></div>
	</div>
</template>

<script>
	export default{
		components:{
			
        },
        data(){
            return {
                dataListFlag: true,
                board1Flag: false,
                board2Flag: false,
                board3Flag: false,
                board4Flag: false,
            }
        },
        methods:{
            ClickDataList(){
                this.dataListFlag = true;
                this.board1Flag = false;
                this.board2Flag = false;
                this.board3Flag = false;
                this.board4Flag = false;
            },
            ClickBoard1(){
                this.board1Flag = true;
                this.dataListFlag = false;
                this.board2Flag = false;
                this.board3Flag = false;
                this.board4Flag = false;
            },
            ClickBoard2(){
                this.board2Flag = true;
                this.dataListFlag = false;
                this.board1Flag = false;
                this.board3Flag = false;
                this.board4Flag = false;
            },
            ClickBoard3(){
                this.board3Flag = true;
                this.dataListFlag = false;
                this.board1Flag = false;
                this.board2Flag = false;
                this.board4Flag = false;
            },
            ClickBoard4(){
                this.board4Flag = true;
                this.dataListFlag = false;
                this.board1Flag = false;
                this.board2Flag = false;
                this.board3Flag = false;
            },
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
.info{
    margin: 0 auto;
    height: 100%;
}
.info-nav{
    height: 30px;
    background-color: black;
}
.info-nav-2{
    width: 130px;
    height: 30px;
    float: right;
    background-image: url('../../assets/nav.png') ;
    background-size: cover;
}
.dataList{
    height: 100%;
    background-image: url('../../assets/pic_datalist.png') ;
    background-size: cover;
}
.board1{
    height: 100%;
    background-image: url('../../assets/pic_board1.png') ;
    background-size: cover;
}
.board2{
    height: 100%;
    background-image: url('../../assets/pic_board2.png') ;
    background-size: cover;
}
.board3{
    height: 100%;
    background-image: url('../../assets/pic_board3.png') ;
    background-size: cover;
}
.board4{
    height: 100%;
    background-image: url('../../assets/pic_board4.png') ;
    background-size: cover;
}
</style>
