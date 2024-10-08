import QuestionIcon from "../../assets/QuestionIcon";

export default function AchievementCard() {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="bg-white p-2 border-white text-black rounded-md">
        <QuestionIcon className="size-8" />
      </div>
      <div className="flex flex-col">
        <p className="font-poppins font-semibold">achievement</p>
        <p className="font-roboto font-light">by author</p>
      </div>
      <div className="font-roboto font-thin">100%</div>
    </div>
  );
}
