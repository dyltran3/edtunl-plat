import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingSuccess from './pages/OnboardingSuccess';
import SignIn from './pages/SignIn';
import InterestSelection from './pages/InterestSelection';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/success" element={<OnboardingSuccess />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/interests" element={<InterestSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
