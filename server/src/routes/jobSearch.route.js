import express from "express";
import { getJobs } from "../controller/jobSearch.controller.js";

const jobSearchRouter = express.Router();

jobSearchRouter.get("/jobs", getJobs);

export default jobSearchRouter;
