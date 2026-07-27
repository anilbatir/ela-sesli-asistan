import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import SectorDemo from "@/components/sections/sector-demo";
import ElaSection from "@/components/sections/ela-section";
import ElaShowcase from "@/components/sections/ela-showcase";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Stats from "@/components/sections/stats";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectorDemo />
        <ElaSection />
        <ElaShowcase />
        <Services />
        <Process />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
