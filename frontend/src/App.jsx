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
    // default true so can access the dashboard without login
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        {/* GRUP PUBLIC (Landing, Login, Register) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* GRUP QUIZ */}
        <Route
          element={isAuthenticated ? <QuizLayout /> : <Navigate to="/login" />}
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
            isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />
          }
        >
          <Route path="/dashboard" element={<DashboardHome />} />
        </Route>

        {/* GRUP LEARNING */}
        <Route
          element={
            isAuthenticated ? <LearningLayout /> : <Navigate to="/login" />
          }
        >
          <Route path="/belajar/video/:id" element={<VisualLearningPage />} />
          <Route path="/belajar/materi/:id" element = {<ReadingLearningPage />} />
          {/* /belajar/materi/:id url parameternya(materi) itukah? */}

          {/* <Route path="/belajar/:id" element={<MaterialDetail />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//apa aja
