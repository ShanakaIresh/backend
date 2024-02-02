const express = require('express')
const app = express()
const customerRouter = require('./routes/customerroute')
const productRouter = require('./routes/productroute')
const userRouter = require('./routes/userroute')

app.use(express.json())
app.use('/customer', customerRouter)
app.use('/product', productRouter)
app.use('/user', userRouter)





app.listen(5000, 'localhost', () => [
    console.log('Sever is listning on port 5000')
])