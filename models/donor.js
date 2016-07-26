var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DonorSchema = new Schema({
	firstName 		: String,
	lastName  		: String,
	contactNumber	: String,
	emailAddress 	: String,
	bloodGroup		: String,
	address 		: String,
	ipAddress		: String,
	latitude		: String,
	longitude		: String
});

module.exports = mongoose.model('Donor', DonorSchema);