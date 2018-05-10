// // 导入koa, koa@2.0中本身是一个class，因此用大写的koa表示；
// const Koa = require('koa');

// // 创建一个koa对象表示web app本身；
// const app = new Koa();

// // 对于任何请求，app将调用 该异步函数 进行处理请求；
// app.use(async(ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';

//     ctx.response.body = '<h2>Hello Koa2</h2>';
// });

// // 在端口3000监听
// app.listen(3000);
// console.log('app started at 3000端口...');

//// --------------------引入koa-router -重构一-------------------

// // 导入koa, koa@2.0中本身是一个class，因此用大写的koa表示；
// const Koa = require('koa');

// // require('koa-router') 返回的是一个函数；
// const router = require('koa-router')();

// // 创建一个koa对象表示web app本身；
// const app = new Koa();

// // log request URL:
// app.use(async (ctx, next) => {
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next();
// });

// // add url-router;
// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello ${name} ${Date.now()}</h1>`;
// });

// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>index</h1>'
// });

// // add router moddleware
// app.use(router.routes());

// // 在端口3000监听
// app.listen(3000);
// console.log('app started at 3000端口...');

// --------------------引入koa-bodyparser 处理post请求 重构二 --------------------

// 导入koa, koa@2.0中本身是一个class，因此用大写的koa表示；
const Koa = require("koa");

// require('koa-router') 返回的是一个函数；
const router = require("koa-router")();

// 导入 bodyparser
const bodyParser = require("koa-bodyparser");

// 创建一个koa对象表示web app本身；
const app = new Koa();

//
app.use(bodyParser());

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// add url-router;
router.get("/hello/:name", async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello ${name} ${Date.now()}</h1>`;
});

router.get("/", async (ctx, next) => {
  ctx.response.body = `<h1>index</h1>
        <form action="/signin" method="post"> 
            <p>name: <input name="name" value="koa"> </p>
            <p>password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

// post请求
router.post("/signin", async (ctx, next) => {
  var name = ctx.request.body.name || "",
    password = ctx.request.body.password || "";
  console.log(`signin with name: ${name} password: ${password}`);

  if (name === "koa" && password === "321") {
    ctx.response.body = `<h1>welcome, ${name} </h1>`;
  } else {
    ctx.response.body = `<h1>Login failed</h1>
            <p><a href="/">try again</a></p>`;
  }
});

// add router moddleware
app.use(router.routes());

// 在端口3000监听
app.listen(3000);
console.log("app started at 3000端口...");
