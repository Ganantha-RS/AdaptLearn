import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import Layouts
import MainLayout from "./layouts/MainLayout";
import QuizLayout from "./layouts/QuizLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LearningLayout from "./layouts/LearningLayout";

// Import Pages
import Landing from "./pages/public/Landing";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import DashboardHome from "./pages/dashboard/DashboardHome";
import MaterialDetail from "./pages/learning/MaterialDetail";
import VisualLearningPage from "./pages/learning/VisualLearningPage";
import ReadingLearningPage from "./pages/learning/ReadingLearningPage";
import WelcomeScreen from "./pages/quiz/WelcomeScreen";
import StyleIdentification from "./pages/quiz/StyleIdentification";
import AssessmentLevel from "./pages/quiz/AssessmentLevel";
import AnalysisLoading from "./pages/quiz/AnalysisLoading";
import QuizResult from "./pages/quiz/QuizResult";

function App() {
  const isAuthenticated = !!localStorage.getItem("userSession") || !!sessionStorage.getItem("userSession");
  
  const getProfile = () => {
    const profile = localStorage.getItem("userProfile") || sessionStorage.getItem("userProfile");
    return profile ? JSON.parse(profile) : null;
  };

  const profile = getProfile();
  const needsAssessment = profile?.needs_reassessment === true;
  const isNewUser = !profile?.skill_level || !profile?.learning_style;

  return (
    <BrowserRouter>
      <Routes>
        {/* GRUP PUBLIC (Landing, Login, Register) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={isAuthenticated ? (isNewUser || needsAssessment ? <Navigate to="/welcome" /> : <Navigate to="/dashboard" />) : <Login />} />
          <Route path="/register" element={isAuthenticated ? (isNewUser || needsAssessment ? <Navigate to="/welcome" /> : <Navigate to="/dashboard" />) : <Register />} />
        </Route>

        {/* GRUP QUIZ */}
        <Route
          element={
            !isAuthenticated ? (
              <Navigate to="/login" />
            ) : (isNewUser || needsAssessment) ? (
              <QuizLayout />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        >
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/quiz-style" element={<StyleIdentification />} />
          <Route path="/quiz-level" element={<AssessmentLevel />} />
          <Route path="/analyzing" element={<AnalysisLoading />} />
          <Route path="/quiz-result" element={<QuizResult />} />
        </Route>

        {/* GRUP DASHBOARD */}
        <Route
          element={
            !isAuthenticated ? (
              <Navigate to="/login" />
            ) : needsAssessment ? (
              <Navigate to="/welcome" />
            ) : (
              <DashboardLayout />
            )
          }
        >
          <Route path="/dashboard" element={<DashboardHome />} />
        </Route>

        {/* GRUP LEARNING */}
        <Route
          element={
            !isAuthenticated ? (
              <Navigate to="/login" />
            ) : needsAssessment ? (
              <Navigate to="/welcome" />
            ) : (
              <LearningLayout />
            )
          }
        >
          <Route path="/belajar/video/:videoId" element={<VisualLearningPage />} />
          <Route path="/belajar/materi/:materiId" element={<ReadingLearningPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//apa aja
