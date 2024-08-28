
# yyue

## 核心依赖版本

- node: 20以上
- react: 18以上
- next: 14.0.1

## 项目入口
Y阅在以下项目中有入口，上线时需要注意
yycom首页
yycom直播间 焦点资讯
个人页-新闻
Y阅后台 文章发布后的查看按钮
PCYY - 个人资料 - Y阅图标

## 服务治理相关配置
### 镜像配置
发布中心 -> 镜像管理 -> 编辑 -> 基本设置
```bash
# 启动命令
/bin/bash /data/services/##{.PKG_NAME}##/aquaman/start.sh && /bin/bash /data/scripts/run.sh
# 高级配置-初始化脚本
cd /data/services/##{.PKG_NAME}##/aquaman && sh init.sh
# 高级配置-DockerFile
RUN cd /data/services/##{.PKG_NAME}##/aquaman && sh install.sh
# 包信息 - 基础镜像
yyl-next:14.0.5
```

## 环境信息
### host
参考 [这里](http://fet.yy.com/develop/use-same-host/#yycom-%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83)

### 访问地址

* 正式环境 [http://yylive-ssr.yy.com/yyue/](http://yylive-ssr.yy.com/yyue/)
* 测试环境 [http://yylive-ssr-test.yy.com/yyue/](http://yylive-ssr-test.yy.com/yyue/)

### git 地址
* [https://git.yy.com/webs/web_static/yyue](https://git.yy.com/webs/web_static/yyue)

### 发布入口
* [http://s.sysop.duowan.com/service/list](http://s.sysop.duowan.com/service/list)


### 相关命令
```
# 本地开发
yarn dev

# 生产环境编译
yarn build

# 测试环境编译
yarn build:dev

# ssr 启动
yarn start

# 格式化
yarn prettier
```
# 本地开发

## 浏览器访问入口

http://127.0.0.1:3000/yue

## 服务端chrome调试

`node --inspect ./output/server/index.js`

需要设置代理或host
