var campaignModel function() {
	var mongoose = require('mongoose');
	var config = require('../config.js');
	var schema = mongoose.Schema;

	// Define Campaign model
	var campaignSchema = new mongosse.Schema({
		campaignTitle : String,
		tw_targetMep : String,
		tw_text : String
	});
}

module.exports = new campaignModel();