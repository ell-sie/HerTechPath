import ClockIcon from "../../assets/Clock";
import FireIcon from "../../assets/FireIcon";
import Button from "./Button";
import QuestionIcon from "../../assets/QuestionIcon";

interface CourseCardProps {
    title: string,
    author: string,
    hour: string,
    minutes: string,
    rating: string,
  }

function CourseCard({ title, author, hour, minutes, rating }: CourseCardProps) {
  return (
    <div className="bg-primary-100 border border-b-4 border-primary-100 rounded-2xl flex justify-between items-center gap-4 p-4">
      <div className="bg-white p-4 border-white rounded-md">
          <QuestionIcon className="size-12" />
        </div>
      <div className="flex justify-between items-center p-4 w-full">
      <div className="flex flex-col">
            <p className="font-poppins font-bold text-lg">{title}</p>
            <p className="font-roboto font-light">by {author}</p>
          </div>
        <div className="flex gap-20 items-center">
        <div className="flex items-center gap-4">
          <ClockIcon className="size-8" />
          <span className="font-light">
            {hour}h {minutes}min
          </span>
        </div>
        <div className="flex items-center gap-4">
          <FireIcon className="size-8" />
          <span className="font-light">{rating}</span>
        </div>
        <Button>View course</Button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
