import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/bookings" element={<MyBookingsPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route
              path="*"
              element={<div className="p-8 text-center">404 - Not Found</div>}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
