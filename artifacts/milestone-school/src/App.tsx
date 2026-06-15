import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
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
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import DisclaimerPage from "@/pages/DisclaimerPage";
import PublicDisclosurePage from "@/pages/PublicDisclosurePage";
import TeacherApplyPage from "@/pages/TeacherApplyPage";
import PageLoader from "@/components/ui/PageLoader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhoneButton from "@/components/ui/PhoneButton";
import AIGuide from "@/components/ui/AIGuide";
import WelcomeModal from "@/components/ui/WelcomeModal";
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
      <Route path="/faculty/apply" component={TeacherApplyPage} />
      <Route path="/faculty" component={FacultyPage} />
      <Route path="/achievements" component={AchievementsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/admissions" component={AdmissionsPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/disclaimer" component={DisclaimerPage} />
      <Route path="/public-disclosure" component={PublicDisclosurePage} />
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
            <Navbar />
            <Router />
            <AIGuide />
          </WouterRouter>
          <WhatsAppButton />
          <PhoneButton />
          <WelcomeModal />
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
      </PaletteProvider>
    </QueryClientProvider>
  );
}

export default App;
