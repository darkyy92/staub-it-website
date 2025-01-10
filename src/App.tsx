import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ITOutsourcing from "./pages/ITOutsourcing";
import Cybersecurity from "./pages/Cybersecurity";
import GoogleWorkspace from "./pages/GoogleWorkspace";
import CloudBackup from "./pages/CloudBackup";
import Webdesign from "./pages/Webdesign";
import AISolutions from "./pages/AISolutions";
import Education from "./pages/Education";
import Prices from "./pages/Prices";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-dark flex flex-col">
          <ScrollToTop />
          <Toaster />
          <Sonner />
          <Navigation />
          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/it-outsourcing" element={<ITOutsourcing />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/google-workspace" element={<GoogleWorkspace />} />
              <Route path="/services/cloud-backup" element={<CloudBackup />} />
              <Route path="/services/webdesign" element={<Webdesign />} />
              <Route path="/services/ai-solutions" element={<AISolutions />} />
              <Route path="/services/education" element={<Education />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;