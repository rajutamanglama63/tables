const express = require("express");
const Company = require("../models/company");

const router = express.Router();

// create company
router.post('/create', async (req, res) => {
    try {
        const {title} = req.body;

        const newCompany= new Company({
            title : title
        });

        await newCompany.save();

        res.status(200).json(newCompany);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// get all companies
router.get("/all", async (req, res) => {
    try {
        const allCompanies = await Company.find();

        res.status(200).json(allCompanies);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;