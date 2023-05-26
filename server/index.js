const express =require ('express')
const app=express()
const cors = require('cors')
app.use(cors())
PORT=9099
const dotenv = require('dotenv')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
app.use (bodyParser.json)
dotenv.config();


const GYMSchema = new mongoose.Schema({
    name:String,
    price:Number
})
const ProductModel = new mongoose.model('Products',GYMSchema);

const fakeData=[
    {
        Image:'https://preview.colorlib.com/theme/gym/img/o1.png',
        title:"Regular Exercise",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        Image:'https://preview.colorlib.com/theme/gym/img/o2.png',
        title:"Training on the go",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        Image:'https://preview.colorlib.com/theme/gym/img/o3.png',
        title:"Body Building Packages",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    }
]
// BASE URL
app.get('/api',(req,res)=>{
    res.send('welcome to our api')
})

// GET ALL DATAS
app.get('/api/products',(req,res)=>{
    res.send(fakeData)
})

// GET ALL DATAS BY ID
app.get('/api/products/:id',(req,res)=>{
    const {id }=req.params
    const product = fakeData.find((x)=>x.id==id)
    res.send(product)
})

// POST PRODUCT
app.post('/api/products',(req,res)=>{
    const{image,title,description}=req.body
    const newProduct={
        image:image,
        title:title,
        description:description
    }
    fakeData.push(newProduct)
    res.send(newProduct)
})




// delete product
app.delete('/api/products/:id',(req,res)=>{
    const {id} = req.params 
    const deletingProduct = fakeData.find((x)=>x.id==id)
    let idx = fakeData.indexOf(deletingProduct)
    fakeData.splice(idx,1)
    res.send({
        message: 'Product Deleted Succesfuly'
    })
})




app.listen(PORT,()=>{
    console.log(`app running on Port:${PORT}`);
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION.replace('<password>',DB_PASSWORD))
.then(()=>{
    console.log('Mongo Db Connected');
})