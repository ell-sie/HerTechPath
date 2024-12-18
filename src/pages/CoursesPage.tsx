import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "../assets/ArrowRightIcon";
import CourseCard from "../components/shared/CourseCard";
import SearchBar from "../components/shared/SearchBar";
import { usePathsQuery } from "../hooks/path";
import { useAuthContext } from "../providers/AuthProvider";
import Spinner from "../assets/Spinner";

function CoursesPage() {
  const navigate = useNavigate();

  const {
    user: { user },
  } = useAuthContext();

  const { data: paths, isPending } = usePathsQuery();

  const currentPath = paths?.find((path) => path.pathUserId === user?.id);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = currentPath?.resources?.filter((resource) => {
    return resource?.title?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex flex-col gap-2 py-10">
      <div className="border-primary-100 border-b-2 flex fle-col p-4">
        <div className="flex w-full items-center justify-between">
          <div></div>
          {/* <div className="text-2xl font-bold font-poppins">Hi elsie !</div> */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>
      <div className="flex flex-col gap-8 p-4">
        <div className="flex justify-between w-full">
          <div className="text-6xl font-bold font-poppins">My courses</div>
          <button
            onClick={() => navigate("/home")}
            className="flex text-stone-400 items-center gap-4"
          >
            <p className="">See all</p>
            <ArrowRightIcon className="size-6 " />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-10">
            {isPending ? (
              <div className=" flex flex-col items-center p-40">
                <div></div>
                <Spinner className="size-10" />
              </div>
            ) : (
              filteredResources?.map((resource) => (
                <CourseCard
                  key={resource?.id}
                  title={resource?.title ?? "Untitled"}
                  author={resource?.author ?? "Unknown"}
                  hours={resource?.hours ?? "N/A"}
                  id={resource?.id ?? "unknown-id"}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
