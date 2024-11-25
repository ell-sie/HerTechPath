import { useParams, useNavigate } from "react-router-dom";
import { useResourcesQuery } from "../hooks/resources";
import Button from "../components/shared/Button";

function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: resources } = useResourcesQuery();

  const resource = resources?.find((resource) => resource.id === id);

  const handlePreviousClick = () => {
    navigate(-1);
  }

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
      <div className="flex justify-between w-full">
        <Button onClick={handlePreviousClick}>
          Previous
        </Button>
        {/* <div className="font-roboto font-semibold text-xl">Mark as done</div> */}
      </div>
    </div>
  );
}

export default CourseDetailPage;
