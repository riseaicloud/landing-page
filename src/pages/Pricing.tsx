import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

/**
 * 价格页面 — GPU 算力 + 模型 API 定价
 * 路由: /pricing
 */

/** GPU 价格数据 */
const gpuPricing = [
  {
    name: "NVIDIA T4",
    spec: "16G",
    hourly: "¥0.62",
    monthly: "¥444.60",
    desc: "入门首选，轻量推理与开发测试",
    cpu: "8 核 vCPU",
    mem: "32 GB",
    disk: "80 GB SSD",
  },
  {
    name: "NVIDIA V100",
    spec: "SXM2 32G",
    hourly: "¥1.80",
    monthly: "¥1,299.60",
    desc: "性价比之王，训练与推理兼顾",
    cpu: "8 核 vCPU",
    mem: "64 GB",
    disk: "100 GB SSD",
    featured: true,
  },
  {
    name: "NVIDIA A100",
    spec: "SXM4 80G",
    hourly: "¥2.86",
    monthly: "¥2,059.20",
    desc: "主流训练卡，大模型微调首选",
    cpu: "12 核 vCPU",
    mem: "120 GB",
    disk: "100 GB SSD",
  },
  {
    name: "NVIDIA H20",
    spec: "96G",
    hourly: "¥4.82",
    monthly: "¥3,470.40",
    desc: "大模型推理优化，高显存大吞吐",
    cpu: "16 核 vCPU",
    mem: "220 GB",
    disk: "200 GB NVMe",
  },
  {
    name: "NVIDIA H100",
    spec: "8 卡整机 SXM5",
    hourly: "-",
    monthly: "¥63,000",
    desc: "旗舰训练集群，NVLink 4.0 互联",
    cpu: "2 × Intel Xeon Platinum",
    mem: "2 TB DDR5",
    disk: "企业级 NVMe",
  },
  {
    name: "华为昇腾 910B",
    spec: "64G HBM2e",
    hourly: "咨询",
    monthly: "咨询",
    desc: "国产信创合规，MindSpore / PyTorch",
    cpu: "按需配置",
    mem: "按需配置",
    disk: "按需配置",
  },
];

/** 模型 API 价格数据 */
const modelPricing = [
  { name: "DeepSeek-V4-Pro", input: "$1.74", output: "$3.48", context: "1049K" },
  { name: "DeepSeek-V4-Flash", input: "$0.14", output: "$0.28", context: "1049K" },
  { name: "Kimi-K2.6", input: "$0.95", output: "$4.0", context: "262K" },
  { name: "Hy3-preview", input: "免费", output: "免费", context: "131K" },
  { name: "GLM-5.1", input: "$1.4", output: "$4.4", context: "205K" },
  { name: "MiniMax-M2.5", input: "$0.3", output: "$1.2", context: "197K" },
];

