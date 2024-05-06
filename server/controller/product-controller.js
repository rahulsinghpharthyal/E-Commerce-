import Product from '../model/productSchema.js';


export const getProduct = async (req, res) =>{
    try{
       const products = await Product.find({})

       res.status(200).json(products);
    }
    catch (err){
        res.status(500).json({ message: err.message});
    }   
}

export const getProductById = async (req, res)=>{
    try{
        const id = req.params.id;
         
        const product = await Product.findOne({'id': id})
       
       

        res.status(200).json(product);

    }catch(error){
        res.status(500).json({message: error.message})
    }
}