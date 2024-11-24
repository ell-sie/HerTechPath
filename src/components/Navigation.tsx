import { signOut } from "aws-amplify/auth";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";
import LogoutIcon from "../assets/LogoutIcon";
import MessageIcon from "../assets/MessageIcon";
import StudyIcon from "../assets/StudyIcon";
import UserIcon from "../assets/UserIcon";
import ResourceIcon from "../assets/ResourceIcon";
import PathIcon from "../assets/PathIcon";
import RegistrationIcon from "../assets/RegistrationIcon";

interface NavigationProps {
  singOut?: () => void;
}

function Navigation({ singOut }: NavigationProps) {
  return (
    <div className="bg-black sm:col-span-3 lg:col-span-2 border-2 border-black rounded-r-2xl h-screen text-white py-12 px-4 flex flex-col justify-between items-center text-center shadow-slate-700 shadow-md fixed left-0">
      <div className="font-poppins text-sm font-bold">HerTechPath</div>
      <div className="flex flex-col gap-20">
        <Link to="/">
        <RegistrationIcon className="size-6" />
        </Link>
        <Link to="/home">
          <HomeIcon className="size-6" />
        </Link>
        <Link to="/courses">
          <StudyIcon className="size-6" />
        </Link>
        <Link to="/profile">
          <UserIcon className="size-6" />
        </Link>
        <Link to="/discussions">
          <MessageIcon className="size-6" />
        </Link>
        <Link to="/resources">
          <ResourceIcon className="size-6" />
        </Link>
        <Link to="/paths">
          <PathIcon className="size-6" />
        </Link>
      </div>
      <div>
        {/* Check if logout exists before calling it */}
        <button onClick={singOut ? () => signOut() : undefined}>
          <LogoutIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
