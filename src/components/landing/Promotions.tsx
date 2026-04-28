import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * 底部 CTA 横幅
 * 蓝色渐变背景，引导注册使用
 */

const CtaBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          立刻开启算力使用
        </h2>
        <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
          简单、安全、可信赖。新用户注册即赠体验金，加速您的 AI 工程进度！
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="white" size="lg" className="px-8 rounded-lg">
            立即注册
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="lg" className="text-white border border-white/30 hover:bg-white/10 px-8 rounded-lg">
            查看文档
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
