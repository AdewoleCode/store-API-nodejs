const Products = require('../models/product')

const getAllProductsStatic = async (req, res) => {
        // const products = await Products.find({ featured: false })
        const products = await Products.find({ rating: 4 })

        res.status(200).json({ products })
        // console.log(products);
}


const getAllProducts = async (req, res) => {
}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}