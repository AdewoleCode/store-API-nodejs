const Products = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const search = 't'
        // const products = await Products.find({ featured: false })
        // const products = await Products.find({ rating: 4 })
        const products = await Products.find({name: { $regex: search, $options: 'i' }, })


        res.status(200).json({ products })
        // console.log(products);
}


const getAllProducts = async (req, res) => {
    const { featured, company, name } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if (company) {
        queryObject.company = company
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    console.log(queryObject);
    const products = await Products.find(queryObject)
    res.status(200).json({ products})
}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}