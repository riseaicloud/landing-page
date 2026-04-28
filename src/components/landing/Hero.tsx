import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero 区域
 * 深色背景 + 流动光效动画 + 居中文案
 * 参考仙宫云风格：深色底、流动渐变光斑、简洁文案、双 CTA
 */

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-16">
      {/* 深色背景底色 */}
      <div className="absolute inset-0 bg-[#0A0E27]" />

      {/* 流动渐变光斑 - 多层叠加 */}
      <div
        className="absolute w-[800px] h-[600px] opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(ellipse, #5B5BFF 0%, transparent 70%)",
          top: "-10%",
          left: "10%",
          animation: "drift1 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[600px] h-[500px] opacity-30 blur-[100px]"
        style={{
          background: "radial-gradient(ellipse, #A78BFA 0%, transparent 70%)",
          bottom: "-15%",
          right: "5%",
          animation: "drift2 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[400px] opacity-25 blur-[80px]"
        style={{
          background: "radial-gradient(ellipse, #FF6FA8 0%, transparent 70%)",
          top: "20%",
          right: "25%",
          animation: "drift3 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[400px] h-[300px] opacity-20 blur-[90px]"
        style={{
          background: "radial-gradient(ellipse, #22C58E 0%, transparent 70%)",
          bottom: "10%",
          left: "30%",
          animation: "drift4 11s ease-in-out infinite",
        }}
      />

      {/* 网格线叠加 */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 内容 */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-8 py-20 text-center">
        {/* 标签 */}
        <div className="inline-flex items-center gap-2.5 py-[5px] pl-[5px] pr-4 rounded-full bg-white/[0.08] border border-white/[0.12] text-[13px] text-white/70 font-medium mb-8 backdrop-blur-sm">
          <span className="bg-gradient-to-r from-[var(--pri)] to-[var(--pri-2)] text-white px-2.5 py-[3px] rounded-full text-[11px] font-semibold tracking-wider">NEW</span>
          <span>4月新卡预告：新增 240 张 RTX 4090/D 48G</span>
        </div>

        {/* 标题 */}
        <h1 className="text-[clamp(40px,5.5vw,72px)] leading-[1.05] tracking-[-0.03em] font-extrabold text-white mb-6">
          高性能 GPU 计算容器
        </h1>
        <p className="text-[clamp(20px,2.5vw,28px)] font-medium text-white/50 tracking-[-0.01em] mb-10">
          弹性计费，秒级部署
        </p>

        {/* CTA 按钮 */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <Button variant="primary" size="lg" className="gap-2 text-[15px] px-8 h-[52px]">
            即刻开始
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="lg" className="text-white/70 border border-white/20 hover:bg-white/[0.08] hover:text-white gap-2 text-[15px] px-8 h-[52px]">
            查阅帮助中心
          </Button>
        </div>

        {/* 场景标签 */}
        <div className="flex justify-center gap-3 flex-wrap">
          {["AI 训练", "AI 推理", "大模型微调", "数据处理"].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full text-sm font-medium text-white/60 bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm hover:bg-white/[0.1] hover:text-white/80 transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CSS keyframes for flowing effect */}
      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, 30px) scale(1.1); }
          66% { transform: translate(-40px, -20px) scale(0.95); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, -40px) scale(1.05); }
          66% { transform: translate(30px, 20px) scale(1.1); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.15); }
        }
        @keyframes drift4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-30px, 25px) scale(1.08); }
          80% { transform: translate(20px, -15px) scale(0.92); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
