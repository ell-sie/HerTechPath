import { Link } from "react-router-dom";
import ClockIcon from "../../assets/Clock";
import Button from "./Button";

interface CourseCardProps {
  title: string;
  author: string;
  hours: string;
  id: string;
}

function CourseCard({ title, author, hours, id }: CourseCardProps) {
  return (
    <div className="bg-primary-100 border border-b-4 border-primary-100 rounded-2xl flex justify-between items-center gap-4 p-8">
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <p className="font-poppins font-bold text-lg">{title}</p>
          <p className="font-roboto font-light">by {author}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ClockIcon className="size-8" />
        <span className="font-light">{hours}</span>
      </div>
      <Link to={`/course/${id}`}>
        <Button>View course</Button>
      </Link>
    </div>
  );
}

export default CourseCard;
