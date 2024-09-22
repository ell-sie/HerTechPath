interface ProgressCardProps {
    number: string,
    progress: string
  }

function ProgressCard({number, progress}: ProgressCardProps) {
  return (
    <div className="bg-primary-100 border-2 border-primary-100 rounded-2xl flex items-center gap-4 px-16 py-10">
        <p className="text-7xl font-poppins font-bold">{number}</p>
        <div className="flex flex-col gap-2 items-start font-roboto font-light">
        <p>Courses</p>
        <p>{progress}</p>
        </div>
    </div>
  )
}

export default ProgressCard