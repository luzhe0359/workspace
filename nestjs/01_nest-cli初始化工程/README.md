# 01_nest-cli初始化工程

## 入口文件

main.ts

## 查看nestjs所有的命令

nest --help

## 生成一个用户模块

nest g resource user

## 使用restful风格，实现CRUD、版本控制

1. 在main.ts启动版本控制

```ts
app.enableVersioning({
  // 版本号
  type: VersioningType.URI
});
```

2. 模块路由 版本控制  
   访问路径 `http://127.0.0.1:3000/v1/user`

```ts
@Controller({
  path: 'user', // 路由
  version: '1' // 版本号
})
```

1. 单个路由 版本控制  
   访问路径 `http://127.0.0.1:3000/v2/user`

```ts
@Get()
@Version('2') // 版本号
findAll() {
  return this.userService.findAll();
}
```
