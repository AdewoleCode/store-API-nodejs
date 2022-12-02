

const getAllProductsStatic = async (req, res) => {
    res.status(200).send('product testing static')
} 


const getAllProducts = async (req, res) => {
    res.status(200).send('products testing')
}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}