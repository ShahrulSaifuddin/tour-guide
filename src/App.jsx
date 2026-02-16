import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route
              path="/auth"
              element={
                <div className="p-8 text-center">Auth Page (Coming Soon)</div>
              }
            />
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
