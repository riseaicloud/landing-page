import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero 区域
 * 深色背景 + CSS Metaball 流体动画
 * 原理：父容器 blur + contrast，子元素为锐边色块
 * 色块移动时通过 blur 自动融合/分离，产生流体效果
 */

const Hero = () => {
  return (
    <section className="relative min-h-[620px] flex items-center justify-center overflow-hidden pt-16">
      {/* 深色背景 */}
      <div className="absolute inset-0 bg-[#080C22]" />

      {/* 流体动画层 — blur + contrast 产生 metaball 融合效果 */}
      <div
        className="absolute inset-0"
        style={{ filter: "blur(60px) contrast(1.2) saturate(1.4)" }}
      >
        {/* 背景填充色（被 contrast 影响后保持暗底） */}
        <div className="absolute inset-0 bg-[#080C22]" />

        {/* 流体色块 — 锐边，靠父级 blur 融合 */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#4040FF] animate-hero-drift-1"
          style={{ top: "10%", left: "15%" }} />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-[#7B5BFF] animate-hero-drift-2"
          style={{ top: "40%", left: "60%" }} />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-[#C060D0] animate-hero-drift-3"
          style={{ top: "15%", left: "70%" }} />
        <div className="absolute w-[220px] h-[220px] rounded-full bg-[#3050DD] animate-hero-drift-4"
          style={{ top: "55%", left: "25%" }} />
        <div className="absolute w-[180px] h-[180px] rounded-full bg-[#9060FF] animate-hero-drift-1"
          style={{ top: "30%", left: "40%", animationDelay: "-3s" }} />
        <div className="absolute w-[160px] h-[160px] rounded-full bg-[#5040CC] animate-hero-drift-3"
          style={{ top: "60%", left: "75%", animationDelay: "-5s" }} />
        <div className="absolute w-[280px] h-[180px] rounded-[50%] bg-[#3848AA] animate-hero-drift-2"
          style={{ top: "5%", left: "45%", animationDelay: "-2s" }} />
      </div>

      {/* 降低流体层整体亮度，保持暗底 */}
      <div className="absolute inset-0 bg-[#080C22]/40" />

      {/* 网格线 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 内容 */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2.5 py-[5px] pl-[5px] pr-4 rounded-full bg-white/[0.08] border border-white/[0.12] text-[13px] text-white/70 font-medium mb-8 backdrop-blur-sm">
          <span className="bg-gradient-to-r from-[var(--pri)] to-[var(--pri-2)] text-white px-2.5 py-[3px] rounded-full text-[11px] font-semibold tracking-wider">NEW</span>
          <span>4月新卡预告：新增 240 张 RTX 4090/D 48G</span>
        </div>

        <h1 className="text-[clamp(40px,5.5vw,72px)] leading-[1.05] tracking-[-0.03em] font-extrabold text-white mb-6">
          高性能 GPU 计算容器
        </h1>
        <p className="text-[clamp(20px,2.5vw,28px)] font-medium text-white/50 tracking-[-0.01em] mb-10">
          弹性计费，秒级部署
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <Button variant="primary" size="lg" className="gap-2 text-[15px] px-8 h-[52px]">
            即刻开始
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="lg" className="text-white/70 border border-white/20 hover:bg-white/[0.08] hover:text-white gap-2 text-[15px] px-8 h-[52px]">
            查阅帮助中心
          </Button>
        </div>

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
