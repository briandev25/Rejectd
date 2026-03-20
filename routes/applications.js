const express = require('express');
const router = express.Router();
const {getApplications,addApplication,updateApplication } = require('../controllers/applicationController')


router.get("/", getApplications);
router.post("/",addApplication);
router.post("/:id",updateApplication);

module.exports =router;