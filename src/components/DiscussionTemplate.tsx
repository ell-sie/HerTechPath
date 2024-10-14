import UserIcon from "../assets/UserIcon";
import Button from "./shared/Button";

interface DiscussionsProps {
  title: string;
  Discussion: string;
}
function DiscussionTemplate({ title, Discussion }: DiscussionsProps) {
  return (
    <div className="bg-primary-100 border border-b-4 border-primary-100 rounded-2xl flex justify-between items-center gap-4 p-4">
      <div className="bg-black p-4 border-black rounded-full">
        <UserIcon className="size-12 text-white" />
      </div>
      <div className="flex justify-between items-center p-4 w-full">
        <div className="flex flex-col">
          <p className="font-poppins font-bold text-lg">{title}</p>
          <p className="font-roboto font-light">{Discussion}</p>
        </div>
          <Button>Answers</Button>
        </div>
      </div>
  )
}

export default DiscussionTemplate