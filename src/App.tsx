import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import config from "./amplifyconfiguration.json";
import Navigation from "./components/Navigation";
import QueryClient from "./context/QueryClient.ts";
import CourseDetailPage from "./pages/CourseDetailPage";
import CoursesPage from "./pages/CoursesPage.tsx";
import DiscussionPage from "./pages/DiscussionPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import ResourcesPage from "./pages/ResourcePage.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";

export const client = generateClient();
Amplify.configure(config);
function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <Authenticator>
        {({ signOut }) => (
          <AuthProvider>
            <Router>
              <div className="grid grid-cols-10 h-screen gap-10 ml-48 w-full">
                <Navigation singOut={signOut} />
                <div className="sm:col-span-7 lg:col-span-8">
                  <Routes>
                    <Route path="/" element={<RegistrationPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/course/:id" element={<CourseDetailPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/discussions" element={<DiscussionPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                  </Routes>
                </div>
              </div>
            </Router>
          </AuthProvider>
        )}
      </Authenticator>
    </QueryClientProvider>
  );
}

export default App;
