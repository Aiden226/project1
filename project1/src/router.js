
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/Newslist.vue'
import NewsInfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
    routes: [
        {path:'/',component:HomeContainer},
        {path:'/home',component:HomeContainer},
        {path:'/member',component: MemberContainer},
        {path:'/shopcar',component:SearchContainer},
        {path:'/search',component:ShopcarContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo}
    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类，默认的类叫做“router-active”
})

export default router