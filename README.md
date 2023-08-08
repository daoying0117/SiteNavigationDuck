# 爪哇导航鸭

一个基于nuxt3 + vue3 + Navie UI简洁干净可自定义的导航网站!!!
网站主题跟随浏览器主题变化.
采用服务端渲染技术是访问更加流畅,且所有数据都保存在本地,更加安全且隐私(不过清除网站缓存的时候要注意别给删了!!!)

## 预览
![](../public/img/16914863037227.jpg)

![](../public/img/16914863283244.jpg)

![](../public/img/16914863478166.jpg)

[爪哇导航鸭](https://www.zyp.ink)
可以访问这个网址体验一下QAQ
## 安装
本项目需要nodejs环境,且Node.js版本大于`v16.0.0`(Nuxt3最低node兼容版本)

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## 开发

启动开发服务器 `http://localhost:8080`:
可以在nuxt.config.ts中修改devServer:port 来更改启动端口

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## 构建

构建生产应用程序:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

## 部署
build后进入.output文件夹:
```bash
 # node ./server/index.mjs &
```
或者使用pm2启动
