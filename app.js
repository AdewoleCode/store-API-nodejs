console.log('04 Store API')

require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const notFound = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

const productsRouter = require('./routes/products')

//middlewares 
app.use(express.json())



//routes
app.get('/', (req, res) => {
    res.send('<h1> Store API </h1><a href="/api/v1/products">products route</a>')
})


app.use('/api/v1/products', productsRouter)

//products routes



app.use(notFound)
app.use(errorMiddleware)



const port = process.env.PORT || 5050

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log('server is listening at localhost 5050');
        })
    } catch (error) {
        console.log(error);
    }
}


start()
