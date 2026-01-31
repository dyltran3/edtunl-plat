import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const OnboardingSuccess = lazy(() => import("./pages/OnboardingSuccess"));
const SignIn = lazy(() => import("./pages/SignIn"));
const InterestSelection = lazy(() => import("./pages/InterestSelection"));
const CourseViewer = lazy(() => import("./pages/CourseViewer"));

const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="size-12 bg-primary rounded-full"></div>
      <p className="text-primary font-bold animate-bounce">EdTunl Platform...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Toaster position="top-center" />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          
          <Route 
            path="/success" 
            element={
              <ProtectedRoute>
                <OnboardingSuccess />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/interests" 
            element={
              <ProtectedRoute>
                <InterestSelection />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/course/:courseId" 
            element={
              <ProtectedRoute>
                <CourseViewer />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
