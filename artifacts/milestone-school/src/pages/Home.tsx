import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Lazy load sections for better performance
const VideoHero = lazy(() => import("@/components/sections/VideoHero"));
const Hero = lazy(() => import("@/components/sections/Hero"));
const About = lazy(() => import("@/components/sections/About"));
const Stats = lazy(() => import("@/components/sections/Stats"));
const Academics = lazy(() => import("@/components/sections/Academics"));
const Facilities = lazy(() => import("@/components/sections/Facilities"));
const WhyChooseUs = lazy(() => import("@/components/sections/WhyChooseUs"));
const Faculty = lazy(() => import("@/components/sections/Faculty"));
const ClanSystem = lazy(() => import("@/components/sections/ClanSystem"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const AdmissionsForm = lazy(() => import("@/components/sections/AdmissionsForm"));
const Contact = lazy(() => import("@/components/sections/Contact"));

const SectionSkeleton = () => (
  <div className="w-full h-[50vh] flex items-center justify-center bg-muted/20 animate-pulse">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />
      
      <main>
        <Suspense fallback={<SectionSkeleton />}>
          <VideoHero />
          <Hero />
          <About />
          <Stats />
          <Academics />
          <Facilities />
          <WhyChooseUs />
          <Faculty />
          <ClanSystem />
          <Testimonials />
          <AdmissionsForm />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}