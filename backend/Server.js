const express=require('express')

const app=express()

const mongoose=require('mongoose')
const cors=require('cors')
const routes=require('./routes/Router')
require('dotenv').config()
const PORT=process.env.PORT || 5000
app.use(cors())
app.use(express.json())


mongoose.connect(`${process.env.DBURL}`)
.then(()=>{
     console.log("database connected")
})
.catch(err=> console.log(err))


app.use('/user',routes)


app.listen(PORT,()=>console.log("app running succesfully with"+PORT))
