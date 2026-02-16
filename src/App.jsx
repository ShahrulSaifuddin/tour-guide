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
const PackagesPage = lazy(() => import("./pages/PackagesPage"));
const PackageDetailsPage = lazy(() => import("./pages/PackageDetailsPage"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

// Import Skeletons
import { HomeSkeleton } from "./components/skeletons/HomeSkeleton";
import { AboutSkeleton } from "./components/skeletons/AboutSkeleton";
import { Skeleton } from "./components/ui/Skeleton"; // Fallback for others

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <AuthProvider>
        <Layout>
          {/* Main Suspense for code splitting with a generic minimal fallback if needed, 
              but specific pages will have their own Suspense to show layout skeletons immediately. */}
          <Suspense
            fallback={
              // Minimal global fallback if no specific skeleton catches it
              <div className="flex justify-center items-center h-screen bg-transparent">
                <Skeleton className="w-full h-full opacity-10" />
              </div>
            }
          >
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<HomeSkeleton />}>
                      <PageWrapper>
                        <HomePage />
                      </PageWrapper>
                    </Suspense>
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
                    <PageWrapper>
                      <PackagesPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/packages/:slug"
                  element={
                    <PageWrapper>
                      <PackageDetailsPage />
                    </PageWrapper>
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
                    <Suspense fallback={<AboutSkeleton />}>
                      <PageWrapper>
                        <AboutPage />
                      </PageWrapper>
                    </Suspense>
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
