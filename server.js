const express = require('express');
const app = express();
const mongoose = require('mongoose');

//hosting the mondo uri  -(its the location of the mongo db)
const mongoUri = "mongodb+srv://Josephy1605:aeqt03Q6xa4Gxw2H@cluster0.h0kkwov.mongodb.net/?retryWrites=true&w=majority";
const bodyParser = require('body-parser'); //use as a middleware

//connection
mongoose.connect(mongoUri);
// middleware
app.use(bodyParser.json());

// mongoose works with model and schema
//----------- SCHEMA-------------- // (IT'S A COLLECTION AND HAVE SOME SET RULES OF RULES THAT YOU CAN DO ON UH DB)
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    available : Boolean

});

const Car = mongoose.model('Car', carSchema);

//GET //
app.get('/api/getCars', (req, res) => {
    Car.find({},(err, doc) => {
        if(err) return  console.log(err);
        return res.json(doc);
    })
    // findOne gives you an unique obj {}  Car.findOne({_id: 32453555}(err, doc) => {
        // findBYId -  Car.find({32453555},(err, doc) =>
    //find gives [{}, {}, {}]
})

//POST //
app.post('/api/addCar', (req, res) => {
    const carData = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        available : req.body.available
    })
    // console.log('req', req)
    //connecting to db and store this info on db
    //save method --to save data on db
    carData.save((err, doc) => {
        if(err) throw err;
        console.log('docs', doc);//whatever we put on db
    })
})

//Delete
 app.post('/api/removeCar', (req, res) => {
    const brand = req.body.brand;
    Car.findOneAndRemove({brand: brand}, (err, doc) => {
        if(err) return console.log(err);
        return res.json(doc);
    })
    // remove -{id:id} removes all data of that id or brand
    // Car.remove({}, (err, doc) => { -- removes all data
 })

 // UPDATE
 app.post('/api/updateCar', (req, res) => {
    const id = req.body.id;
    const brand = req.body.brand;
    Car.updateOne({_id: id}, {
        $set: {
            brand: brand
        }}, (err, doc) => {
            if(err) return console.log(err);
            return res.json(doc);
        } )
        // findBYIdANdUpdate

 })

//this schema need to know that it have to work on a collection




const PORT = process.env.PORT || 8000;
app.listen(PORT);

//username Josephy1605
//password  aeqt03Q6xa4Gxw2H

// url - mongodb+srv://Josephy1605:<password>@cluster0.h0kkwov.mongodb.net/?retryWrites=true&w=majority