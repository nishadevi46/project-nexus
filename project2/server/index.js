import express from 'express'
const app=express();
import cors from 'cors'
import Connection from './database/db.js'
import Router from './routes/route.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT||8000;
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',Router)



const USERNAME = process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const URL= process.env.MONGODB_URI || `mongodb+srv://
${USERNAME}:${PASSWORD}@foodr.suget0i.mongodb.net/?retryWrites=true&w=majority&appName=foodR`;
Connection(URL)
app.listen(port,()=>{
    console.log(`connection  is successfully made at port ${port}`)
    })