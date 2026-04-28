import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Store, FileDown } from "lucide-react";

/**
 * AI算力服务商与智算中心解决方案提供商
 * 三个服务入口卡片 + 底部合作伙伴 logos
 */

/** 服务入口配置 */
const serviceEntries = [
  {
    icon: Server,
    title: "进入基石智算",
    desc: "一站式GPU云服务平台，分钟级开通，按需计费，覆盖训练推理全场景。",
    cta: "立即进入",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: Store,
    title: "模型市场",
    desc: "汇聚主流开源大模型，支持一键部署与API调用，DeepSeek、LLaMA等热门模型开箱即用。",
    cta: "立即购入",
    color: "text-green-500 bg-green-50",
  },
  {
    icon: FileDown,
    title: "资料下载",
    desc: "产品白皮书、技术文档、行业解决方案等丰富资料，助您快速了解基石智算全线产品。",
    cta: "立即联系",
    color: "text-purple-500 bg-purple-50",
  },
];

/** 合作伙伴名称 */
const partnerNames = [
  "智源研究院", "LLaMA", "LightGBM", "Intel", "AMD", "Supermicro", "浪潮",
];

const ServiceCards = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            AI 算力服务商与智算中心
            <br className="sm:hidden" />
            解决方案提供商
          </h2>
        </div>

        {/* 三个服务卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {serviceEntries.map((entry) => (
            <div
              key={entry.title}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${entry.color} grid place-items-center mb-6`}>
                <entry.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">{entry.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{entry.desc}</p>
              <Button variant="link" className="p-0 h-auto text-blue-500 font-medium">
                {entry.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* 合作伙伴 logos */}
        <div className="border-t border-gray-100 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {partnerNames.map((name) => (
              <div
                key={name}
                className="text-gray-300 font-bold text-lg hover:text-gray-500 transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
