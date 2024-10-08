import SearchBar from "../components/shared/SearchBar"
import ArrowRightIcon from "../assets/ArrowRightIcon"
import CourseCard from "../components/shared/CourseCard"

function CoursesPage() {
  return (
    <div className="flex flex-col gap-2 py-8">
        <div className="border-primary-100 border-b-2 flex fle-col p-4">
        <div className="flex w-full items-center justify-between">
        <div className="text-2xl font-bold font-poppins">Hi elsie !</div>
        <SearchBar/>
        </div>
        </div>
        <div className="flex flex-col gap-8 p-4">
        <div className="flex justify-between w-full">
            <div className="text-6xl font-bold font-poppins">My courses</div>
            <div className="flex text-stone-400 items-center gap-4">
            <p className="">See all</p>
            <ArrowRightIcon className="size-6 "/>
            </div>
            </div>
        <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-6 text-stone-400 font-poppins font-bold w-3/4">
            <p className="text-black">All Courses</p>
            <p>Active</p>
            <p>Upcoming</p>
            <p>Completed</p>
        </div>
            <CourseCard title="Javascript" author="Sir kimon" hour="6" minutes="40" rating="4.9"/>
            <CourseCard title="TailwindCss" author="Nelson" hour="2" minutes="30" rating="4.9"/>
            <CourseCard title="Python" author="Cynthia" hour="4" minutes="00" rating="4.9"/>
        </div>
    </div>   
    </div>
  )
}

export default CoursesPage