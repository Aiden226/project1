//入口文件
import Vue from 'vue'

// 导入mui的样式
import './lib/mui/css/mui.min.css'

// 按需导入mint-ui的组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import app from './App.vue'

var vm = new Vue ({
    el: '#app',
    render:c =>c(app)
})