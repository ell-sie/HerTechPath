import LearningIcon from "../assets/LearningIcon";
import CurrentCourseCard from "../components/shared/CurrentCourseCard";
import CoursesLayout from "../components/Layout/CoursesLayout";
import Progress from "../components/Progress";

function HomePage() {
  return (
    <div>
      <div className="font-roboto flex flex-col justify-between gap-8 py-10">
        <div className="bg-primary-100 flex justify-between items-center border border-b-4 border-primary-100 shadow-slate-300 shadow-md rounded-2xl py-10 px-20">
          <div className="flex-grow flex">
            <div className="flex flex-col text-center">
              <p className="font-poppins font-bold text-7xl">Hello Elsie!</p>
              <p className="font-roboto text-xl font-light">
                It's good to see you again.
              </p>
            </div>
          </div>
          <LearningIcon className="absolute right-0 pl-10" />
        </div>
        <CurrentCourseCard title="Introduction to AI" author="Elsie Wilson" />
        <Progress />
        <CoursesLayout />
      </div>
    </div>
  );
}

export default HomePage;
