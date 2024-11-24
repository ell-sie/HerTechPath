import SearchBar from "../components/shared/SearchBar"
import ArrowRightIcon from "../assets/ArrowRightIcon"
import CourseCard from "../components/shared/CourseCard"
import { useResourcesQuery } from "../hooks/resources"

function CoursesPage() {
  const {data: resources, isPending} = useResourcesQuery()
  
  return (
    <div className="flex flex-col gap-2 py-10">
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
        <div className="flex items-center gap-10 text-stone-400 font-poppins font-bold w-3/4">
            <p className="text-black">All Courses</p>
            <p>Completed</p>
        </div>
        <div className="flex flex-col gap-10">
          {isPending
            ? "Loading..."
            : resources?.map(resource => (
              <CourseCard
                key = {resource.id || resource.createdAt}
                title = {resource.title ?? "Untitled"}
                author = {resource.author ?? "Unknown"}
                hours = {resource.hours ?? "N/A"}
                id = {resource.id}
              />
            ))
          }
        </div>
        </div>
    </div>   
    </div>
  )
}

export default CoursesPage