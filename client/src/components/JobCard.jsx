import { MapPin } from "lucide-react";

function JobCard({ job, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(job)}
      className={`mx-1 sm:mx-3 my-2 cursor-pointer rounded-md transition-all duration-200
        ${
          isSelected
            ? "bg-[#e6f2ff] border-l-4 border-l-[#0A66C2] shadow-sm"
            : "bg-white border-l-4 border-l-transparent hover:bg-gray-50"
        } w-full sm:w-auto`}
      style={
        isSelected
          ? { margin: "1px", borderRadius: "1%" }
          : {
              margin: "1px",
              borderRadius: "1%",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }
      }
    >
      <div className="p-4 sm:p-6 text-left ml-2 sm:ml-4">
        <h3 className="text-[15px] sm:text-[14px] font-semibold text-[#0A66C2] leading-snug mb-2 sm:mb-3 line-clamp-2">
          {job.title}
        </h3>

        <p className="text-[13px] sm:text-[12px] text-gray-800 font-medium mb-1 sm:mb-2">
          {job.company}
        </p>

        <p className="text-[12px] text-gray-600 flex items-center gap-1 mb-1 sm:mb-2">
          <MapPin size={12} />
          {job.location}
        </p>

        {job.experience && (
          <p className="text-[12px] text-gray-600 mb-1 sm:mb-2 line-clamp-2">
            Experience: {job.experience}
          </p>
        )}

        <div className="flex flex-row items-center justify-between mt-4 mb-4 w-full">
          <span className="text-[11px] text-gray-400">
            {new Date(job.postedDateTime).toLocaleDateString()}
          </span>
          <button
            className="text-[11px] font-semibold text-white bg-[#0A66C2] border border-[#0A66C2] px-3 py-1 rounded-full hover:bg-[#004182] transition-colors shadow ml-0 sm:ml-4 mr-0 sm:mr-2"
            style={{
              padding: "4px 12px",
              marginBottom: "8px",
              marginRight: "8px",
              color: "white",
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
