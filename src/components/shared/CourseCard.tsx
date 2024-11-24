import ClockIcon from "../../assets/Clock";
import QuestionIcon from "../../assets/QuestionIcon";
import Button from "./Button";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  author: string;
  hours: string;
  id: string;
}

function CourseCard({ title, author, hours,id }: CourseCardProps) {
  return (
    <div className="bg-primary-100 border border-b-4 border-primary-100 rounded-2xl flex justify-between items-center gap-4 p-4">
      <div className="flex items-center gap-6">
        <div className="bg-white p-4 border-white rounded-md">
          <QuestionIcon className="size-12" />
        </div>
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
