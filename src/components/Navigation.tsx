import { signOut } from "aws-amplify/auth";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";
import LogoutIcon from "../assets/LogoutIcon";
import MessageIcon from "../assets/MessageIcon";
import RegistrationIcon from "../assets/RegistrationIcon";
import ResourceIcon from "../assets/ResourceIcon";
import StudyIcon from "../assets/StudyIcon";
import useAutoUserDispatch from "../hooks/useAutoUserDispatch";

interface NavigationProps {
  singOut?: () => void;
}

function Navigation({ singOut }: NavigationProps) {
  useAutoUserDispatch();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-black sm:col-span-3 lg:col-span-2 border-2 border-black rounded-r-2xl h-screen text-white py-12 px-4 flex flex-col justify-between items-center text-center shadow-slate-700 shadow-md fixed left-0">
      <div className="font-poppins text-sm font-bold">HerTechPath</div>
      <div className="flex flex-col gap-20">
        <Link
          to="/"
          className={`size-6 ${isActive("/") ? "text-yellow-400" : ""}`}
        >
          <RegistrationIcon />
        </Link>
        <Link
          to="/home"
          className={`size-6 ${isActive("/home") ? "text-yellow-400" : ""}`}
        >
          <HomeIcon />
        </Link>
        <Link
          to="/courses"
          className={`size-6 ${isActive("/courses") ? "text-yellow-400" : ""}`}
        >
          <StudyIcon />
        </Link>
        <Link
          to="/discussions"
          className={`size-6 ${
            isActive("/discussions") ? "text-yellow-400" : ""
          }`}
        >
          <MessageIcon />
        </Link>
        <Link
          to="/resources"
          className={`size-6 ${
            isActive("/resources") ? "text-yellow-400" : ""
          }`}
        >
          <ResourceIcon />
        </Link>
      </div>
      <div>
        <button onClick={singOut ? () => signOut() : undefined}>
          <LogoutIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
