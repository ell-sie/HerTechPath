import StudyIcon from "../assets/StudyIcon";
import HomeIcon from "../assets/HomeIcon";
import UserIcon from "../assets/UserIcon";
import MessageIcon from "../assets/MessageIcon";
import LogoutIcon from "../assets/LogoutIcon";
import LearningIcon from "../assets/LearningIcon";
import CurrentCourseCard from "../components/shared/CurrentCourseCard";
import CoursesLayout from "../components/Layout/CoursesLayout";
import Progress from "../components/Progress";


function HomePage() {
  return (
    <div className="grid grid-cols-10 h-screen gap-5 p-4">
      <div className="bg-black sm:col-span-2 lg:col-span-2 border border-b-2 border-black rounded-2xl text-white flex flex-col justify-between items-center py-20 text-center shadow-slate-700 shadow-md w-3/4">
        <div className="font-poppins text-sm font-bold">HerTechPath</div>
        <div className="flex flex-col gap-28">
          <HomeIcon className="size-6" />
          <StudyIcon className="size-6" />
          <UserIcon className="size-6" />
          <MessageIcon className="size-6" />
        </div>
        <div>
          <LogoutIcon className="size-6" />
        </div>
      </div>
      <div className="sm:col-span-8 lg:col-span-8 font-roboto flex flex-col justify-between gap-8 py-10">
        <div className="bg-primary-100 flex justify-between items-center border border-b-4 border-primary-100 shadow-slate-300 shadow-md rounded-2xl py-10 px-20">
          <div className="flex-grow flex">
            <div className="flex flex-col text-center">
              <p className="font-poppins font-bold text-7xl">Hello Elsie!</p>
              <p className="font-roboto text-xl font-light">It's good to see you again.</p>
            </div>
          </div>
          <LearningIcon className="absolute right-0 pl-10"/>
        </div>
        <CurrentCourseCard title="Introduction to AI" author="Elsie Wilson"/>
        <Progress/>
        <CoursesLayout/>
      </div>
    </div>
  );
}

export default HomePage;
