import { useEffect, useRef, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard.jsx";
import JobDetails from "../components/JobDetails.jsx";

const LIMIT = 20;

const JobSearchPage = () => {
  const [jobsData, setJobsData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationQuery, setLocationQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const url = import.meta.env.VITE_BACKEND_URL;
  const listRef = useRef(null);

  // Initial fetch
  useEffect(() => {
    fetchJobs("", 1, true);
  }, []);

  // Debounce location input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (locationQuery !== searchLocation) {
        setPage(1);
        setHasMore(true);
        setJobsData([]);
        setSearchLocation(locationQuery);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [locationQuery, searchLocation]);

  // Fetch jobs on location or page change
  useEffect(() => {
    fetchJobs(searchLocation, page);
  }, [searchLocation, page]);

  // Fetch jobs function
  const fetchJobs = async (location = "", pageNumber = 1, reset = false) => {
    if (!hasMore && !reset) return;

    try {
      setLoading(true);

      const endpoint = `${url}/api/jobs?location=${encodeURIComponent(
        location
      )}&page=${pageNumber}&limit=${LIMIT}`;

      const response = await axios.get(endpoint);
      const jobs = response.data.data || [];

      setJobsData((prev) => {
        if (reset) return jobs;

        const existingIds = new Set(prev.map((j) => j._id));
        const uniqueJobs = jobs.filter((j) => !existingIds.has(j._id));

        return [...prev, ...uniqueJobs];
      });

      setSelectedJob((prev) => prev ?? jobs[0] ?? null);

      if (jobs.length < LIMIT) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Handle Find Jobs button click
  const handleFindJobs = () => {
    if (locationQuery !== searchLocation) {
      setPage(1);
      setHasMore(true);
      setJobsData([]);
      setSearchLocation(locationQuery);
    }
  };

  // Handle scroll for infinite loading
  const handleScroll = () => {
    const el = listRef.current;
    if (!el || loading || !hasMore) return;

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 50) {
      setPage((prev) => prev + 1);
    }
  };

  if (loading && jobsData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-sm text-gray-600">Loading jobs…</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full bg-white py-8 flex justify-center">
        <div className="flex flex-col items-center w-[60%] max-w-2xl bg-white rounded-2xl shadow-md p-6 gap-4">
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-row items-center gap-5 w-full">
              <input
                type="text"
                placeholder='City, state, zip code, or "remote"'
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="flex-1 px-5 text-base outline-none border border-gray-300 h-16 rounded-full"
                style={{ height: "30px", paddingLeft: "20px" }}
              />

              <button
                onClick={handleFindJobs}
                className="px-6 h-16 rounded-full border border-gray-300 bg-[#0A66C2] text-white font-semibold text-base hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/30"
                style={{
                  minWidth: "110px",
                  height: "30px",
                  marginLeft: "10px",
                }}
              >
                Find jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-[90%] max-w-6xl h-[80vh] bg-white border rounded-lg shadow-sm flex overflow-hidden">
          <div className="w-[40%] border-r flex flex-col p-4">
            <div
              ref={listRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto pr-6 space-y-4"
            >
              {jobsData.length > 0 ? (
                jobsData.map((job) => (
                  <JobCard
                    key={job._id}
                    job={job}
                    isSelected={selectedJob?.jobId === job.jobId}
                    onSelect={setSelectedJob}
                  />
                ))
              ) : !loading ? (
                <p className="p-4 text-sm text-gray-500">
                  No jobs found for this location
                </p>
              ) : null}

              {loading && (
                <p className="text-xs text-gray-400 text-center py-2">
                  Loading more jobs…
                </p>
              )}

              {!hasMore && jobsData.length > 0 && (
                <p className="text-xs text-gray-400 text-center py-2">
                  No more jobs
                </p>
              )}
            </div>
          </div>

          <div className="w-[60%] bg-gray-50 overflow-y-auto px-16 pt-8 ml-6 rounded-2xl">
            {selectedJob ? (
              <JobDetails job={selectedJob} />
            ) : (
              <p className="p-6 text-sm text-gray-500">
                Select a job to view details
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSearchPage;
