import { Cpu, Layers, Shield, Gauge, Network, Workflow } from "lucide-react";

const features = [
  {
    icon: Cpu,
    code: "01 / GPU",
    title: "全球 GPU 集群",
    desc: "覆盖 A100、H100、L40S 等主流型号，多区域接入，毫秒级调度。",
  },
  {
    icon: Layers,
    code: "02 / MODEL",
    title: "大模型即服务",
    desc: "主流开源模型一键部署，提供 OpenAI 兼容 API，零运维成本。",
  },
  {
    icon: Gauge,
    code: "03 / SCALE",
    title: "弹性自动伸缩",
    desc: "根据请求量秒级扩缩容，按实际用量计费，从零成本到极致性能。",
  },
  {
    icon: Network,
    code: "04 / NETWORK",
    title: "高速互联网络",
    desc: "InfiniBand 互联，支持千卡级分布式训练，带宽达 400Gbps。",
  },
  {
    icon: Shield,
    code: "05 / SECURITY",
    title: "企业级安全",
    desc: "租户级隔离，数据全程加密，符合主流合规标准。",
  },
  {
    icon: Workflow,
    code: "06 / WORKFLOW",
    title: "完整工作流",
    desc: "从数据准备、训练、微调到推理部署，全链路工具链。",
  },
];

const Features = () => {
  return (
    <section id="models" className="relative py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="font-mono-tech text-xs text-muted-foreground mb-4">// CAPABILITIES</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            为 AI 而生的<span className="text-iridescent">全栈算力底座</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            从底层 GPU 资源到上层模型服务，构建端到端的 AI 基础设施。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative bg-background p-8 hover:bg-card transition-colors duration-300"
            >
              <div className="font-mono-tech text-[11px] text-muted-foreground mb-6">
                {f.code}
              </div>
              <div className="w-11 h-11 rounded-xl bg-iridescent-soft border border-border grid place-items-center mb-5 group-hover:bg-iridescent transition-all duration-500">
                <f.icon
                  className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;