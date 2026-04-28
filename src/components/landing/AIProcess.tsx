import { User, Monitor, BarChart3, FileDown, Package, Globe, Shield, Cpu } from "lucide-react";

/**
 * 平台能力 - 8 项网格（4x2）
 * 统一认证 / 多集群管理 / 计量计费 / OTA 服务 / 应用商店 / Open API / 安全合规 / 私有化部署
 */

const capabilities = [
  {
    icon: User,
    title: "统一认证",
    desc: "Tenant → Project → Credential 三级结构，Provider/Consumer 正交权限",
  },
  {
    icon: Monitor,
    title: "多集群管理",
    desc: "基于 Karmada，Push / Pull 双模注册，中心集群 + 边缘节点",
  },
  {
    icon: BarChart3,
    title: "计量计费",
    desc: "算力按时段 / 按量，Token 按调用量，统一 Usage Record 数据流",
  },
  {
    icon: FileDown,
    title: "OTA 服务",
    desc: "GPU 驱动、Runtime、K8s 集群一键创建，作为免费获客入口",
  },
  {
    icon: Package,
    title: "应用商店",
    desc: "vLLM · TGI · Ollama · DeepSpeed · Prometheus 一键部署",
  },
  {
    icon: Globe,
    title: "Open API",
    desc: "完全兼容 OpenAI 标准协议，开发者零改造接入",
  },
  {
    icon: Shield,
    title: "安全合规",
    desc: "多租户隔离、数据加密、操作审计、等保认证",
  },
  {
    icon: Cpu,
    title: "私有化部署",
    desc: "Rise Global + Camp，最小 4C8G，界面统一、内核不动",
  },
];

const AIProcess = () => {
  return (
    <section className="py-20" id="platform">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <div className="inline-block text-[12px] text-[var(--pri)] uppercase tracking-[.18em] font-semibold mb-3.5">平台能力</div>
          <h2 className="text-[clamp(26px,3.2vw,38px)] leading-[1.2] tracking-[-0.02em] font-bold mb-3.5">不只是管理，是完整的算力操作系统</h2>
          <p className="text-[15.5px] leading-[1.7] text-[var(--txt-2)]">从底层硬件纳管，到中间多集群编排，再到上层应用商店与开放 API。</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)] rounded-[18px] overflow-hidden">
          {capabilities.map((cap) => (
            <div key={cap.title} className="p-[24px_22px] bg-white flex flex-col gap-1.5 hover:bg-[#FAFBFE] transition-colors duration-300">
              <div className="w-9 h-9 rounded-[10px] bg-[var(--pri-soft)] grid place-items-center text-[var(--pri)] mb-2">
                <cap.icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </div>
              <h4 className="text-[14.5px] font-bold tracking-[-0.01em] text-[var(--txt)]">{cap.title}</h4>
              <p className="text-[13px] text-[var(--txt-2)] leading-[1.55]">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProcess;
