import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import WhySolarSection from "../components/WhySolarSection";
import ProcessSection from "../components/ProcessSection";
import FranchiseSection from "../components/FranchiseSection";
import BusinessIncomeSection from "../components/BusinessIncomeSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhySolarSection />
      <ProcessSection />
      <FranchiseSection />
      <BusinessIncomeSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}