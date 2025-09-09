const express = require('express');
const config = require('./config/default');
const app = express();
app.use(express.json());
const userRouter = require('./router/user');
const drugRouter = require('./router/drug');
app.use('/user',userRouter);
app.use('/drug',drugRouter);
app.listen(config.port,()=>{
    console.log(`server is running on port ${config.port}`);
})
 