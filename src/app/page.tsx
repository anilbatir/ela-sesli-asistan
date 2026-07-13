import Benefits from "@/components/landing/Benefits";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SectorSelector from "@/components/landing/SectorSelector";
import WaveDivider from "@/components/landing/WaveDivider";
import { LanguageProvider } from "@/lib/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex flex-col flex-1">
          <Hero />
          <WaveDivider />
          <SectorSelector />
          <Benefits />
          <WaveDivider />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
