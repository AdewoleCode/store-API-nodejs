require('dotenv').config()

const connectDB = require('./db/connect')

const productModel = require('./models/product')

const jsonProducts = require('./products.json')


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await productModel.deleteMany()
    await productModel.create(jsonProducts)
    console.log('connected');

    //to stop the process of this populate.js. no need for it to keep running.
    // the file is just to populate our db with the json product.
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}


start()