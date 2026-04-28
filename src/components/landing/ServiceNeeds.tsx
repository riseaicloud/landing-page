import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

/**
 * 满足多种服务需求区域
 * 三列布局：私有化、公有云（高亮）、专属云
 */

/** 服务类型数据 */
interface ServiceType {
  /** 服务名称 */
  name: string;
  /** 服务描述 */
  description: string;
  /** 特性列表 */
  features: string[];
  /** 是否高亮（主推） */
  highlighted?: boolean;
  /** CTA 按钮文案 */
  cta: string;
}

/** 三种服务类型配置 */
const services: ServiceType[] = [
  {
    name: "私有化",
    description: "适合对数据安全和资源隔离有严格要求的企业客户，提供完全独立的算力环境。",
    features: [
      "独立部署物理隔离，更安全",
      "自定义配置灵活调整",
      "专属运维团队7×24支持",
    ],
    cta: "了解更多",
  },
  {
    name: "公有云",
    description: "即开即用的弹性算力服务，按需计费灵活使用，适合中小团队和个人开发者。",
    features: [
      "分钟级开通弹性伸缩，秒级扩容",
      "按量计费灵活使用，不限流量",
      "丰富GPU型号覆盖全场景",
    ],
    highlighted: true,
    cta: "立即使用",
  },
  {
    name: "专属云",
    description: "兼顾公有云弹性和私有云安全，为大型企业打造专属的高性能算力平台。",
    features: [
      "独占资源保障，不受其他租户影响",
      "可定制网络和安全策略",
      "专属客户经理一对一服务",
    ],
    cta: "了解更多",
  },
];

const ServiceNeeds = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            满足多种服务需求
          </h2>
          <p className="text-gray-500">
            灵活的部署模式，满足不同规模企业的算力需求
          </p>
        </div>

        {/* 三列服务卡片 */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                service.highlighted
                  ? "bg-blue-500 text-white shadow-xl scale-[1.02]"
                  : "bg-white border border-gray-200 hover:shadow-lg"
              }`}
            >
              {/* 服务名称 */}
              <h3 className={`text-xl font-bold mb-3 ${
                service.highlighted ? "text-white" : "text-gray-900"
              }`}>
                {service.name}
              </h3>

              {/* 描述 */}
              <p className={`text-sm leading-relaxed mb-6 ${
                service.highlighted ? "text-blue-100" : "text-gray-500"
              }`}>
                {service.description}
              </p>

              {/* 特性列表 */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                      service.highlighted ? "text-blue-200" : "text-blue-500"
                    }`} />
                    <span className={service.highlighted ? "text-white" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA 按钮 */}
              <Button
                variant={service.highlighted ? "white" : "blueOutline"}
                className="w-full rounded-lg"
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNeeds;
