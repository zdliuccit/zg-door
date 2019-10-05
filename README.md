# zg-door

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm start
```

构建生产代码
```npm
npm run build 构建生产代码

```
pm2启动服务
```npm
初次启动
pm2 start pm2.config.js --env production # production 对应 env_production
or
pm2 start ml-app
```
pm2的用法和参数说明可以参考[pm2.md](./pm2.md)，也可参考[PM2实用入门指南](http://www.cnblogs.com/chyingp/p/pm2-documentation.html)

### Nginx
在pm2基础上，Nginx配置upstream实现负载均衡

#### 在http节点下，加入upstream节点。
```bash
upstream server_name {
  server  172.16.119.198:8018 max_fails=2 fail_timeout=30s;
  server  172.16.119.198:8019 max_fails=2 fail_timeout=30s;
  server  172.16.119.198:8020 max_fails=2 fail_timeout=30s;
  .....
}
```
#### 将server节点下的location节点中的proxy_pass配置为：http:// + server_name，即“ http://server_name”.
```bash
location / {
  proxy_pass http://server_name;
  proxy_set_header Host localhost;
  proxy_set_header X-Forwarded-For $remote_addr
}
```
详细配置参考文档

如果应用服务是域名子路径`ssr`的话，需要注意如下
* location除了需要设置匹配`/ssr`规则之外，还需设置接口、资源的前缀比如(/api,/dist) `location ~ /(ssr|api|dist) {...}`
* vue的路由也该设置`base:'/ssr'`
* `entry-server.js`里`router.push(url)`这里，url应该把`/ssr`去掉，即`router.push(url.replace('/ssr','''))`
