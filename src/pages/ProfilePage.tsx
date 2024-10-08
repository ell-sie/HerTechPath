import QuestionIcon from "../assets/QuestionIcon";
import AddIcon from "../assets/AddIcon";
import RocketIcon from "../assets/Rocket";
import AchievementCard from "../components/shared/AchievementCard";
import PieChartWithCenterLabel from "../components/PieChartWithCenterLabel";
import StartCourseCard from "../components/shared/StartCourseCard";

function ProfilePage() {
  return (
    <div className="flex flex-col h-screen py-8">
      <div className="bg-primary-100/30 rounded-2xl border-2 border-primary-100 flex justify-between gap-16 items-center p-20 ">
        <QuestionIcon className=" size-60" />
        <div className="flex items-center gap-10">
          <p className="text-9xl font-poppins font-bold">87</p>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold font-poppins">
              Your learning level points
            </p>
            <p className="text-xl font-roboto font-thin">
              Elsie, you did a great job this week!
            </p>
          </div>
          <div className="flex text-5xl font-poppins ">
            <p className="font-bold">80</p>
            <p className="text-stone-300 font-light">|</p>
            <p className="font-bold">100</p>
          </div>
        </div>
      </div>
      <div className="bg-black rounded-2xl h-full border-2 border-black/10 text-primary-100 flex justify-between gap-20 w-full px-20 py-10">
        <div className="flex flex-col">
          <button className=" absolute top-[408px] flex gap-3 items-center font-semibold bg-primary-100 text-black p-3 border-4 border-primary-100 shadow-lg shadow-current rounded-full font-poppins">
            Improve your skills <AddIcon className="size-6" />
          </button>
          <div className="flex flex-col gap-3 text-primary-100 ">
            <div className="flex text-lg justify-between items-center font-poppins font-medium border-b-2 py-2">
              <p>My achievements</p>
              <RocketIcon className="size-6" />
            </div>
            <AchievementCard/>
            <AchievementCard/>
            <AchievementCard/>
            <AchievementCard/>
          </div>
        </div>
        <div className="flex gap-8 absolute right-36 top-96 ">
        <div className="bg-primary-100 border-2 rounded-2xl p-4 border-primary-100 shadow-sm shadow-slate-300 flex flex-col gap-5 items-center">
        <div className="flex text-lg justify-between items-center text-black font-poppins font-medium border-b-2 py-2">
              <p>My achievements</p>
              <RocketIcon className="size-6" />
            </div>
          <PieChartWithCenterLabel/>
        </div>
        <div className="bg-primary-100  border-primary-100 shadow-sm shadow-slate-300 border-2 rounded-2xl flex flex-col gap-3 text-primary-100 py-4 px-6 ">
        <div className="flex text-lg justify-between items-center font-poppins text-black font-medium border-b-2 py-2">
              <p>My achievements</p>
              <RocketIcon className="size-6" />
            </div>
          <StartCourseCard/>
          <StartCourseCard/>
          <StartCourseCard/>
          <StartCourseCard/>
          <StartCourseCard/>
        </div>
      </div>
        </div>
    </div>
  );
}

export default ProfilePage;
