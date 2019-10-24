//入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

import moment from 'moment'

Vue.filter('dataFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'

// 导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui的组件
import { Header,Swipe, SwipeItem,Button } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//导入自己的router.js模块
import router from './router.js'

import app from './App.vue'

var vm = new Vue ({
    el: '#app',
    render:c =>c(app),
    router
})