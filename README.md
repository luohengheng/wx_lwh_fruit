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
![img](http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=gif&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1708456121,4044353785&os=797548221,1281624786&simid=4217170431,728251388&pn=1&rn=1&di=49060&ln=1811&fr=&fmq=1577694902186_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F357d23d074c2954d568d1a6f86a5be09d190a45116e95-0jh9Pg_fw658&rpstart=0&rpnum=0&adpicid=0&force=undefined)
![img](https://github.com/luohengheng/wx_lwh_fruit/tree/master/images/gif/2.gif)
![img](https://github.com/luohengheng/wx_lwh_fruit/tree/master/images/gif/3.gif)
![img](https://github.com/luohengheng/wx_lwh_fruit/tree/master/images/gif/4.gif)

## 其他
1. 网络数据请求二次分装， 使用async await
2. 网络请求报错拦截
3. 项目组件化开发
4. http请求封装
