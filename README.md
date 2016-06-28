# Shawn blog Koa
[![Build Status](https://travis-ci.org/xiaoyang4011/shawn-blog-koa.svg?branch=master)](https://travis-ci.org/xiaoyang4011/shawn-blog-koa)
[![Coverage Status](https://coveralls.io/repos/github/xiaoyang4011/shawn-blog-koa/badge.svg?branch=master)](https://coveralls.io/github/xiaoyang4011/shawn-blog-koa?branch=master)
[![Dependency Status](https://david-dm.org/xiaoyang4011/shawn-blog-koa.svg)](https://david-dm.org/xiaoyang4011/shawn-blog-koa)
[![devDependency Status](https://david-dm.org/xiaoyang4011/shawn-blog-koa/dev-status.svg)](https://david-dm.org/xiaoyang4011/shawn-blog-koa#info=devDependencies)

###Tech Stack

 - koa 2.0
 - mongoose（mongodb）
 - bluebird（Promise/A+实现）
 - co (Generator + yield)
 - mocha（测试）
 - lodash
 - gulp (自动构建)

### Preparation
```
node.js 4.0+
mognodb 3.0+
redis 2.8+
```

### Getting Start

```
git clone https://github.com/xiaoyang4011/shawn-blog-koa
npm install
gulp server
```
### other
```
gulp standard // 语法检查
gulp test // 测试
```
###目录结构
```js
├── bin
├── gulp (gulp file)
├── node_modules
├── server
│   ├── api (api file)
│   │   ├── article
│   │   ├── users
│   │   ├── wechat
│   ├── config (config file)
│   │   ├── env
│   │   ├── index.js
│   ├── sys (system file)
│   │   ├── init.js
│   │   ├── koa.js
│   ├── lib
│   ├── model (mongoose model)
│   ├── util (util)
│   ├── app.js (start app)
│   └── routes.js
├── test
├── test_coverage
├── index.js
├── gulpfile.js
├── package.json
└── README.md
```

## License
MIT
