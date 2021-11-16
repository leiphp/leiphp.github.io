<p align=center>
  <a href="http://www.100txy.com">
    <img src="./doc/images/gitee/favicon.jpeg" alt="小天社区" style="width:200px;height:200px">
  </a>
</p>
<p align=center>
   小天社区，一个基于golang微服务架构的前后端分离社区系统
</p>
<p align="center">
<a target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">
    	<img src="https://img.shields.io/hexpm/l/plug.svg" ></img>
		<img src="https://img.shields.io/badge/JDK-1.8+-green.svg" ></img>
        <img src="https://img.shields.io/badge/springboot-2.2.2.RELEASE-green" ></img>
<img src="https://img.shields.io/badge/SpringCloud-Hoxton.RELEASE-brightgreen" ></img><img src="https://img.shields.io/badge/vue-2.5.17-green" ></img>
<img src="https://img.shields.io/badge/swagger-2.6.1-green" ></img>
<img src="https://img.shields.io/badge/mybatis--plus-3.1.2-green" ></img></a></p>


## 站点演示

首先特别感谢阿里云提供的 [学生“在家实践” 计划](https://developer.aliyun.com/adc/student/?spm=a2c6h.14062461.J_7747362070.1.5b6933e1X3rvHS)，免费提供的6个月的2核4G 1M的服务器，所以就刚好以此用来做蘑菇博客的演示站点，同时我也在搭建的时候，顺便录制了一套视频：[利用阿里云免费服务器搭建个人博客](https://www.bilibili.com/video/BV1c5411b7EZ?t=17) ，感兴趣的小伙伴可以参考视频一起完成部署~

> 【演示前端】：http://demoweb.moguit.cn/
>
> 【演示后端】：http://demoadmin.moguit.cn/
>
> 【演示账号】：[点击获取](https://gitee.com/moxi159753/mogu_blog_v2/raw/Nacos/doc/images/qq/%E8%8E%B7%E5%8F%96%E6%BC%94%E7%A4%BA%E7%8E%AF%E5%A2%83%E8%B4%A6%E5%8F%B7.jpg)

## 项目地址

目前项目托管在Gitee和Github平台上中，欢迎大家star 和 fork 支持~

- Gitee地址：https://gitee.com/moxi159753/mogu_blog_v2
- Github地址：https://github.com/moxi624/mogu_blog_v2

##  运行配置

蘑菇博客使用了一些监控的Spring Cloud组件，但是并不一定都需要部署，必须启动的服务包含

`nacos`，`nginx`，`rabbitmq`， `redis`，`mysql`，`mogu-sms`，`mogu-picture`， `mogu-web`, `mogu-admin`

其它的服务都可以不启动，也不影正常使用，可以根据自身服务器配置来启动

最低配置：1核2G `需要开启虚拟内存`

推荐配置：2核4G【双十一特惠】

> 【阿里云】双十一拼团 2核4G3M 664元/3年（强烈推荐） [点我进入](http://a.aliyun.com/f1.l0DRK)
>
> 【阿里云】云服务器双11狂欢特惠，1核2G 最低仅需84.97元/年  [点我传送](https://www.aliyun.com/1111/home?userCode=w7aungxw)
>
> 【腾讯云】双十一活动2核4G 100G盘700元/3年（老用户重新用微信QQ注册即可） [点我进入](https://curl.qcloud.com/8Nfp3pRy)

## 关注&交流

**陌溪** 是一个从三本院校一路摸滚翻爬上来的程序员。目前就职于 **字节跳动的Data广告部门**，是字节跳动全线产品的商业变现研发团队。这两天创建了一个 **微信公众号【陌溪教你学编程】**，未来将会在公众号上持续性的输出很多原创小知识以及学习资源，欢迎各位小伙伴关注我，和我一起共同学习，同时我也希望各位小伙伴能够给**蘑菇博客**项目**多多 Star支持**，您的**点赞**就是我维护的动力！

|                 微信公众号【陌溪教你学编程】                 |                   微信群【陌溪教你学编程】                   |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://gitee.com/moxi159753/wx_picture/raw/master/picture/公众号.jpg" width="200" /> | <img src="https://gitee.com/moxi159753/wx_picture/raw/master/picture/微信群.png" width="200" /> |

刚刚创建了一个QQ群<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=88bc57d77601a3c5ae97fe6d9c0bfa25c2ae166d8f0b9f6da6f7294097be6d08"><img border="0" src="./doc/images/qq/group.png" alt="蘑菇博客交流群" title="蘑菇博客交流群"></a>，目前项目还存在很多不足之处，欢迎各位老哥进群进行技术交流，为了识别同行，防止广告进入，希望加群的时候能添加备注，谢谢~

|         ~~QQ群（备注：`蘑菇博客`）【群满】~~          |            QQ群（备注：`蘑菇博客`）【推荐】            |
| :---------------------------------------------------: | :----------------------------------------------------: |
| <img src="./doc/images/qq/qqGroup.png" width="200" /> | <img src="./doc/images/qq/qqGroup2.png" width="200" /> |

## 视频教程

特别感谢 [俺是程序狮](https://space.bilibili.com/277038643) 在B站上给蘑菇博客录制的视频教程，课程讲的非常细致，手把手带着开发博客系统，感兴趣的小伙伴可以去学习和支持一下~

- [项目介绍](https://www.bilibili.com/video/BV1Si4y1u7H4)
- [结构介绍与本地Nginx本地图片服务器启动](https://www.bilibili.com/video/BV1AA411e7W5)
- [mysql脚本准备](https://www.bilibili.com/video/BV1kv411v7ND)
- [后台服务启动](https://www.bilibili.com/video/BV1Nv411i7wu)
- [RabbitMQ启动](https://www.bilibili.com/video/BV1mD4y1U7GT)
- [前端项目启动](https://www.bilibili.com/video/BV1B541187Ez)
- [后台管理系统的前端工程结构介绍](https://www.bilibili.com/video/BV1D54y1U78F)
- [后台管理系统登录页](https://www.bilibili.com/video/BV1854y127d6)
- [后台管理系统登录页2](https://www.bilibili.com/video/BV1DD4y1d7Tx)
- [登录页请求处理](https://www.bilibili.com/video/BV1aT4y1w7Ux)
- [前端发起登录认证](https://www.bilibili.com/video/BV1Rp4y1Y7fj)
- [vuerouter路由配置](https://www.bilibili.com/video/BV14A411n72S)
- .....