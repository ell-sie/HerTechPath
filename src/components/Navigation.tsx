import { Link } from 'react-router-dom'
import HomeIcon from '../assets/HomeIcon'
import StudyIcon from '../assets/StudyIcon'
import UserIcon from '../assets/UserIcon'
import MessageIcon from '../assets/MessageIcon'
import LogoutIcon from '../assets/LogoutIcon'

function Navigation() {
  return (
    <div className="bg-black sm:col-span-3 lg:col-span-2 border-2 border-black rounded-r-2xl h-screen text-white py-12 px-4 flex flex-col justify-between items-center text-center shadow-slate-700 shadow-md fixed left-0">
        <div className="font-poppins text-sm font-bold">HerTechPath</div>
        <div className="flex flex-col gap-20">
        <Link to="/home">
          <HomeIcon className="size-6" />
        </Link>
        <Link to="/courses">
          <StudyIcon className="size-6" />
        </Link>
        <Link to="/profile">
          <UserIcon className="size-6" />
        </Link>
        <Link to="/messages">
          <MessageIcon className="size-6" />
        </Link>
      </div>
      <div>
        <Link to="/logout">
          <LogoutIcon className="size-6" />
        </Link>
      </div>
      </div>
  )
}

export default Navigation