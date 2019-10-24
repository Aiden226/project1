# 这是一个NB的项目

## 牛不牛逼，用心去感受，每一行代码中的诗情雅意

### 我们是有灵魂的程序员

#### 丫的编不下去了

## 用传统方法（命令）把修改后的代码传上码云？
1. git add .
2. git commit -m "提交信息"
3. git push

##制作完成APP组件
1. 完成Header 区域， 使用的是Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域， 使用的是 MUI 的 Tabbar.html 
 + 在制作购物车 小图标的时候 操作会相对多一些
 + 先把扩展图标的css样式拷贝到项目中
 + 拷贝 扩展字体库 ttf  文件到项目中
 + 为购物车小图标添加样式

3. 要在中间区域放置一个 router-view 展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 这只路由高亮

## 点击tabbar 中的路由链接，展示对应的路由组件

## 制作轮播图布局

## 加载首页轮播图数据
1. 获取数据，如何获取数据？ 使用vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到data身上
4. 使用 v-for 循环渲染 每个item 项

## 改造九宫格区域样式

## 新闻资讯 页面制作 
1. 绘制界面
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link，同时，在跳转的时候提供唯一的ID标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在 路由模块中，将新闻详情的 路由地址 和 组件页面对应起来

## 实现 新闻详情 的页面布局 和 数据渲染

## 单独封装一个comment.vue 评论子组件
1.先创建一个单独的 comment.vue组件模板
2.在需要使用 comment 组件的页面中，先手动导入 comment组件
 + `import comment from './comment.vue'`
3. 在父组件中，使用`component`属性，将刚才导入的 comment 组件，注册为自己的子组件
4. 将注册子组件时候的 注册名称，以标签形式，在页面中引用即可

## 实现点击加载更多评论功能
1. 为加载更多按钮，绑定点击事件，在事件中， 请求 下一页数据
2. 点击加载，让pageIndex++ 然后重新调用 this.getComment()方法重新获取最新一页的数据
3. 为了防止新数据覆盖老数据， 我们在 点击加载更多的时候，每当获取到新数据，应该让老数据调用 数组的 concat 方法，拼接上新数组

## 发表评论
1. 把文本框做双向的数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
4. 通过vue-resource 发送有一个请求 吧评论内容提交给服务器
5. 当发表评论ok后，重新刷新列表，以查看最新的评论
    +如果调用getcomments方法重新刷新评论列表的话，可能只能得到 最后一页的评论，前几页的评论获取不到
    +换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用 数组的unshift 方法，把最新的评论 追加到data 中 comment 的开头； 这样，完美实现刷新评论序列表的需求

## 改造图片分析 按钮为 路由的链接并显示对应的组件页面

## 绘制图片列表 组件 页面结构，并美化样式
1. 制作 顶部的滑动条
2. 制作 底部的图片列表

# 因项目的需要，采用了MUI的滚动事件（scroll），遇到了不少的问题，做个记录，方便以后查询。

## 问题一：引入MUI顶部滑动样式后，顶部滑动条全屏显示
```
<div id="slider" class="mui-slider mui-fullscreen">
  <div id="sliderSegmentedControl"
       class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
    <div class="mui-scroll">
      <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
        全部
      </a>
      <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
        家居生活
      </a>
      <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
        北京
      </a>
      <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
        社会
      </a>
      <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
        娱乐
      </a>
    </div>
  </div>
</div>
```
### 解决方案：查看官方文档，文档说明：区域滚动组件默认为absolute定位，全屏显示。所以你需要手动删掉全屏这个类，即 mui-fullscreen

## 问题二：没有滚动效果
### 解决方案：根据官方文档：若使用区域滚动组件，需手动初始化scroll控件，因此，在需要用到该滚动效果的组件中，引入mui.js文件，并初始化
```
import mui from '../../lib/mui/js/mui.js'; // 建了lib文件夹，存放mui相关文件
mui('.mui-scroll-wrapper').scroll({
deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```
## 问题三：初始化之后报错
### 控制台错误消息为：
```
caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them。
```
### 原因：webpack启用了严格模式，而MUI没有，所以两者冲突了。
### 解决方案：在.babelrc文件中加上：
```
"ignore": [
"./src/lib/mui/js/*.js"  // 建了lib文件夹，存放mui相关文件
]
```
### 另一种解决方法：该方法试过，出现另一种报错：export 'default' (imported as 'mui') was not found in '../../lib/mui/js/mui.js'。不知道是不是因人而异呢==，有朋友成功了而我的不行2333
```
1. 安装babel-plugin-transform-remove-strict-mode
cnpm i babel-plugin-transform-remove-strict-mode -D
2. 在.babelrc文件的plugins节点中配置：
"transform-remove-strict-mode"
```
## 问题四：终于可以滑动了，点击滑动报错：
### 控制台错误消息为：
```
Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080
```
### 解决方法：
```
* {
touch-action: pan-y;
}
2016年Google I/O上提出的概念，目的是用来提升页面滑动的流畅度。
```

## 问题五：顶部可以滑动之后，底部Tab不能切换
### 控制台错误消息为：
```
Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080
```
### 原因：
Tab样式（也是MUI的）与MUI的JS文件冲突，具体什么冲突不清楚，有兴趣可以看源码，我还晕乎乎的
解决方法：
找到Tab栏mui-tab-item的所有样式，复制一份，重新赋予新的样式类名，如mui-tab-item-my

## 问题六：刚进入页面无法滑动，要刷新之后方可滑动
原因：滑动时机不对，如前面代码显示的那样，在导入mui后就初始化滑动控件，此时，当重新进入页面时，组件的DOM结构还未渲染好，就初始化，自然不会有效果。
解决方法：放到mounted钩子函数中，在这个生命周期函数中，DOM结构已被渲染好，可以初始化滑动控件
```
mounted(){
  // 初始化滑动控件
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
}
```
## 制作图片列表区域
1. 图片列表需要使用懒加载技术，我们可以使用 Mint-ui 提供的现成组件 ‘lazy-load’
2. 根据`lazy-load`的使用文档，尝试使用
3. 渲染图片列表数据

## 实现了图片列表的 懒加载 改造和样式美化

## 实现了点击图片 跳转到 图片详情页面
1. 在改造 li 成 router-link 的时候，需要使用 tag 属性指定要渲染为 哪种元素

## 实现 详情页面的布局和美化，同时获取数据渲染页面

## 实现 图片详情中 缩略图的功能
1. 使用 插件 vue-preview 这个缩略图插件
2. 获取到所有的图片的列表，然后使用 v-for 指令渲染数据
3. 注意： img标签中的class 不能去掉
4. 注意：每个 图片上的数据对象中必须有 w 和 h

### 新的vue-preview 升级了 原有的做法会有bug

## 绘制 商品列表 页面基本结构 并美化