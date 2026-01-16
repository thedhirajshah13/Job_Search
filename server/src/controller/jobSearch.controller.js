import Job from "../model/jobs.model.js";

export const getJobs = async (req, res) => {
  console.log("geting route hit");
  const { location = "", page = 1, limit = 20 } = req.query;
  try {
    const { location } = req.query;

    const filterDataByLocation = location
      ? { location: { $regex: location, $options: "i" } }
      : {};

    const skip = (page - 1) * limit;

    const jobsData = await Job.find(filterDataByLocation)
      .sort({ postedDateTime: -1 })
      .skip(skip)
      .limit(Number(limit));

    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      data: jobsData,
      pagination: {
        page: Number(page),
        limit: Number(limit),
       
      },
    });
  } catch (err) {
    console.error("Error in job controller:", err.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
