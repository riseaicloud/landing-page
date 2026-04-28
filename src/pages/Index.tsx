import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProductRecommendation from "@/components/landing/ProductRecommendation";
import Advantages from "@/components/landing/Advantages";
import ServiceNeeds from "@/components/landing/ServiceNeeds";
import AIProcess from "@/components/landing/AIProcess";
import CaseStudy from "@/components/landing/CaseStudy";
import ServiceCards from "@/components/landing/ServiceCards";
import CtaBanner from "@/components/landing/Promotions";
import Footer from "@/components/landing/Footer";

/**
 * 首页
 * 基石智算商业化首页，蓝色主题
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProductRecommendation />
        <Advantages />
        <ServiceNeeds />
        <AIProcess />
        <CaseStudy />
        <ServiceCards />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
