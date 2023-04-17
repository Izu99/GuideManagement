const express = require('express');
const ayurvedaRoutes = express.Router();

// Require the 'register.model' module and assign it to the variable 'Customer'
let Ayurveda = require('./ayurwedicReg.model');
let OderTretement = require('./OderTretement');
// Define a route for adding a new customer
ayurvedaRoutes.route('/add').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let ayurveda = new Ayurveda(req.body);
     // Save the new customer to the database
    ayurveda.save()
        .then(ayurveda => {
            // If the ayurveda was saved successfully, return a success message
            res.status(200).json({'ayurveda' : 'new ayurveda is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the ayurveda, return an error message
            res.status(400).send("Unable to save database")
        });
});

ayurvedaRoutes.route('/oderadd').post(function (req,res){
    // Create a new instance of the 'OderVehicle' model with the data from the request body
    let oderTretement = new OderTretement(req.body);
    // Save the new 'OderVehicle' to the database
    oderTretement.save()
        .then(oderVehicle => {
            // If the 'OderVehicle' was saved successfully, return a success message
            res.status(200).json({'oderTretement' : 'new oderTretement is added successfully'});
        })
        .catch(err => {
             // If there was an error saving the 'OderVehicle', return an error message
            res.status(400).send("Unable to save to database")
        });
});


//get all details
// Define a route for getting all customers
ayurvedaRoutes.route('/alloder/:id').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    OderTretement.find(function(err, vehicle) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(vehicle);
        }
    });
});

ayurvedaRoutes.route('/oderdelete/:id').get(function(req,res){
    OderTretement.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});



//get all details
// Define a route for getting all ayurvedas
ayurvedaRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'ayurveda' collection
    Ayurveda.find(function(err, registers) {
        if (err) {
            // If there was an error finding ayurvedas, log the error to the console
            console.log(err);
            // If ayurvedas were found successfully, return them as a JSON response
        } else {
            res.json(registers);
        }
    });
});

//get all details
// Define a route for getting all ayurvedas
ayurvedaRoutes.route('/tgetall').get(function(req, res) {
    // Find all documents in the 'ayurveda' collection
    OderTretement.find(function(err, registers) {
        if (err) {
            // If there was an error finding ayurvedas, log the error to the console
            console.log(err);
            // If ayurvedas were found successfully, return them as a JSON response
        } else {
            res.json(registers);
        }
    });
});


//get all details
// Define a route for getting all ayurvedas
ayurvedaRoutes.route('/treatemetgetall').get(function(req, res) {
    // Find all documents in the 'ayurveda' collection
    OderTretement.find(function(err, registers) {
        if (err) {
            // If there was an error finding ayurvedas, log the error to the console
            console.log(err);
            // If ayurvedas were found successfully, return them as a JSON response
        } else {
            res.json(registers);
        }
    });
});

ayurvedaRoutes.route('/tedit/:id').get(function (req,res){
    let id = req.params.id;
    OderTretement.findById(id, function (err,register){
        res.json(register);
    });
});






ayurvedaRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Ayurveda.findById(id, function (err,register){
        res.json(register);
    });
});
// Define a route for updating a ayurveda with a given id
ayurvedaRoutes.route('/update/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the ayurveda with the given id in the database
    Ayurveda.findById(id, function (err, ayurveda){
        if(!ayurveda)
         // If no ayurveda was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the ayurveda's fields with the new data from the request body
            ayurveda.firstName = req.body.firstName;
            ayurveda.age = req.body.age;
            ayurveda.country = req.body.country;
            ayurveda.state = req.body.state;
            ayurveda.gender = req.body.gender;
            
             // Save the updated ayurveda to the database
            ayurveda.save().then(business => {
                // If the ayurveda was updated successfully, return a success message
                res.json('Update Complete');
            })
                .catch(err =>{
                    // If there was an error updating the ayurveda, return an error message
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

ayurvedaRoutes.route('/oderupdate/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    OderTretement.findById(id, function (err, oderTretement){
        if(!oderTretement)
         // If no guide was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the guide's fields with the new data from the request body
            oderTretement.OName = req.body.OName;
            oderTretement.nic = req.body.nic;
            oderTretement.email = req.body.email;
            oderTretement.tretement = req.body.tretement;
            oderTretement.price = req.body.price;
            oderTretement.Qty = req.body.Qty;
            oderTretement.status = req.body.status;


       // Save the updated oderTretement to the database
            oderTretement.save().then(business => {
                // If the customer was updated successfully, return a success message
                res.json('Update Complete');
            })
                .catch(err =>{
                    // If there was an error updating the customer, return an error message
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


// Define a DELETE route at '/delete/:id'
ayurvedaRoutes.route('/delete/:id').get(function(req,res){
    // Use the 'findByIdAndRemove' method of the 'ayurveda' model to delete a ayurveda by ID
    Ayurveda.findByIdAndRemove({_id:req.params.id}, function (err, ayurveda){
         // If there is an error, respond with the error message in JSON format
        if(err)res.json(err);
        // If the ayurveda is successfully deleted, respond with a success message in JSON format
        else res.json('Successfully Removed');
    });
});




ayurvedaRoutes.route('/regLogin').post(function (req, res) {
    // Retrieve email and password from the request body
    let email = req.body.email;
    let password = req.body.password;
    //let ayurveda = new ayurveda(req.body);
    // Log the login details for debugging purposes
    console.log("Your Login Details " + email + " " + password);
    // Use the 'findOne' method of the 'ayurveda' model to find a ayurveda with the specified email and password
    Ayurveda.findOne({ email: email, password: password }, function (err, ayurveda) {
        // If there is an error, respond with a 500 Internal Server Error message
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        // If no ayurveda is found with the specified email and password, respond with a 401 Unauthorized message
        } else if (!ayurveda) {
            res.status(401).send("Invalid Credentials");
        // If a ayurveda is found with the specified email and password, respond with a 200 OK message and the ayurveda object in JSON format
        } else {
            res.status(200).send({
                message: "Successful Login",
                ayurveda: ayurveda
            });
        }
    });
});





module.exports = ayurvedaRoutes;