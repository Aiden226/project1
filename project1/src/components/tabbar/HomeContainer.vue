<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
          <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
<!-- 九宫格到六宫格的改造 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <img src="../../images/memu.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../images/memu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../../images/memu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/memu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/memu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/memu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            lunbotuList:[]
        }
    },
    created() {
        this.getLunbotu();
    },
    methods: {
        getLunbotu(){
            this.$http.get('api/getlunbo').then(result =>{
                // console.log(result.body)
                if(result.body.status === 0 ){
                    this.lunbotuList = result.body.message
                    // Toast("加载ok")
                }else{
                    Toast("加载失败")
                }


            })
        }
    },

};
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item:nth-child(1) {
        background-color: red
    }
    .mint-swipe-item:nth-child(2) {
        background-color: yellow
    }
    .mint-swipe-item:nth-child(3) {
        background-color: cyan
    }
    .mint-swipe-item {
        img {
            width: 100%;
            height: 100%;
        }
    }
}

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    img {
        width: 60px;
        height: 60px;
    }
    .mui-media-body {
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: none;
    border-bottom: none;
}

</style>