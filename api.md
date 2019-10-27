LWH 水果店小程序接口文档

```js
baseUrl: https://www.luowenhao.club

```
# 1. 首页
## 1.1 首页-特别推荐接口

    - 路径： /getHomeBanner

    - 数据返回：举例：
```js

  {
    code: "S10000",
    data: {
      data: [
        {
          cur_price: "30", // 活动价
          fid: "fe7cb360-e00e-11e9-9be7-412ee55a72ca", // id
          introduce: "introduce测试", // 描述
          md5_name: "401f6b760d3eff1ca83d56ab2e7426d4.jpg", // 图片路径 后续要改
          name: "name测试2", // 产品名称
          price: "100", // 价格
          sold_nums: "0", // 已卖数量
          star_rate: "0", // 获得星数

          // 少字段： 
          // 库存数量
          storeNum: '',
        }
      ]
    },
    msg: "",
    status: 200
  }
```


 

## 界面
 
