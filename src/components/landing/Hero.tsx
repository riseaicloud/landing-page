import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero 区域
 * 深色背景 + 流动光效动画 + 居中文案
 * 多层光斑以不同速率大幅漂移，blur 适中，确保肉眼可见流动感
 */

/** 光斑配置 */
const orbs = [
  { w: 500, h: 400, color: "#5B5BFF", opacity: 0.5,  blur: 60,  top: "-5%",  left: "5%",   anim: "animate-hero-drift-1" },
  { w: 400, h: 350, color: "#A78BFA", opacity: 0.35, blur: 50,  top: "50%",  left: "60%",  anim: "animate-hero-drift-2" },
  { w: 350, h: 300, color: "#FF6FA8", opacity: 0.3,  blur: 45,  top: "10%",  left: "70%",  anim: "animate-hero-drift-3" },
  { w: 300, h: 250, color: "#22C58E", opacity: 0.25, blur: 40,  top: "60%",  left: "15%",  anim: "animate-hero-drift-4" },
  { w: 250, h: 200, color: "#7A6BFF", opacity: 0.3,  blur: 35,  top: "30%",  left: "40%",  anim: "animate-hero-drift-1", delay: "3s" },
  { w: 200, h: 180, color: "#FF6FA8", opacity: 0.2,  blur: 30,  top: "70%",  left: "80%",  anim: "animate-hero-drift-3", delay: "5s" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-16">
      {/* 深色背景 */}
      <div className="absolute inset-0 bg-[#080C22]" />

      {/* 流动光斑 */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${orb.anim}`}
          style={{
            width: orb.w,
            height: orb.h,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
            top: orb.top,
            left: orb.left,
            animationDelay: orb.delay || "0s",
          }}
        />
      ))}

      {/* 网格线 */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)
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

        {/* CTA */}
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
    </section>
  );
};

export default Hero;
