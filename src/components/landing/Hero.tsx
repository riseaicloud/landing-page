import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero 区域
 * 渐变卡片，左侧文案+CTA，右侧 GPU 风扇插画
 */

const Hero = () => {
  return (
    <section className="pt-[130px] pb-20 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-[28px] overflow-hidden border border-white/60 shadow-[var(--shadow-md)] min-h-[380px]"
          style={{
            background: `
              radial-gradient(700px 320px at 20% 0%, #E0E5FA 0%, transparent 60%),
              radial-gradient(600px 280px at 100% 100%, #F1E5FB 0%, transparent 60%),
              linear-gradient(180deg, #EEF2FB, #E7ECFA)
            `,
          }}
        >
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 items-center p-14 lg:p-16 relative">
            {/* 左侧文案 */}
            <div>
              {/* Eyebrow 标签 */}
              <a href="#catalog" className="inline-flex items-center gap-2.5 py-[5px] pl-[5px] pr-3.5 rounded-full bg-white/70 border border-white/90 text-[13px] text-[var(--txt-2)] font-medium mb-6 backdrop-blur-lg shadow-[0_1px_0_rgba(14,20,48,.03)] hover:shadow-[var(--shadow-sm)] transition-shadow">
                <span className="bg-gradient-to-br from-[var(--pri)] to-[var(--pri-2)] text-white px-2.5 py-[3px] rounded-full text-[11px] font-semibold tracking-wider">NEW</span>
                <span>春季促销 · 全场异构算力 7 折起</span>
                <span className="text-[var(--txt-3)] transition-transform group-hover:translate-x-0.5">→</span>
              </a>

              {/* 标题 */}
              <h1 className="text-[clamp(36px,4.6vw,56px)] leading-[1.1] tracking-[-0.025em] font-bold mb-[22px]">
                GPU 算力<br />
                <span className="text-[var(--pri)]">A100 低至 2.86 元/小时！</span>
              </h1>

              {/* 副标题 */}
              <p className="text-[17px] leading-[1.7] text-[var(--txt-2)] max-w-[560px] mb-8">
                RiseCloud 是面向算力运营的标准化平台。<b className="text-[var(--txt)] font-semibold">向下纳管</b>异构 GPU 集群，<b className="text-[var(--txt)] font-semibold">向上输出</b>算力服务与 Token API——把算力变成可运营、可计费、可交付的标准化商品。
              </p>

              {/* CTA 按钮 */}
              <div className="flex gap-3 flex-wrap">
                <Button variant="primary" size="lg" className="gap-2">
                  <span className="w-[30px] h-[30px] rounded-full bg-white/20 grid place-items-center -ml-2 -mr-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20" /></svg>
                  </span>
                  立即试用
                </Button>
                <Button variant="dark" size="lg" className="gap-2">
                  查看价格
                  <ArrowRight className="w-[13px] h-[13px]" />
                </Button>
              </div>
            </div>

            {/* 右侧 GPU 插画 */}
            <div className="relative h-[320px] hidden lg:flex items-center justify-center">
              <div className="relative w-[380px] h-[280px]">
                {/* 浮动方块 */}
                <div className="absolute w-[42px] h-[42px] left-2 top-[60px] rounded-lg bg-gradient-to-br from-[#FFE5F0] to-[#FFC9DE] border border-white shadow-[0_8px_20px_-4px_rgba(91,91,255,.25)] -rotate-12" />
                <div className="absolute w-[36px] h-[36px] right-5 top-[30px] rounded-lg bg-gradient-to-br from-[#E5EBFF] to-[#C9D4FF] border border-white shadow-[0_8px_20px_-4px_rgba(91,91,255,.25)] rotate-[15deg]" />
                <div className="absolute w-[28px] h-[28px] right-0 bottom-[80px] rounded-lg bg-gradient-to-br from-[#F0EBFF] to-[#D6CDFF] border border-white shadow-[0_8px_20px_-4px_rgba(91,91,255,.25)] -rotate-[8deg]" />

                {/* GPU 底座 */}
                <div className="absolute left-[30px] right-[30px] bottom-5 h-[90px] bg-gradient-to-b from-white to-[#E5E9F4] border border-white rounded-[14px] shadow-[0_20px_40px_-10px_rgba(91,91,255,.18)]" />

                {/* 金色引脚 */}
                <div className="absolute w-3.5 h-[30px] bg-gradient-to-b from-[#FFE5A6] to-[#FFC966] rounded-[3px] top-[40%] left-[-4px] shadow-[0_4px_8px_rgba(244,183,64,.3)]" />
                <div className="absolute w-3.5 h-[30px] bg-gradient-to-b from-[#FFE5A6] to-[#FFC966] rounded-[3px] top-[50%] right-[-4px] shadow-[0_4px_8px_rgba(244,183,64,.3)]" />

                {/* GPU 风扇 */}
                <div className="absolute left-1/2 top-[30px] -translate-x-1/2 w-[170px] h-[170px] rounded-full bg-[radial-gradient(circle_at_50%_40%,#fff_0%,#E7E2FF_50%,#C8BEFF_100%)] border border-white shadow-[0_16px_36px_-10px_rgba(91,91,255,.4),inset_0_-8px_20px_rgba(167,139,250,.3)] grid place-items-center">
                  {/* 旋转叶片 */}
                  <div className="absolute inset-[18px] rounded-full bg-[conic-gradient(from_0deg,#A78BFA,#5B5BFF,#A78BFA,#5B5BFF,#A78BFA)] opacity-[.85] animate-spin-slow" />
                  {/* 中心盖 */}
                  <div className="absolute inset-[36px] rounded-full bg-[radial-gradient(circle,#fff_0%,#F0EBFF_100%)] shadow-[inset_0_2px_8px_rgba(91,91,255,.2)]" />
                </div>

                {/* GPU 核心 */}
                <div className="absolute w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--pri)] to-[var(--pri-2)] shadow-[0_4px_12px_rgba(91,91,255,.4)] z-[2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[88px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
