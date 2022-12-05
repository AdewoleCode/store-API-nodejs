const Products = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    // const search = 't'
        // const products = await Products.find({ featured: false })
        // const products = await Products.find({ rating: 4 })
        // const products = await Products.find({name: { $regex: search, $options: 'i' }, })
        const products = await Products.find({}).sort('-price')


        res.status(200).json({ products })
        // console.log(products);
}


const getAllProducts = async (req, res) => {
    const { featured, company, name, sort } = req.query
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

    // console.log(queryObject);
    let result = Products.find(queryObject)
    if (sort) {

        //seperating our value from the url with spaces to work with the sort method. it expects values seperated by space
        const sortList = sort.split(',').join(' ')
        //sort by whatever we/user/frontend/postman pass in the query sting params url
        result = result.sort(sortList)
        // console.log(sort);
        // console.log(sortList);
    } else {
        //sort by what we pass in manually
        result = result.sort('name')
    }
    const products = await result
    res.status(200).json({ products})
}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}