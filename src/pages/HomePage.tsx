import { useState } from "react";
import BackIcon from "../assets/BackIcon";
import ForwardIcon from "../assets/ForwardIcon";
import LearningIcon from "../assets/LearningIcon";
import CoursesLayout from "../components/Layout/CoursesLayout";
// import Progress from "../components/Progress";
import CurrentCourseCard from "../components/shared/CurrentCourseCard";
import { usePathsQuery } from "../hooks/path";
import { useUsersQuery } from "../hooks/users/useUsersQuery";
import { useAuthContext } from "../providers/AuthProvider";

function HomePage() {
  const {
    user: { user },
  } = useAuthContext();

  const { data: users, isPending } = useUsersQuery();
  const currentUser = users?.find(
    (currentuser) => currentuser.userId === user?.id
  );

  const { data: paths, isPending: isLoading } = usePathsQuery();
  const currentPath = paths?.find((path) => path.pathUserId === user?.id);
  const resources = currentPath?.resources;

  const [currentResourceIndex, setCurrentResourceIndex] = useState(0);

  const handleNext = () => {
    if (resources && currentResourceIndex < resources.length - 1) {
      setCurrentResourceIndex(currentResourceIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentResourceIndex > 0) {
      setCurrentResourceIndex(currentResourceIndex - 1);
    }
  };

  if (isPending || isLoading) {
    return <div>Loading...</div>;
  }

  const currentResource = resources?.[currentResourceIndex] ?? null;

  return (
    <div>
      <div className="font-roboto flex flex-col justify-between gap-8 py-10">
        <div className="bg-primary-100 flex justify-between items-center border border-b-4 border-primary-100 shadow-slate-300 shadow-md rounded-2xl py-10 px-20">
          <div className="flex-grow flex">
            <div className="flex flex-col text-center">
              <p className="font-poppins font-bold text-7xl">
                Hello {currentUser?.name}!
              </p>
              <p className="font-roboto text-xl font-light">
                It's good to see you again.
              </p>
            </div>
          </div>
          <LearningIcon className="absolute right-0 pl-10" />
        </div>

        <div className="flex items-center justify-between gap-4">
          {currentResource ? (
            <CurrentCourseCard
              key={currentResource.id}
              title={currentResource.title ?? "Untitled"}
              author={currentResource.author ?? "Unknown"}
              hours={currentResource.hours ?? "N/A"}
              id={currentResource.id ?? "unknown-id"}
            />
          ) : (
            <p>No resources available.</p>
          )}

          <div className="flex items-center gap-20">
            <button
              onClick={handlePrevious}
              disabled={currentResourceIndex === 0}
            >
              <BackIcon className="size-16" />
            </button>
            <button
              onClick={handleNext}
              disabled={
                resources ? currentResourceIndex >= resources.length - 1 : true
              }
            >
              <ForwardIcon className="size-16" />
            </button>
          </div>
        </div>
        {/* <Progress /> */}
        <CoursesLayout />
      </div>
    </div>
  );
}

export default HomePage;
