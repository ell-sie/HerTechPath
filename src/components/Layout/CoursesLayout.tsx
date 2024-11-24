import CourseCard from "../shared/CourseCard";

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
        <CourseCard id="1" title="Javascript" author="Sir kimon" hours="6" />
        <CourseCard id="2" title="TailwindCss" author="Nelson" hours="2" />
        <CourseCard id="3" title="Python" author="Cynthia" hours="4" />
      </div>
    </div>
  );
}

export default CoursesLayout;
