import { useParams } from "react-router-dom";
import { useResourcesQuery } from "../hooks/resources";

function CourseDetailPage() {
  const { id } = useParams();
  const { data: resources } = useResourcesQuery();

  const resource = resources?.find((resource) => resource.id === id);

  if (!resource) {
    return <p>Resource not found.</p>;
  }

  return (
    <div className="flex flex-col justify-between gap-10 h-screen py-10">
      <div className="flex flex-col items-center gap-20">
        <div className="flex justify-between w-full">
          <div className="text-6xl font-bold font-poppins">
            {resource.title}
          </div>
          <p className="text-stone-400 text-xl font-roboto">
            Made by {resource.author}
          </p>
        </div>
        <div className="text-2xl font-roboto font-light">
          {resource.description}
        </div>
      </div>
      <div className="bg-black bg-opacity-20 text-white p-4 h-full rounded-md">
        {resource.link && (
          <iframe
            src={resource.link}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            className="w-full h-full"
          />
        )}
      </div>
      <div className="font-roboto font-semibold text-xl">Mark as done</div>
    </div>
  );
}

export default CourseDetailPage;
