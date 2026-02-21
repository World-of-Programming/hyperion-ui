import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "@hyperion/app/auth/ui/auth-page";
import AdminPage from "@hyperion/app/admin/ui/admin-page";
import LandingPage from "@hyperion/app/lading/ui/landing-page"
import { ProtectedRoute } from "@hyperion/config/router/protected-route";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<AdminPage />} />} />
      </Routes>
    </Router >
  )
}

export default App
