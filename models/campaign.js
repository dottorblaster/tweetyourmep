var campaignModel function() {
	var mongoose = require('mongoose');
	var config = require('../config.js');
	var schema = mongoose.Schema;

	// Define Campaign model
	var campaignSchema = new mongosse.Schema({
		campaignTitle : String,
		campaignText : String,
		tw_targetMep : String,
		// tw_mepimage : String,
		// tw_targetName : String,
		tw_text : String
	});
}

module.exports = new campaignModel();