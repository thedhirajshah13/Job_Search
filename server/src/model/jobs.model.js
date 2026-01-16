import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobId: {
      type: String, // from "Job ID (Numeric)"
      required: true,
      index: true,
    },

    title: String,
    company: String,

    location: {
      type: String,
      index: true, // important for location search
    },

    job_link: String,

    employment_type: String,
    seniority_level: String,

    experience: String,
    min_exp: Number,
    max_exp: Number,

    source: String,
    country: String,
    companytype: String,

    companyImageUrl: String,

    postedDateTime: {
      type: Date,
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model("jobs", jobSchema);

export default jobModel;
