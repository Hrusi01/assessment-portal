import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignupHub from "./pages/SignupHub";
import IndividualRegistration from "./pages/IndividualRegistration";
import StudentRegistration from "./pages/StudentRegistration";
import CompanyRegistration from "./pages/CompanyRegistration";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import SeniorDashboard from "./pages/SeniorDashboard";
import CandidateInfo from "./pages/CandidateInfo";
import CreateJD from "./pages/CreateJD";
import MapCV from "./pages/MapCV";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupHub />} />
        <Route path="/register/individual" element={<IndividualRegistration />} />
        <Route path="/register/student" element={<StudentRegistration />} />
        <Route path="/register/company" element={<CompanyRegistration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/recruiter" element={<RecruiterDashboard />} />
        <Route path="/dashboard/senior" element={<SeniorDashboard />} />
        <Route path="/candidate/:id" element={<CandidateInfo />} />
        <Route path="/create-jd" element={<CreateJD />} />
        <Route path="/map-cv" element={<MapCV />} />
      </Routes>
    </BrowserRouter>
  );
}
