const express=require('express');
const app=express();
const web=require('./ws/server');
const http=require('http');
const server=http.createServer(app);  //将websocket和服务器放在一个端口
const port=3000;
app.use(express.json());
const atrcircle=require('./router/atrcirle');
const doctor=require('./router/doctor');
const rider=require('./router/rider');
const user_rider=require('./router/user_rider');
const avatar=require('./router/avatar');
const user=require('./router/user');
const drug=require('./router/drug');
const appoint=require('./router/appoint');
app.use('/atrcircle',atrcircle);
app.use('/user_rider',user_rider);
app.use('/avatar',avatar);
app.use('/rider',rider);
app.use('/user',user);
app.use('/doctor',doctor);
app.use('/drug',drug);
app.use('/appoint',appoint);
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
