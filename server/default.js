    import { products } from "./constent/data.js"

    import Product from "./model/productSchema.js"


    const DefaultData = async () => {
        try{
            for (const product of products) {
                await Product.updateOne(
                  { id: product.id },   // filter
                  { $set: product },    // update operation
                  { upsert: true }      // create if not exists
                );
              }

            /* await Product.insertMany(products);*/
            console.log("data imported succesfully")

        }catch(error){
            console.log('Error while inserting default data', error.message)
        }
    }

    export default DefaultData;

