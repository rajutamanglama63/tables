const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    title : {
        type : String,
        unique : true,
        required : true
    },
    category_id : {
        type : String,
        default : null
    },
    image : {
        type : String,
        default : null
    },
    description : {
        type : String,
        default : null
    },
    isTechCompany : {
        type : Boolean,
        default : false
    }
}, {
    timestamps : true
});

const Company = mongoose.model("company", companySchema);

module.exports = Company;