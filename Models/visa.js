const mongoose = require('mongoose');

const Person = mongoose.model('Persons', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    passportNo: {
        type: String,
        required: true
    },
    passportIssueCity: {
        type: String,
        required: true
    },
    passportIssueDate: {
        type: String,
        required: true
    },
    passportExpiryDate: {
        type: String,
        required: true
    },
    documentDetails: {
        type: String,
        required: true
    },
    pastTourDetails: {
        type: String,
        required: true
    }
}));

const Visa = mongoose.model('Visas', new mongoose.Schema({
    personId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    visaIssueDate: {
        type: String,
        required: true
    },
    days: {
        type: String,
        required: true
    },
    travelDate: {
        type: String,
        required: true
    },
    returnDate: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    workingPeriod: {
        type: String,
        required: true
    },
    workingPlace: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    otherDetails: {
        type: String,
        required: true
    }
}));


module.exports = { Person, Visa };