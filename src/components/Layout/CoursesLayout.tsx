import CourseCard from "../shared/CourseCard"


function CoursesLayout() {
  return (
    <div className="flex flex-col gap-8">
        <div className="font-poppins text-2xl font-bold">Courses</div>
        <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-6 text-stone-400 font-poppins font-bold w-3/4">
            <p className="text-black">All Courses</p>
            <p>The Newest</p>
            <p>Top Rated</p>
            <p>Most Popular</p>
        </div>
            <CourseCard title="Javascript" author="Sir kimon" hour="6" minutes="40" rating="4.9"/>
            <CourseCard title="TailwindCss" author="Nelson" hour="2" minutes="30" rating="4.9"/>
            <CourseCard title="Python" author="Cynthia" hour="4" minutes="00" rating="4.9"/>
        </div>
    </div>
  )
}

export default CoursesLayout