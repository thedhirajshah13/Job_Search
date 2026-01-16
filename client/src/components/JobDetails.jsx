import { MapPin, Briefcase, Clock } from "lucide-react";

function JobDetails({ job }) {
  return (
    <div className="py-2 sm:py-4 text-left relative min-h-[300px] sm:min-h-[500px] flex flex-col justify-between mx-2 sm:mx-6 animate-fadeIn">
      <div
        className="sticky top-0 bg-gradient-to-r from-[#e6f0fa] to-[#f8fafc] z-10 border-b px-3 sm:px-6 py-3 sm:py-5 rounded-t-lg w-full shadow-sm"
        style={{ margin: "0px 20px 0px 20px", width: "100%" }}
      >
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A66C2] leading-snug">
              {job.title}
            </h2>

            <p className="text-sm text-gray-700 font-semibold mt-1">
              {job.company}
            </p>

            <div className="flex  flex-row items-center justify-between gap-2 mt-0.5 w-full">
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin size={14} />
                {job.location}
              </span>
              <a
                href={job.job_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-[#0A66C2] text-white rounded-full text-[13px] font-semibold border border-[#0A66C2] hover:bg-[#004182] hover:text-white transition-colors shadow ml-0 sm:ml-2 mb-2 sm:mb-2 mr-0 sm:mr-2 animate-pulse"
                style={{
                  color: "white",
                  marginBottom: "8px",
                  padding: "4px 12px",
                }}
              >
                Quick Apply
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 text-sm px-3 sm:px-6"
        style={{ margin: "0px 20px 0 20px" }}
      >
        <h3 className="text-base sm:text-lg font-semibold text-[#0A66C2]">
          Job Details
        </h3>

        <div className="flex flex-row items-center justify-between text-gray-700 gap-2 w-full">
          <div className="flex items-center gap-2">
            <Briefcase size={16} />
            <span>{job.employment_type}</span>
          </div>

          <span className="font-medium">Experience: {job.experience}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <Clock size={16} />
          <span>
            Posted on {new Date(job.postedDateTime).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div
        className="mt-4 sm:mt-6 px-3 sm:px-6 flex-1 flex flex-col"
        style={{ margin: "0px 20px 0 20px" }}
      >
        <h3 className="text-base sm:text-lg font-semibold text-[#0A66C2] mb-2 sm:mb-3">
          Additional Information
        </h3>

        <ul className="text-sm text-gray-700 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
          <li> Country: {job.country}</li>
          <li> Minimum Experience: {job.min_exp} years</li>
          <li> Maximum Experience: {job.max_exp} years</li>
          <li>
            Source: <span className="font-medium">{job.source}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JobDetails;
