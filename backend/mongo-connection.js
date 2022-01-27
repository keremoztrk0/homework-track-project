const mongoose = require("mongoose");


async function main(){
    await mongoose.connect("mongodb://localhost/homework-tracker-db",{useUnifiedTopology:true,useNewUrlParser:true})
    console.log("Connected to database -homework-tracker-db-")
}

main()