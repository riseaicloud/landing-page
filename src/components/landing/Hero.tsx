import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Hero 广告轮播位
 * 深色流体背景 + 自动轮播推广高性价比算力产品
 * 每张 slide 突出一个 GPU 产品的价格和核心卖点
 */

/** 广告位数据 */
interface PromoSlide {
  /** 标签文字 */
  tag: string;
  /** 标签颜色 */
  tagColor: string;
  /** 主标题 */
  title: string;
  /** 高亮价格文字 */
  priceText: string;
  /** 副标题/描述 */
  subtitle: string;
  /** 核心卖点列表 */
  highlights: string[];
  /** 主 CTA 文字 */
  cta: string;
  /** 主 CTA 链接 */
  ctaHref: string;
  /** 背景光斑主色 */
  orbColor: string;
}

const slides: PromoSlide[] = [
  {
    tag: "爆款推荐",
    tagColor: "from-[#FF6FA8] to-[#FF8DC0]",
    title: "NVIDIA A100 80G",
    priceText: "¥2.86 / 小时",
    subtitle: "SXM4 · 80GB HBM2e · 按量付费，用完即停",
    highlights: ["12 核 vCPU + 120GB 内存", "100GB SSD 系统盘", "PyTorch / vLLM 镜像预装"],
    cta: "立即开通",
    ctaHref: "/catalog",
    orbColor: "#5B5BFF",
  },
  {
    tag: "性价比之王",
    tagColor: "from-[#F4B740] to-[#FFD97A]",
    title: "NVIDIA V100 32G",
    priceText: "¥1,299 / 月",
    subtitle: "SXM2 · 包月限时折扣 · 折合 ¥1.80/小时",
    highlights: ["8 核 vCPU + 64GB 内存", "公网带宽可选", "主流 AI 框架一键部署"],
    cta: "立即抢购",
    ctaHref: "/catalog",
    orbColor: "#FF6FA8",
  },
  {
    tag: "入门首选",
    tagColor: "from-[#22C58E] to-[#5BEBB8]",
    title: "NVIDIA T4 16G",
    priceText: "¥444 / 月",
    subtitle: "轻量推理 · 开发调试 · 低成本起步",
    highlights: ["8 核 vCPU + 32GB 内存", "80GB SSD 系统盘", "适合模型微调与推理测试"],
    cta: "立即体验",
    ctaHref: "/catalog",
    orbColor: "#22C58E",
  },
  {
    tag: "旗舰算力",
    tagColor: "from-[#5B5BFF] to-[#A78BFA]",
    title: "NVIDIA H100 8卡整机",
    priceText: "¥63,000 / 月",
    subtitle: "SXM5 · NVLink 4.0 · 900GB/s 互联 · 限量供应",
    highlights: ["2×Intel Xeon Platinum", "2TB DDR5 内存", "8×400G InfiniBand"],
    cta: "咨询采购",
    ctaHref: "/catalog",
    orbColor: "#7A6BFF",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /** 切换到指定 slide */
  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  /** 下一张 */
  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  /** 上一张 */
  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  /** 自动轮播 5 秒 */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[580px] flex items-center overflow-hidden pt-16">
      {/* 深色背景 */}
      <div className="absolute inset-0 bg-[#080C22]" />

      {/* 流体背景层 */}
      <div className="absolute inset-0" style={{ filter: "blur(60px) contrast(1.2) saturate(1.4)" }}>
        <div className="absolute inset-0 bg-[#080C22]" />
        <div
          className="absolute w-[350px] h-[350px] rounded-full animate-hero-drift-1 transition-colors duration-1000"
          style={{ top: "5%", left: "10%", background: slide.orbColor }}
        />
        <div
          className="absolute w-[280px] h-[280px] rounded-full animate-hero-drift-2"
          style={{ top: "40%", left: "55%", background: "#7B5BFF" }}
        />
        <div
          className="absolute w-[240px] h-[240px] rounded-full animate-hero-drift-3 transition-colors duration-1000"
          style={{ top: "10%", left: "65%", background: slide.orbColor, opacity: 0.7 }}
        />
        <div className="absolute w-[200px] h-[200px] rounded-full animate-hero-drift-4"
          style={{ top: "50%", left: "20%", background: "#3050DD" }}
        />
        <div className="absolute w-[300px] h-[180px] rounded-[50%] animate-hero-drift-2"
          style={{ top: "0%", left: "40%", background: "#3848AA", animationDelay: "-2s" }}
        />
      </div>
      <div className="absolute inset-0 bg-[#080C22]/40" />

      {/* 网格线 */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 广告内容 */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-8 py-16 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* 左侧：文案 */}
          <div className={`transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
            {/* 标签 */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className={`bg-gradient-to-r ${slide.tagColor} text-white px-3 py-1 rounded-full text-[12px] font-bold tracking-wider`}>
                {slide.tag}
              </span>
              <span className="text-white/40 text-sm">限时活动</span>
            </div>

            {/* GPU 名称 */}
            <h1 className="text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.025em] font-extrabold text-white mb-4">
              {slide.title}
            </h1>

            {/* 价格 — 核心视觉冲击 */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-[clamp(40px,6vw,64px)] font-extrabold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent tracking-[-0.02em] font-mono-code leading-none">
                {slide.priceText}
              </span>
            </div>

            {/* 描述 */}
            <p className="text-[16px] text-white/50 mb-6">{slide.subtitle}</p>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap">
              <a href={slide.ctaHref}>
                <Button variant="primary" size="lg" className="gap-2 text-[15px] px-8 h-[50px]">
                  {slide.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="/catalog">
                <Button variant="ghost" size="lg" className="text-white/60 border border-white/15 hover:bg-white/[0.08] hover:text-white gap-2 text-[15px] px-6 h-[50px]">
                  查看全部产品
                </Button>
              </a>
            </div>
          </div>

          {/* 右侧：卖点卡片 */}
          <div className={`hidden lg:block transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
            <div className="bg-white/[0.06] border border-white/[0.1] rounded-2xl p-7 backdrop-blur-sm">
              <div className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-5">配置亮点</div>
              <div className="space-y-4">
                {slide.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.08] grid place-items-center text-[var(--pri)] shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-white/80 text-[15px]">{h}</span>
                  </div>
                ))}
              </div>

              {/* 价格再次强调 */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <div className="text-white/40 text-xs mb-1">起步价</div>
                <div className="text-2xl font-bold text-white font-mono-code">{slide.priceText}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部：轮播控制 + 指示器 */}
        <div className="flex items-center justify-between mt-10">
          {/* 场景标签 */}
          <div className="flex gap-2 flex-wrap">
            {["AI 训练", "AI 推理", "大模型微调"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-medium text-white/40 bg-white/[0.04] border border-white/[0.08]">
                {tag}
              </span>
            ))}
          </div>

          {/* 轮播控制 */}
          <div className="flex items-center gap-3">
            {/* 指示点 */}
            <div className="flex gap-2 mr-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`切换到第 ${i + 1} 页`}
                />
              ))}
            </div>
            {/* 前后箭头 */}
            <button onClick={prev} className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-white/50 hover:text-white hover:border-white/30 transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-white/50 hover:text-white hover:border-white/30 transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
