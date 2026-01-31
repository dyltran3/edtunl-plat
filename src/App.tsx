import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingSuccess from './pages/OnboardingSuccess';
import SignIn from './pages/SignIn';
import InterestSelection from './pages/InterestSelection';
import CalcIIStudyRoom from './pages/CalcIIStudyRoom';
import PomodoroStudyRoom from './pages/PomodoroStudyRoom';
import LearningDashboard from './pages/LearningDashboard';
import Leaderboard from './pages/Leaderboard';
import LearningHub from './pages/LearningHub';
import StudentProfile from './pages/StudentProfile';
import InteractiveWhiteboard from './pages/InteractiveWhiteboard';
import PomodoroEnhancedRoom from './pages/PomodoroEnhancedRoom';
import CollaborativeRoom from './pages/CollaborativeRoom';
import LeaderboardWidgetRoom from './pages/LeaderboardWidgetRoom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/success" element={<OnboardingSuccess />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/interests" element={<InterestSelection />} />

        {/* New Pages based on Design Reference */}
        <Route path="/study/calc-ii" element={<CalcIIStudyRoom />} />
        <Route path="/study/pomodoro" element={<PomodoroStudyRoom />} />
        <Route path="/dashboard" element={<LearningDashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/hub" element={<LearningHub />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/study/whiteboard" element={<InteractiveWhiteboard />} />
        <Route path="/study/pomodoro-enhanced" element={<PomodoroEnhancedRoom />} />
        <Route path="/study/collaborative" element={<CollaborativeRoom />} />
        <Route path="/study/leaderboard-widget" element={<LeaderboardWidgetRoom />} />
      </Routes>
    </Router>
  );
};

export default App;
