<template>
    <div class="photoinfo-container">
        <h3>{{  photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{  photoinfo.add_time | dataFormat }} </span>
            <span>点击次数：{{  photoinfo.click }}次</span>
        </p>
        <hr>

        <!-- <img class="preview-img" v-for="(item,i) in list" :key="item.src" src="item.src" height="100" 
        @click="$preview.open(i,list)"> -->
        <div class="thumbs">
            <vue-preview :slides="list" @click="handleClose"></vue-preview>
        </div>

        <div class="content" v-html="photoinfo.content">

        </div>     
            <!-- 放置一个现成的子组件 --> 
        <cmt-box :id="id"></cmt-box>

    </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from '../subcomponents/Comment.vue'
export default {
    data(){
        return{
            id: this.$route.params.id,
            photoinfo: {},
            list: []

        }
    },
    created() {
        this.getPhotoInfo()
        this.getThumbs()
    },
    methods: {
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result =>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0];
                }else{
                     Toast("获取数据失败");
                }
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/' + this.id).then(result =>{
                if(result.body.status === 0){
                    result.body.message.forEach(item =>{
                        item.w = 600;
                        item.h = 400;
                        item.msrc = item.src;
                    })
                    this.list = result.body.message;
                }else{
                    Toast("获取图片失败！")
                }
            })
        },
        handleClose(){
            console.log("close event");
        }
    },
    components: {
        'cmt-box':comment
    }
}
</script>

<style lang="scss">
    .photoinfo-container{
       padding: 3px;
       h3 {
           font-size: 15px;
           color: #26A3FF;
           text-align: center;
           margin: 15px 0;
       }
       .subtitle {
           display: flex;
           justify-content: space-between;
           font-size: 13px;
       }
       .content {
           font-size: 13px;
           line-height: 30px;
       }
       .thumbs{
           .my-gallery{
               display: flex;
           flex-wrap: wrap;
           figure{
               width: 30%;
               margin: 5px;
               img{
                   width: 100%;
                   box-shadow: 0 0 8px #999;
                   border-radius: 5px;
               }
           }
           }
       }
    }
</style>