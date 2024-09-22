import ProgressCard from "./shared/ProgressCard"

function Progress() {
  return (
    <div className="flex items-center gap-8">
        <ProgressCard number="11" progress="completed"/>
        <ProgressCard number="4" progress="in progress"/>
    </div>
  )
}

export default Progress