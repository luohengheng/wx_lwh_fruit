## 介绍
首先这是一个后台由egg开发的，前台目前包括微信小程序，后期会分别加上vue, react 版本的后台管理系统

项目主要还是为了练习当前叙述的这些技术，有出现bug希望多多指出
这个项目是一个开发水果商城的一个系统

## 界面
1. 引导页
2. home水果展示页
  1. 消息通知
  2. 轮播图展示
  3. 商品推荐
3. 水果推荐页面
  1. 水果商品信息详情页
    1. 加入商品选择数量组件
    2. 加入商品数量展示组件
4. 购物车页面
  1. 加入物品详情组件
  2. 晚上向左滑动删除，单选全选，查看物品详情
  3. 提交订单
5. 个人信息页
  1. 获取个人微信信息
    1. 微信信息持久化
    
## 效果
![img](https://github.com/luohengheng/wx_lwh_fruit/tree/master/readme/1.gif)
![img](https://github.com/luohengheng/wx_lwh_fruit/tree/master/readme/2.gif)
![img](https://github.com/luohengheng/wx_lwh_fruit/tree/master/readme/3.gif)
![img](https://github.com/luohengheng/wx_lwh_fruit/tree/master/readme/4.gif)

## 其他
1. 网络数据请求二次分装， 使用async await
2. 网络请求报错拦截
3. 项目组件化开发
4. http请求封装
