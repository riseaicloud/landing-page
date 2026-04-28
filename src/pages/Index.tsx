import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProductRecommendation from "@/components/landing/ProductRecommendation";
import Advantages from "@/components/landing/Advantages";
import Promotions from "@/components/landing/Promotions";
import AIProcess from "@/components/landing/AIProcess";
import CaseStudy from "@/components/landing/CaseStudy";
import ServiceCards from "@/components/landing/ServiceCards";
import Footer from "@/components/landing/Footer";

/**
 * 首页
 * RiseCloud 算力标准化平台，indigo 主题
 * 组件顺序与 Claude Design 导出一致
 */
const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--txt)" }}>
      <Navbar />
      <main>
        <Hero />
        <ProductRecommendation />
        <Advantages />
        <Promotions />
        <AIProcess />
        <CaseStudy />
        <ServiceCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
