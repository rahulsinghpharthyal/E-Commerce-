import mongoose  from "mongoose";

export const Connection = async () =>{
    const URL = 'mongodb://localhost:27017';
    try{
      await mongoose.connect(URL, { useNewUrlParser: true })
      console.log('Database Connect Succesfully')
    }catch(error){
        console.log('Error while connecting with the database', error.message)
    }
}


export default Connection;