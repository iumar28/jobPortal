const express = require("express");
const router = express.Router();
const job = require('../models/jobModel')
const mongoose = require("mongoose")

const app = express();
// const cors = require('cors');
app.use(express.json());
//this is working fine
router.post('/job',   async (req, res) => {
    // Create a new job posting
    const jobb = new job.JobPosting(req.body);
    try {
        await jobb.save();
        res.send(jobs);
    } catch (error) {
        res.status(400).send(error);
    // res.send("ha")
    }
});

//this is working fine
router.get('/jobs', (req, res) => {
    const { skills, experience } = req.query;
    
    // Find all job postings that match the provided skills and experience level
    job.JobPosting.find({ skills: { $in: skills }, experience: { $lte: experience } })
      .then(jobs => res.json(jobs))
      .catch(err => res.status(400).json('Error: ' + err));
 });

 //this is working fine
router.get('/alljobs', async (req, res) => {
    // Get a list of all current job postings
    const jobs = await job.JobPosting.find();
    res.send(jobs);
});

router.get('/job/:id', async (req, res) => {

    let jobs = await job.JobPosting.findById({_id:req.params.id});  
    if (!jobs) {
        res.status(404).send();
    } else {
        res.send(jobs);
    }
});

router.post('/job/:id/apply', async (req, res) => {
    // Apply for a job posting
    const jobs = await job.JobPosting.findById({_id:req.params.id});
    if (!jobs) {
        res.status(404).send();
    } else {
        const application = new job.JobApplication({
            jobId: job._id,
            name: req.body.name,
            email: req.body.email,
            resume: req.body.resume,
            cover: req.body.cover,
        })
        res.send(application);
    }
})

module.exports = router;
