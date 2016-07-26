var express = require('express');
var router 	= express.Router();
var Donor 	= require('.././models/donor');

router.get('/', function(req, res) {
    res.json({ message: 'Blood Heroes API' });   
});

router.get('/getDonorsPins', function(req, res) {
    Donor.find(function(err, donors) {
        if (err)
            res.json({error : err});

        res.json(donors);
    });
});

router.post('/createDonorPin', function(req, res) {

    var donor = new Donor();      // create a new instance of the Donor model

    donor.firstName 	= req.body.firstName; 
	donor.lastName  	= req.body.lastName; 
	donor.contactNumber	= req.body.contactNumber; 
	donor.emailAddress 	= req.body.emailAddress; 
	donor.bloodGroup	= req.body.bloodGroup; 
	donor.address 		= req.body.address; 
	donor.ipAddress		= req.body.ipAddress; 
	donor.latitude		= req.body.latitude; 
	donor.longitude		= req.body.longitude; 

    // save the donor and check for errors
    donor.save(function(err) {
        if (err)
            res.json({error : err});

        res.json({ message: "Donor's Pin created!" });
    }); 

});

router.delete('/deleteDonorPin/:donor_id', function(req, res) {
    Donor.remove({
        _id: req.params.donor_id
    }, function(err, bear) {
        if (err)
            res.json({error : err});

        res.json({ message: "Donor's Pin Successfully deleted" });
    });
});

router.put('/updateDonorPin/:donor_id', function(req, res) {
    // use our donor model to find the donor we want
    Donor.findById(req.params.donor_id, function(err, donor) {

        if (err)
            res.json({error : err});

        donor.firstName 	= req.body.firstName; 
		donor.lastName  	= req.body.lastName; 
		donor.contactNumber	= req.body.contactNumber; 
		donor.emailAddress 	= req.body.emailAddress; 
		donor.bloodGroup	= req.body.bloodGroup; 
		donor.address 		= req.body.address; 
		donor.ipAddress		= req.body.ipAddress; 
		donor.latitude		= req.body.latitude; 
		donor.longitude		= req.body.longitude;

        // save the bear
        donor.save(function(err) {
            if (err)
                res.json({error : err});

            res.json({ message: "Donor's Pin updated!" });
        });

    });
});


module.exports = router;
