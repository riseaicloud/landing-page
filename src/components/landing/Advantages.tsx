import { DollarSign, LayoutGrid, ShieldCheck, Settings } from "lucide-react";

/**
 * 产品优势 - 4 列布局
 * 价格优势 / 多元生态 / 稳定可靠 / 专业服务
 */

const features = [
  {
    icon: DollarSign,
    title: "更低成本",
    desc: "同规格 GPU 较公有云大厂便宜 30%–50%，按量付费、包月包年灵活选择",
  },
  {
    icon: LayoutGrid,
    title: "丰富选择",
    desc: "覆盖 NVIDIA A100/H100/H20、昇腾 910B 等主流卡型，按需选择最适合的算力",
  },
  {
    icon: ShieldCheck,
    title: "稳定可靠",
    desc: "多集群冗余、故障自动迁移、SLA 99.9%，训练和推理任务全程无忧",
  },
  {
    icon: Settings,
    title: "开箱即用",
    desc: "预装 PyTorch、vLLM 等主流框架，秒级启动 GPU 容器，专注模型开发",
  },
];

const Advantages = () => {
  return (
    <section className="py-20" id="features">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <div className="inline-block text-[12px] text-[var(--pri)] uppercase tracking-[.18em] font-semibold mb-3.5">产品优势</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] leading-[1.2] tracking-[-0.02em] font-bold mb-3.5">为什么选择 RiseCloud</h2>
          <p className="text-[15.5px] leading-[1.7] text-[var(--txt-2)]">更低的价格、更多的卡型、更快的启动，让你专注于 AI 本身。</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center px-3 py-2">
              <div className="w-12 h-12 rounded-[14px] mx-auto mb-3.5 bg-gradient-to-br from-white to-[#F0EDFF] border border-[var(--line)] grid place-items-center text-[var(--pri)] shadow-[var(--shadow-sm)]">
                <f.icon className="w-[22px] h-[22px]" strokeWidth={1.7} />
              </div>
              <h4 className="text-[15px] font-bold tracking-[-0.01em] mb-2 text-[var(--txt)]">{f.title}</h4>
              <p className="text-[13px] text-[var(--txt-2)] leading-[1.6]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
