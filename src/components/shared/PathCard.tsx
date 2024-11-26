import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import Button from "./Button";

interface PathCardProps {
  title: string;
  id: string;
  description: string;
}

function PathCard({ title, description }: PathCardProps) {
  return (
    <div className="bg-primary-100 border border-b-4 border-primary-100 rounded-2xl p-8 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <div className="font-poppins font-bold text-lg">{title}</div>
        </div>
      </div>
      <div className="font-roboto font-light">
        <Markdown>{description}</Markdown>
      </div>
      <div className="flex justify-between w-full">
        <div></div>
        <Link to={`/courses`}>
          <Button>View Path</Button>
        </Link>
      </div>
    </div>
  );
}

export default PathCard;
