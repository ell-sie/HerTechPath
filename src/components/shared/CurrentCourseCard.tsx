import { Link } from "react-router-dom";
import ClockIcon from "../../assets/Clock";
import Button from "./Button";

interface CurrentCourseCardProps {
  title: string;
  author: string;
  hours: string;
  id: string;
}

function CurrentCourseCard({
  title,
  author,
  hours,
  id,
}: CurrentCourseCardProps) {
  return (
    <div className="bg-primary-100 border border-b-4 border-primary-100 rounded-2xl flex justify-between gap-4 items-center p-8 w-full">
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
        <Button>Continue</Button>
      </Link>
    </div>
  );
}

export default CurrentCourseCard;
