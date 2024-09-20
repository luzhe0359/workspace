# 03_session

## 使用express-session
nestjs 默认框架是express，也支持express 的插件，所以这里安装express-session

1. 安装express-session
`pnpm i express-session -S`

2. 安装智能提示依赖
`pnpm i @types/express-session -D`

3. 引入express-session
在main.ts中使用
```ts
import * as session from 'express-session'
 
app.use(session())
```

4. 配置express-session
  
  | 参数    | 描述                                                                                            |
  | ------- | ----------------------------------------------------------------------------------------------- |
  | secret  | 生成服务端 session 签名，可以理解为加盐                                                         |
  | name    | 生成客户端 cookie 的名字，默认 connect.sid                                                      |
  | cookie  | 设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。 |
  | rolling | 在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)                               |

## 使用验证码测试session
1. 安装express-captcha
`pnpm install express-captcha -S`
2. 使用express-captcha