const mongoose = require("mongoose");

const companyCategorySchema = new mongoose.Schema({
    title : {
        type : String,
        unique : true,
        required : true
    },
}, {
    timestamps : true
});

const CompanyCategory = mongoose.model("companyCategory", companyCategorySchema);

module.exports = CompanyCategory;