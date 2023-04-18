const router = require ("express").Router();
let guide = require ("../models/guide");
   


router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const location = req.body.location;
    const languages = req.body.languages;
    const description = req.body.description;
    const contactNo = req.body.contactNo;
    const Email = req.body.Email;
  
    const newguideRegistration = new guide({
      
      fullName,
      location,
      languages,
      description,
      contactNo,
      Email

    });
    newguideRegistration.save()
    .then(() => res.json('Guide added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});


//retrive data from the database(READ)
router.route("/").get((req,res)=>{
    guide.find().then((guides)=>{
        res.json(guides)
    }).catch((err)=>{
        console.log(err);
    })
})


// //update data of the databas
// router.route("/update/:id").put(async(req,res)=>{
//     let guideId = req.params.id;
//     const {fullName,location,languages,description,contactNo,Email} = req.body;

//     const updateDetails = {
//         fullName,
//         location,
//         languages,
//         description,
//         contactNo,
//         Email
//     }
//     const update = await guide.findByIdAndUpdate(guideId,updateDetails)
//     .then(()=>{
//         res.status(200).send({ status : "guide updated "})
//     }).catch((err)=>{
//         console.log(err);
//     })

// })

// Define a route for updating a customer with a given id
router.route('/update/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    guide.findById(id, function (err, guide){
        if(!guide)
         // If no guide was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the guide's fields with the new data from the request body
            guide.fullName = req.body.fullName;
            guide.location = req.body.location;
            guide.languages = req.body.languages;
            guide.description = req.body.description;
            guide.contactNo = req.body.contactNo;
            guide.Email = req.body.Email;
       // Save the updated guide to the database
            guide.save().then(business => {
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



// //deleting data from the database
// router.route("/delete/:id").delete(async(req,res)=>{
//     let guideId = req.params.id;

  

//     await guide.findByIdAndDelete(guideId)
//     .then(()=>{
//         res.status(200).send({status: "User deleted"});

//     }).catch((err)=>{
//         console.log(err);
//     })

// })


// Define a DELETE route at '/delete/:id'
router.route('/delete/:id').get(function(req,res){
    // Use the 'findByIdAndRemove' method of the 'Customer' model to delete a customer by ID
    guide.findByIdAndRemove({_id:req.params.id}, function (err, guide){
         // If there is an error, respond with the error message in JSON format
        if(err)res.json(err);
        // If the customer is successfully deleted, respond with a success message in JSON format
        else res.json('Successfully Removed');
    });
});




//Get by ID
router.route("/get/:id").get(async (req, res) => {
    let guideId = req.params.id;
    const guideData = await guide.findById(guideId)
        .then((guide) => {
            res.status(200).send({ status: "fetched",guide: guide})
        })
        .catch((err) => {
            console.log(err.mesage);
            res.status(500).send({ status: "Error " })
        })
})


//get all details
// Define a route for getting all guide
router.route('/getall').get(function(req, res) {
    // Find all documents in the 'guide' collection
    guide.find(function(err, vehicle) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(vehicle);
        }
    });
});

router.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    guide.findById(id, function (err,register){
        res.json(register);
    });
});

router.route('/:id').get(function (req, res){
    let email = req.params.id;
   
    guide.findOne({email : email},function (err,std){
       if(err)
            console.log(err);
      else{
            res.json(std)
      }
   });

});




module.exports = router;