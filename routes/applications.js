import express from 'express';
import {getApplications,addApplication,updateApplication} from '../controllers/applicationController.js';

const router = express.Router();


router.get("/", getApplications);
router.post("/",addApplication);
router.post("/:id",updateApplication);

export default router;