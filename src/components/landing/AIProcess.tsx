import { Monitor, Brain, Cpu, Bot, Landmark, Car, Heart, Sparkles } from "lucide-react";

/**
 * 让基石智算加速您的AI进程
 * 展示平台覆盖的 AI 应用场景网格
 */

/** 场景项数据 */
const scenarios = [
  {
    icon: Monitor,
    title: "监控中心",
    desc: "实时监控GPU使用率、显存占用、任务进度，可视化运维管理。",
    tags: ["实时监控", "告警", "自动化运维"],
  },
  {
    icon: Brain,
    title: "大模型加速",
    desc: "针对LLM训练与推理优化，支持DeepSpeed、Megatron等框架加速。",
    tags: ["LLM", "训练加速", "推理优化"],
  },
  {
    icon: Cpu,
    title: "高效计算",
    desc: "GPU虚拟化与资源池化，多任务并行调度，最大化算力利用率。",
    tags: ["GPU池化", "任务调度", "资源优化"],
  },
  {
    icon: Bot,
    title: "具备智能",
    desc: "预置主流AI框架，一键部署模型推理服务，支持API接口调用。",
    tags: ["模型部署", "API服务", "智能推理"],
  },
  {
    icon: Landmark,
    title: "金融智算",
    desc: "满足金融行业合规要求，支持风控模型训练、量化策略回测。",
    tags: ["风控", "量化交易", "合规计算"],
  },
  {
    icon: Car,
    title: "自动驾驶",
    desc: "大规模感知模型训练，支持多传感器数据融合与仿真测试。",
    tags: ["感知训练", "仿真测试", "数据标注"],
  },
  {
    icon: Heart,
    title: "医疗医药",
    desc: "药物分子模拟、医学影像分析、基因组学计算等生物医药场景。",
    tags: ["药物研发", "影像AI", "基因组学"],
  },
  {
    icon: Sparkles,
    title: "AI 应用",
    desc: "AIGC内容生成、智能客服、推荐系统等通用AI应用场景。",
    tags: ["AIGC", "智能客服", "推荐系统"],
    highlight: true,
  },
];

const AIProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            让基石智算加速您的 AI 进程
          </h2>
          <p className="text-gray-500">
            覆盖 AI 全场景，从训练到推理，从研发到生产
          </p>
        </div>

        {/* 场景网格 2x4 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {scenarios.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer ${
                item.highlight
                  ? "bg-blue-500 text-white"
                  : "bg-gray-50 border border-gray-100 hover:border-blue-200"
              }`}
            >
              <item.icon className={`w-8 h-8 mb-4 ${
                item.highlight ? "text-blue-100" : "text-blue-500"
              }`} />
              <h3 className={`font-semibold text-base mb-2 ${
                item.highlight ? "text-white" : "text-gray-900"
              }`}>
                {item.title}
              </h3>
              <p className={`text-xs leading-relaxed mb-4 ${
                item.highlight ? "text-blue-100" : "text-gray-500"
              }`}>
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      item.highlight
                        ? "bg-white/20 text-white"
                        : "bg-white text-gray-500 border border-gray-200"
                    }`}
                  >
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

export default AIProcess;
