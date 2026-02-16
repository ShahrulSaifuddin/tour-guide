import Header from "./Header";
import Footer from "./Footer";
import GalaxyBackground from "./ui/GalaxyBackground";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <GalaxyBackground />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
