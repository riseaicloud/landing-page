import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

/**
 * 合作伙伴 + CTA 区域
 * 深色 partner logo 行 + 渐变 CTA 卡片
 */

/** 合作伙伴名称 */
const partners = ["TRINIT", "RISEUNION", "ASCEND", "HYGON", "CAMBRICON"];

const ServiceCards = () => {
  return (
    <>
      {/* 合作伙伴 */}
      <section className="py-[60px] text-center">
        <div className="max-w-[1240px] mx-auto px-8">
          <h5 className="text-[13px] text-[var(--txt-3)] font-semibold tracking-[.18em] uppercase mb-6">合作伙伴</h5>
          <div className="flex justify-center items-center gap-9 flex-wrap">
            {partners.map((p) => (
              <div key={p} className="h-14 px-7 rounded-xl bg-[#0E1430] text-white grid place-items-center font-bold tracking-[.18em] text-sm shadow-[var(--shadow-sm)]">
                {p}
              </div>
            ))}
          </div>
          <p className="text-[12.5px] text-[var(--txt-3)] mt-[18px]">已与 30+ 算力中心、芯片厂商、模型厂商达成合作</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" id="cta">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="relative p-14 rounded-3xl overflow-hidden border border-white/60 text-center shadow-[var(--shadow-md)]"
            style={{
              background: `
                radial-gradient(600px 280px at 20% 0%, #DDE3FB 0%, transparent 60%),
                radial-gradient(500px 230px at 90% 100%, #F4E2FB 0%, transparent 60%),
                linear-gradient(180deg, #EEF2FB, #E7ECFA)
              `,
            }}
          >
            <h2 className="text-[clamp(26px,3.2vw,36px)] tracking-[-0.02em] font-bold mb-3 leading-[1.2]">开始把算力变成可运营的服务</h2>
            <p className="text-[var(--txt-2)] text-[15.5px] max-w-[520px] mx-auto mb-7 leading-[1.7]">
              注册即获 ¥100 免费额度，体验 GPU 容器与模型推理 API。预约方案咨询，30 分钟内回复。
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button variant="primary" size="lg" className="gap-2">
                免费注册
                <ArrowRight className="w-[13px] h-[13px]" />
              </Button>
              <Button variant="secondary" size="lg">联系销售</Button>
            </div>
            <div className="mt-[22px] inline-flex items-center gap-[18px] text-[12.5px] text-[var(--txt-3)]">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--pri)]" strokeWidth={2.2} />
                免费 ¥100 体验额度
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--pri)]" strokeWidth={2.2} />
                无需信用卡
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--pri)]" strokeWidth={2.2} />
                支持私有化部署
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCards;
