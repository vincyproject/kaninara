import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://kaninara:kaninara@kaninara.omx4d.mongodb.net/').then(()=>console.log("DB Connected"));
    //mongodb+srv://vincyproject_1:6ZlssAM2hEWSDtaC@cluster0.omx4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.