require('dotenv').config()

const connectDB = require('./db/connect')

const productModel = require('./models/product')

const jsonProducts = require('./products.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await productModel.create(jsonProducts)
        console.log('connected');
    } catch (error) {
      console.log(error);  
    }
}



start()