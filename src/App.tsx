
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignUpOtp from './pages/SignUpOtp';
import SignIn from './pages/SignIn';
import SignInOtp from './pages/SignInOtp';
import Welcome from './pages/Welcome';
import JobPath from './pages/JobPath';
import Survey from './pages/Survey';
import ReportView from './pages/ReportView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-otp" element={<SignUpOtp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin-otp" element={<SignInOtp />} />

        {/* Post-Auth Flow */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/job-path" element={<JobPath />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/report/:id" element={<ReportView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
