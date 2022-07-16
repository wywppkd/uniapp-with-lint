```bash
.
├── README.md
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── index.html
├── sfc.d.ts
└── src
    ├── components # uniapp 公共组件
    ├── App.vue # 应用配置，用来配置App全局样式以及监听 应用生命周期
    ├── main.js # 入口文件
    ├── manifest.json
    ├── pages # 页面组件
    │   └── index
    │       └── index.vue
    ├── pages.json # 小程序pages.json文件
    ├── static # 不会被编译, 同 vue 的 public 目录
    └── uni.scss # uni-app内置的常用样式变量
```