const mongoose = require('mongoose');


const jobPostingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    skills: [{ type: String }],
    experience: { type: String }
});

const jobApplicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Types.ObjectId, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
//     resume: { type: Buffer },
    resume: {type: String, required: true},
    coverLetter: { type: String }
});
const JobPosting = mongoose.model('JobPosting',jobPostingSchema);
const JobApplication = mongoose.model('JobApplication',jobApplicationSchema);

module.exports = {JobPosting,JobApplication};
