const express = require('express');
const app = express();
const { MongoClient} = require('mongodb');

//hosting the mondo uri  -(its the location of the mongo db)
const mongoUri = "mongodb+srv://Josephy1605:aeqt03Q6xa4Gxw2H@cluster0.h0kkwov.mongodb.net/?retryWrites=true&w=majority";

//Now lets connect to mongo db

MongoClient.connect(mongoUri,{ useNewUrlParser: true,
    useUnifiedTopology: true }).then((client,err)=>{
    if(err) {
        throw(err);
    }
    console.log("connected to the db");
 });


const PORT = process.env.PORT || 8000;
app.listen(PORT);

//username Josephy1605
//password  aeqt03Q6xa4Gxw2H

// url - mongodb+srv://Josephy1605:<password>@cluster0.h0kkwov.mongodb.net/?retryWrites=true&w=majority