const express=require('express');
// const bodyParser=require('body-parser');
const morgan=require('morgan');
const {createProxyMiddleware}=require('http-proxy-middleware');

const {PORT}=require('./config/server-config');

const app=express();



    app.use(morgan('combined'));            //it will give info that from where the request has been made etc.

    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({extended:true}));

    app.use('/bookingservice',createProxyMiddleware({target:'http://localhost:3002/',changeOrigin:true}));
    app.get('/home',(req,res)=>{
        return res.json({message:'OK'});
    })

    app.listen(PORT,()=>{
        console.log(`Server starts at port ${PORT}`);
    })
