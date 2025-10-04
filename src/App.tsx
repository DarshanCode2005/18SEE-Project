import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Committee from "./pages/Committee";
import RegistrationSoon from "./pages/RegistrationSoon";
import { CMTInstructions } from "./pages/CMTInstructions";

const queryClient = new QueryClient();

// Component to handle hash scrolling
const ScrollToHashElement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      // If we're on a page other than home and there's a hash, redirect to home with hash
      const rootUrl = import.meta.env.VITE_ROOT_URL || "";
      const homePath = rootUrl ? rootUrl + "/" : "/";

      if (location.pathname !== homePath) {
        navigate(homePath + location.hash, { replace: true });
        return;
      }

      // If we're on home page, scroll to the element
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }
    }
  }, [location, navigate]);

  return null;
};

const App = () => {
  const rootUrl = import.meta.env.VITE_ROOT_URL || "";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHashElement />
          <Routes>
            <Route path={rootUrl ? rootUrl + "/" : "/"} element={<Index />} />
            <Route path={rootUrl ? rootUrl + "/schedule" : "/schedule"} element={<Schedule />} />
            <Route path={rootUrl ? rootUrl + "/committee" : "/committee"} element={<Committee />} />
            <Route path={rootUrl ? rootUrl + "/registration-soon" : "/registration-soon"} element={<RegistrationSoon />} />
            <Route path={rootUrl ? rootUrl + "/cmt-instructions" : "/cmt-instructions"} element={<CMTInstructions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path={rootUrl ? rootUrl + "/*" : "/*"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
