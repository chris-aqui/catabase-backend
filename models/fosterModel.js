var mongoose = require('mongoose');
const uuidv1 = require("uuid/v1");
var Schema   = mongoose.Schema;

var fosterSchema = new Schema({
	uuid: {
		type: String,
		default: uuidv1()
	  },
	  name: {
		type: String,
		required: true
	  },
	  address: {
		type: String,
		require: true
	  },
	  phoneNumber: {
		type: Number
	  },
	  email: {
		type: String
	  },
	});

module.exports = mongoose.model('foster', fosterSchema);
