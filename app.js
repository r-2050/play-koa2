const Koa = require('koa');

const app = new Koa();

app.use(async(ctx, next) => {
    await next();
    ctx.response.type = 'text/html';

    ctx.response.body = '<h2>Hello Koa2</h2>';
});


app.listen(3000);
console.log('app started at 3000端口...');