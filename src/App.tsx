import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ProfilePage from "./pages/ProfilePage";
import DiscussionPage from "./pages/DiscussionPage";
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { generateClient } from "aws-amplify/api";
import { QueryClientProvider } from "@tanstack/react-query";
import QueryClient from "./context/QueryClient.ts";
import RegistrationPage from "./pages/RegistrationPage.tsx";

// Graphql client for Amplify
export const client = generateClient({ authMode: "userPool" });
Amplify.configure(awsExports);

function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <Authenticator>
        {({ signOut }) => (
          <>
            <Router>
              <div className="grid grid-cols-10 h-screen gap-10 ml-48 w-full">
                <Navigation singOut={signOut} />
                <div className="sm:col-span-7 lg:col-span-8">
                  <Routes>
                    <Route path="/" element={<RegistrationPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/discussions" element={<DiscussionPage />} />
                  </Routes>
                </div>
              </div>
            </Router>
          </>
        )}
      </Authenticator>
    </QueryClientProvider>
  );
}

export default App;
