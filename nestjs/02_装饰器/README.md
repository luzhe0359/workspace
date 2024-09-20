# 02_装饰器

## 常用装饰器

| 装饰器                  | 参数                          |
| ----------------------- | ----------------------------- |
| @Request()              | req                           |
| @Response()             | res                           |
| @Next()                 | next                          |
| @Session()              | req.session                   |
| @Param(key?: string)    | req.params/req.params[key]    |
| @Body(key?: string)     | req.body/req.body[key]        |
| @Query(key?: string)    | req.query/req.query[key]      |
| @Headers(name?: string) | req.headers/req.headers[name] |
| @HttpCode               |

## 示例
请求`http://127.0.0.1:3000/user?name="法外狂徒"`

1. 使用Request装饰器，req.query获取参数对象
```ts
findAll(@Request() req) {
  console.log('🚀 ~ UserController ~ findAll ~ req:', req.query);
  return this.userService.findAll();
}
```

2. 使用Query装饰器，query即为参数对象
```ts
findAll(@Query() query) {
  console.log('🚀 ~ UserController ~ findAll ~ query:', query);
  return this.userService.findAll();
}
```


3. 使用Query装饰器，name为具体参数
```ts
findAll(@Query('name') name) {
  console.log('🚀 ~ UserController ~ findAll ~ name:', name);
  return this.userService.findAll();
}
```