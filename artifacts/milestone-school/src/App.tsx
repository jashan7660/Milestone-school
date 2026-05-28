import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import GalleryPage from "@/pages/Gallery";
import AboutPage from "@/pages/AboutPage";
import AcademicsPage from "@/pages/AcademicsPage";
import FacilitiesPage from "@/pages/FacilitiesPage";
import FacultyPage from "@/pages/FacultyPage";
import AchievementsPage from "@/pages/AchievementsPage";
import OurStoryPage from "@/pages/OurStoryPage";
import OurDirectorsPage from "@/pages/OurDirectorsPage";
import DivisionsPage from "@/pages/DivisionsPage";
import TieupsPage from "@/pages/TieupsPage";
import AdmissionsPage from "@/pages/AdmissionsPage";
import PageLoader from "@/components/ui/PageLoader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhoneButton from "@/components/ui/PhoneButton";
import AIGuide from "@/components/ui/AIGuide";
import { LanguageProvider } from "@/context/LanguageContext";
import { PaletteProvider } from "@/context/PaletteContext";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about/story" component={OurStoryPage} />
      <Route path="/about/directors" component={OurDirectorsPage} />
      <Route path="/about/divisions" component={DivisionsPage} />
      <Route path="/about/tieups" component={TieupsPage} />
      <Route path="/about" component={OurStoryPage} />
      <Route path="/academics" component={AcademicsPage} />
      <Route path="/facilities" component={FacilitiesPage} />
      <Route path="/faculty" component={FacultyPage} />
      <Route path="/achievements" component={AchievementsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/admissions" component={AdmissionsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaletteProvider>
      <LanguageProvider>
        <TooltipProvider>
          <PageLoader />
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
            <AIGuide />
          </WouterRouter>
          <WhatsAppButton />
          <PhoneButton />
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
      </PaletteProvider>
    </QueryClientProvider>
  );
}

export default App;
