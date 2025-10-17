import mongoose from "mongoose";


let isConnected = false;

export const connectDB = async () => {
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    else{
        try{
            await mongoose.connect(process.env.MONGODB_URI,{
                dbName: "MunsiAi",
            });
            isConnected = true;
            console.log("MongoDB connected");
        }
        catch(error){
            console.log(error);
        
        }
    }
}