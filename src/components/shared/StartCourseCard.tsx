import StartIcon from "../../assets/StartIcon";

export default function StartCourseCard() {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="bg-black p-2 border-black rounded-full items-center">
        <StartIcon className="size-8" />
      </div>
      <div className="flex flex-col text-black">
        <p className="font-poppins font-semibold">achievement</p>
        <p className="font-roboto font-light">by author</p>
      </div>
      <div className="font-roboto font-thin text-black">3 Hrs</div>
    </div>
  );
}
