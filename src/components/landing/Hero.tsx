import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Gauge, HardDrive, Layers } from "lucide-react";

/**
 * 首页 Hero 区域
 * 蓝色渐变背景，GPU 上线公告，底部特性指标条
 */

/** 底部特性指标 */
const highlights = [
  { icon: Cpu, label: "运营商网元", desc: "高品质直连骨干网" },
  { icon: Gauge, label: "超强节约器", desc: "节省高达40%成本" },
  { icon: HardDrive, label: "高性能存储", desc: "NVMe SSD 极速IO" },
  { icon: Layers, label: "多元化选择", desc: "容器机/裸金属/云主机" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* 主内容区 - 蓝色渐变背景 */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16 pb-20">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(0,136,255,0.15), transparent 60%)" }}
        />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,136,255,0.1), transparent 60%)" }}
        />

        <div className="max-w-7xl mx-auto px-6">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            算力上新
          </div>

          {/* 标题 */}
          <h1 className="text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.15] tracking-tight text-gray-900 mb-6">
            高性能 GPU H100、A100
            <br />
            <span className="text-blue-500">火热上线！</span>
          </h1>

          {/* 描述 */}
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mb-4">
            提供一站式 NVIDIA H100、A100 GPU服务器集群配置
          </p>
          <p className="text-base text-gray-400 max-w-xl mb-10">
            支持按需计费灵活使用，不限流量畅享。覆盖推理、训练、微调全场景。
          </p>

          {/* CTA 按钮 */}
          <Button variant="blue" size="lg" className="px-8 text-base rounded-lg shadow-md">
            立即使用算力
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 底部特性指标条 */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 grid place-items-center shrink-0">
                  <item.icon className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{item.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