const Pricing = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--txt)" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-16">
        <div className="h-[320px] bg-gradient-to-br from-[#EAF0FB] via-[#E7ECFA] to-[#F4F0FB] flex items-center justify-center text-center px-6">
          <div className="max-w-[630px]">
            <h1 className="text-[clamp(30px,4vw,46px)] font-semibold text-[var(--txt)] leading-tight mb-4">
              简单透明的定价
            </h1>
            <p className="text-base text-[var(--txt-2)] leading-7">
              按量付费，用完即停。包月包年更优惠。注册即赠 ¥100 体验额度。
            </p>
          </div>
        </div>
      </section>

      {/* GPU 算力定价 */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-[12px] text-[var(--pri)] uppercase tracking-[.18em] font-semibold mb-3.5">GPU 算力</div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-3">GPU 容器实例</h2>
            <p className="text-[15px] text-[var(--txt-2)]">支持按量付费、包月、包年三种计费模式</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F4F7FA]">
                  <th className="text-left text-sm font-semibold text-[var(--txt)] px-5 py-4 rounded-tl-lg">GPU</th>
                  <th className="text-left text-sm font-semibold text-[var(--txt)] px-5 py-4">规格</th>
                  <th className="text-left text-sm font-semibold text-[var(--txt)] px-5 py-4">CPU</th>
                  <th className="text-left text-sm font-semibold text-[var(--txt)] px-5 py-4">内存</th>
                  <th className="text-right text-sm font-semibold text-[var(--txt)] px-5 py-4">按量（小时）</th>
                  <th className="text-right text-sm font-semibold text-[var(--txt)] px-5 py-4 rounded-tr-lg">包月</th>
                </tr>
              </thead>
              <tbody>
                {gpuPricing.map((gpu) => (
                  <tr key={gpu.name} className={`border-b border-[var(--line)] hover:bg-[#FAFBFE] transition-colors ${gpu.featured ? "bg-[var(--pri-soft)]" : ""}`}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[var(--txt)]">{gpu.name}</span>
                        {gpu.featured && <span className="text-[10px] bg-[var(--pri)] text-white px-1.5 py-0.5 rounded font-medium">热门</span>}
                      </div>
                      <div className="text-[12px] text-[var(--txt-3)] mt-0.5">{gpu.desc}</div>
                    </td>
                    <td className="px-5 py-4 text-sm text-[var(--txt-2)]">{gpu.spec}</td>
                    <td className="px-5 py-4 text-sm text-[var(--txt-2)]">{gpu.cpu}</td>
                    <td className="px-5 py-4 text-sm text-[var(--txt-2)]">{gpu.mem}</td>
                    <td className="px-5 py-4 text-right text-sm font-semibold text-[var(--txt)]">{gpu.hourly}</td>
                    <td className="px-5 py-4 text-right text-sm font-semibold text-[var(--pri)]">{gpu.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[12.5px] text-[var(--txt-3)] mt-4 text-center">
            以上为单卡基础配置参考价，实际价格以控制台为准。存储、带宽另计。
          </p>
        </div>
      </section>

      {/* 模型 API 定价 */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-[12px] text-[var(--pri)] uppercase tracking-[.18em] font-semibold mb-3.5">模型 API</div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-3">统一模型调用</h2>
            <p className="text-[15px] text-[var(--txt-2)]">兼容 OpenAI 协议，按 Token 计费，价格以美元 / 百万 Token 计</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F4F7FA]">
                  <th className="text-left text-sm font-semibold text-[var(--txt)] px-5 py-4 rounded-tl-lg">模型</th>
                  <th className="text-right text-sm font-semibold text-[var(--txt)] px-5 py-4">上下文长度</th>
                  <th className="text-right text-sm font-semibold text-[var(--txt)] px-5 py-4">输入价格 / M Tokens</th>
                  <th className="text-right text-sm font-semibold text-[var(--txt)] px-5 py-4 rounded-tr-lg">输出价格 / M Tokens</th>
                </tr>
              </thead>
              <tbody>
                {modelPricing.map((model) => (
                  <tr key={model.name} className="border-b border-[var(--line)] hover:bg-[#FAFBFE] transition-colors">
                    <td className="px-5 py-4 text-sm font-semibold text-[var(--txt)]">{model.name}</td>
                    <td className="px-5 py-4 text-right text-sm text-[var(--txt-2)]">{model.context}</td>
                    <td className="px-5 py-4 text-right text-sm text-[var(--txt)]">{model.input}</td>
                    <td className="px-5 py-4 text-right text-sm font-semibold text-[var(--pri)]">{model.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[12.5px] text-[var(--txt-3)] mt-4 text-center">
            已聚合 50+ 主流模型，完整模型列表与价格请查看控制台。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
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
            <h2 className="text-[clamp(24px,3vw,34px)] tracking-[-0.02em] font-bold mb-3 leading-[1.2]">注册即赠 ¥100 体验额度</h2>
            <p className="text-[var(--txt-2)] text-[15px] max-w-[480px] mx-auto mb-7 leading-[1.7]">
              无需信用卡，立即体验 GPU 容器与模型推理 API。
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
                免费 ¥100 额度
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--pri)]" strokeWidth={2.2} />
                按量付费
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--pri)]" strokeWidth={2.2} />
                包月包年更优惠
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
