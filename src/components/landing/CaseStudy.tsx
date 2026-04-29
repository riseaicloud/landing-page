import { Building2, Briefcase, Code2 } from "lucide-react";

/**
 * 客户场景 - 3 列卡片
 * 算力中心运营方 / 大型企业 IT / AI 开发者
 */

const audiences = [
  {
    icon: Code2,
    title: "AI 开发者与团队",
    desc: "按需租用 GPU 容器跑训练，调用统一 API 做推理。按量付费，无需自建集群——把基础设施交给平台。",
    tags: ["按量付费", "免费额度", "秒级开机"],
  },
  {
    icon: Building2,
    title: "AI 创业公司",
    desc: "快速验证模型想法，无需前期硬件投入。弹性扩缩容匹配业务节奏，从 MVP 到规模化无缝切换。",
    tags: ["弹性扩缩", "低门槛", "快速上线"],
  },
  {
    icon: Briefcase,
    title: "企业 AI 应用团队",
    desc: "训练私有模型、部署推理服务、调用多厂商 API——一个平台搞定算力与模型，专注业务落地。",
    tags: ["模型训练", "推理部署", "统一 API"],
  },
];

const CaseStudy = () => {
  return (
    <section className="py-20" id="audience">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <div className="inline-block text-[12px] text-[var(--pri)] uppercase tracking-[.18em] font-semibold mb-3.5">客户场景</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] leading-[1.2] tracking-[-0.02em] font-bold mb-3.5">谁在用 RiseCloud</h2>
          <p className="text-[15.5px] leading-[1.7] text-[var(--txt-2)]">从独立开发者到企业 AI 团队，按需获取算力与模型服务，专注于创造价值。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {audiences.map((aud) => (
            <div
              key={aud.title}
              className="p-7 bg-white border border-[var(--line)] rounded-[18px] flex flex-col hover:-translate-y-[3px] hover:shadow-[var(--shadow-md)] hover:border-[var(--line-2)] transition-all duration-300"
            >
              <div className="w-[52px] h-[52px] rounded-[14px] mb-[18px] bg-gradient-to-br from-white to-[#F0EDFF] border border-[var(--line)] grid place-items-center text-[var(--pri)]">
                <aud.icon className="w-6 h-6" strokeWidth={1.7} />
              </div>
              <h4 className="text-[17px] font-bold tracking-[-0.01em] mb-2.5 text-[var(--txt)]">{aud.title}</h4>
              <p className="text-sm text-[var(--txt-2)] leading-[1.65] mb-[18px]">{aud.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {aud.tags.map((tag) => (
                  <span key={tag} className="text-[11.5px] text-[var(--txt-2)] py-1 px-2.5 bg-[var(--bg-soft)] rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
