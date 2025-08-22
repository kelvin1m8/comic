# Comic Website

## 项目简介
这是一个简约大气风格的漫画网站项目，支持用户上传漫画图片，并为每个漫画作品提供独立的网页展示。

## 功能
- 用户可以上传漫画图片。
- 每个漫画作品都有独立的详细页面。
- 网站主页展示所有漫画的缩略图和链接。

## 项目结构
```
comic-website
├── src
│   ├── app.ts                     # 应用程序入口点
│   ├── controllers
│   │   └── comicController.ts     # 处理漫画相关逻辑
│   ├── routes
│   │   └── comicRoutes.ts         # 设置漫画路由
│   ├── views
│   │   ├── index.html             # 网站主页
│   │   └── comic.html             # 单个漫画详细页面
│   ├── public
│   │   ├── css
│   │   │   └── style.css          # 网站样式
│   │   └── js
│   │       └── main.js            # 前端 JavaScript 代码
│   ├── uploads
│   │   └── .gitkeep               # 保持 uploads 目录存在
│   └── types
│       └── index.ts               # 定义类型
├── package.json                   # npm 配置文件
├── tsconfig.json                  # TypeScript 配置文件
└── README.md                      # 项目文档
```

## 使用方法
1. 克隆项目到本地：
   ```
   git clone <repository-url>
   ```
2. 安装依赖：
   ```
   npm install
   ```
3. 启动应用：
   ```
   npm start
   ```
4. 在浏览器中访问 `http://localhost:3000` 查看网站。

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
本项目采用 MIT 许可证。