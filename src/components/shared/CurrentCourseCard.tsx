import QuestionIcon from "../../assets/QuestionIcon";
import Button from "./Button";
import BackIcon from "../../assets/BackIcon";
import ForwardIcon from "../../assets/ForwardIcon";

interface CurrentCourseCardProps {
  title: string;
  author: string;
}

function CurrentCourseCard({ title, author }: CurrentCourseCardProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="bg-primary-100 border border-b-4 border-primary-100 rounded-2xl flex justify-between gap-4 items-center p-4 w-full">
        <div className="bg-white p-4 border-white rounded-md">
          <QuestionIcon className="size-12" />
        </div>
        <div className="flex justify-between w-full items-center p-4">
          <div className="flex flex-col">
            <p className="font-poppins font-bold text-lg">{title}</p>
            <p className="font-roboto font-light">by {author}</p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1"><QuestionIcon className="size-12" /> <span className="text-3xl">%</span></div>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-20">
        <BackIcon className="size-16"/>
        <ForwardIcon className="size-16"/>
      </div>
    </div>
  );
}

export default CurrentCourseCard;
