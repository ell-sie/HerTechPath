import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Router>
      <div className="grid grid-cols-10 h-screen gap-10 ml-48 w-full">
        <Navigation />
        <div className="sm:col-span-7 lg:col-span-8">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
