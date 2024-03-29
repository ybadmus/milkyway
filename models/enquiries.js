var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
    	type: String,
    	required: true
    },
    subject: {
    	type: String,
    	required: true
    },
    comments: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Enquiries = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiries;