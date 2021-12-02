const express = require("express");
const CompanyCategory = require("../models/companyCategory");

const router = express.Router();

// creating company category
router.post('/create', async (req, res) => {
    try {
        const {title} = req.body;

        const newCompanyCategory = new CompanyCategory({
            title : title
        });

        await newCompanyCategory.save();

        res.status(200).json(newCompanyCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// get all company category
router.get("/all", async (req, res) => {
    try {
        const allCompanyCategories = await CompanyCategory.find();

        res.status(200).json(allCompanyCategories);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;