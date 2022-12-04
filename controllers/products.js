const Products = require('../models/product')

const getAllProductsStatic = async (req, res) => {
        // const products = await Products.find({ featured: false })
        const products = await Products.find({ rating: 4 })

        res.status(200).json({ products })
        // console.log(products);
}


const getAllProducts = async (req, res) => {
    const { featured, company } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if (company) {
        queryObject.company = company
    }

    console.log(queryObject, company);
    const products = await Products.find(queryObject)
    res.status(200).json({ products})
}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}