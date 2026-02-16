import { Routes, Route, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const MyBookingsPage = lazy(() => import("./pages/MyBookingsPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const DestinationsPage = lazy(() => import("./pages/DestinationsPage"));
const DestinationDetailsPage = lazy(
  () => import("./pages/DestinationDetailsPage"),
);
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <AuthProvider>
        <Layout>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-dark-900">
                <Loader2 className="w-10 h-10 animate-spin text-primary-500" />
              </div>
            }
          >
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageWrapper>
                      <HomePage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/destinations"
                  element={
                    <PageWrapper>
                      <DestinationsPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/destinations/:slug"
                  element={
                    <PageWrapper>
                      <DestinationDetailsPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/packages"
                  element={
                    <div className="p-8 text-center">
                      Packages Page (Coming Soon)
                    </div>
                  }
                />
                <Route
                  path="/calendar"
                  element={
                    <PageWrapper>
                      <CalendarPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/bookings"
                  element={
                    <PageWrapper>
                      <MyBookingsPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/feedback"
                  element={
                    <PageWrapper>
                      <FeedbackPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/auth"
                  element={
                    <PageWrapper>
                      <AuthPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageWrapper>
                      <AboutPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <PageWrapper>
                      <AdminDashboard />
                    </PageWrapper>
                  }
                />
                <Route
                  path="*"
                  element={
                    <div className="p-8 text-center">404 - Not Found</div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Layout>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);
