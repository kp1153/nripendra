import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import WhySolarSection from "../components/WhySolarSection";
import ProcessSection from "../components/ProcessSection";
import ContactSection from "../components/ContactSection";
import ContactSection from "../components/FranchiseSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div id="hero">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="products">
        <ProductsSection />
      </div>

      <div id="why-solar">
        <WhySolarSection />
      </div>

      <div id="process">
        <ProcessSection />
      </div>
        <div id="franchise">
        <FranchiseSection />
      </div>
      

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
