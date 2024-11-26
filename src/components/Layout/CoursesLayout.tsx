import { usePathsQuery } from "../../hooks/path";
import { useAuthContext } from "../../providers/AuthProvider";
import PathCard from "../shared/PathCard";
import { SetStateAction, useState } from "react";

function CoursesLayout() {
  const {
    user: { user },
  } = useAuthContext();
  const { data: paths, isPending } = usePathsQuery();

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter: SetStateAction<string>) => {
    setFilter(newFilter);
  };

  const userPaths = paths?.filter((path) => path.pathUserId === user?.id);

  const filteredPaths = () => {
    if (filter === "newest") {
      return [...userPaths].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    return userPaths;
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="font-poppins text-2xl font-bold">Paths</div>
      <div className="flex items-center justify-between gap-6 font-poppins font-bold w-3/4">
        <button
          className={`text-black ${
            filter === "all" ? "font-bold" : "text-stone-400"
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All Paths
        </button>
        <button
          className={`text-black ${
            filter === "newest" ? "font-bold" : "text-stone-400"
          }`}
          onClick={() => handleFilterChange("newest")}
        >
          The Newest
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {filteredPaths().length > 0 ? (
          filteredPaths().map((path) => (
            <PathCard
              key={path.id || path.createdAt}
              title={path.title ?? "Untitled"}
              id={path.id}
              description={path.description ?? "No description"}
            />
          ))
        ) : (
          <p>No paths available for this user.</p>
        )}
      </div>
    </div>
  );
}

export default CoursesLayout;
