import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

/**
 * 解决方案页面 — 企业级算力中心
 * 参考 coreshub.cn/solutions/enterprise-datacenter/
 * 板块：Hero → 核心痛点 → 方案 → 方案架构 → 价值 → CTA
 */

/** 核心痛点数据 */
const painPoints = [
  {
    num: "01",
    title: "资源碎片化与低效利用",
    desc: "企业面临算力资源分散、利用率低的问题，难以快速响应多变的业务需求。",
  },
  {
    num: "02",
    title: "运维成本与复杂性",
    desc: "传统数据中心管理复杂，GPU 机器故障频繁，运维团队需投入大量人力物力进行日常维护和故障排查。",
  },
  {
    num: "03",
    title: "算力瓶颈限制业务创新",
    desc: "在模型训练、推理等关键环节，算力不足或配置不合理常常成为阻碍业务创新与发展的瓶颈。",
  },
  {
    num: "04",
    title: "灵活性与可扩展性差",
    desc: "面对市场快速变化，企业难以快速调整算力资源，以匹配新业务或项目需求，错失市场机遇。",
  },
];

/** 方案数据 */
const solutions = [
  {
    title: "资源规划与建设",
    desc: "已有资源按服务业务进行整理和纳管规划，新购资源根据配置和数量，进行网络和业务的规划和优化，并根据芯片类型进行入库。",
  },
  {
    title: "多元算力整合服务",
    desc: "采用分布式架构聚合纳管多种类型的算力资源，实现异构算力的整合与调度优化，支持资源的快速扩充、缩减、调配。",
  },
  {
    title: "高性能与高可靠性",
    desc: "借助多元算力不同的调度算法，提供高性能、高可靠性的计算服务；多节点协同确保系统可用性。",
  },
  {
    title: "可运营与用户自服务",
    desc: "支持多类型算力资源的灵活申请分发。用户可根据应用需求使用云主机、AI 算力、HPC 算力，即来即用即计费。",
  },
  {
    title: "简化管理专注创新",
    desc: "统一的运维管理平台，大幅简化对计算资源的调度与管理，降低运维成本，使企业更专注于业务发展与创新。",
  },
];

/** 价值数据 */
const values = [
  {
    role: "对于运维团队",
    points: [
      "流程精简与效率提升：显著优化运维流程，减少手动操作与错误配置，促进运维效率飞跃。",
      "智能运维，人效倍增：通过数据分析、预测预警、故障自愈等功能，精准掌握系统运行状态。",
      "灵活资源调度，成本优化：依托资源池、vGPU 及精细权限管理，有效避免浪费，大幅降低运维成本。",
    ],
  },
  {
    role: "对于业务决策者",
    points: [
      "算力资产可视化：清晰掌握 GPU 资源利用率、租户分布与营收数据，支撑运营决策。",
      "快速商业化落地：内置计量计费、多租户隔离、配额管理，开箱即用，缩短上线周期。",
      "生态兼容，降低风险：支持 NVIDIA、昇腾、海光等多芯片，避免单一厂商锁定。",
    ],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--txt)" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-16">
        <div className="h-[400px] bg-gradient-to-br from-[#EAF0FB] via-[#E7ECFA] to-[#F4F0FB] flex items-center justify-center text-center px-6">
          <div className="max-w-[630px]">
            <h1 className="text-[clamp(30px,4vw,46px)] font-semibold text-[var(--txt)] leading-tight mb-6">
              企业级算力中心
            </h1>
            <p className="text-base text-[var(--txt-2)] leading-7 mb-8">
              帮助企业构建多元算力中心，整合 GPU 资源并通过智能调度，为 AI、科学计算、药物研发等领域提供可靠弹性算力支持，覆盖模型训练、微调、推理全流程。
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="primary" className="gap-2">
                咨询专家 <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              <Button variant="secondary" className="gap-2">
                资料下载 <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 核心痛点 */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-3">核心痛点</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #66FF66 0%, var(--pri) 100%)" }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((p) => (
              <div key={p.num} className="bg-[#090E23] text-white rounded-lg py-10 px-7 hover:bg-[#0E1430] transition-colors">
                <div className="flex items-center mb-5">
                  <span className="text-5xl font-medium pr-5 mr-3 border-r-2 border-dashed border-white/30">{p.num}</span>
                  <p className="text-xl font-medium">{p.title}</p>
                </div>
                <p className="text-sm text-white/60 leading-6">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 方案 */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-4">
            <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-3">方案</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #66FF66 0%, var(--pri) 100%)" }} />
          </div>
          <p className="text-sm text-[var(--txt-3)] leading-6 text-center max-w-[680px] mx-auto mb-12">
            GPU 算力池化解决方案通过集中管理多台同构或异构 GPU 服务器，形成 GPU 资源池，通过资源管理和调度系统，实现 GPU 资源的统一管理和动态分配。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="flex items-start rounded-lg py-7 px-10 bg-white min-h-[180px]" style={{ boxShadow: "0px 4px 12px 0px rgba(12, 68, 204, 0.1)" }}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--pri-soft)] to-[#E5EBFF] grid place-items-center mr-6 shrink-0">
                  <Check className="w-6 h-6 text-[var(--pri)]" />
                </div>
                <div>
                  <p className="text-xl font-semibold mb-2 text-[var(--txt)]">{s.title}</p>
                  <p className="text-base text-[var(--txt-2)] leading-7">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 方案架构 */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-3">方案架构</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #66FF66 0%, var(--pri) 100%)" }} />
          </div>

          {/* 架构图占位 */}
          <div className="bg-[#F4F7FA] rounded-2xl py-16 px-8">
            <div className="max-w-[926px] mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {/* 应用层 */}
                <div className="bg-white rounded-xl p-6 border border-[var(--line)]">
                  <div className="text-xs text-[var(--pri)] font-semibold uppercase tracking-wider mb-3">应用层</div>
                  <div className="flex gap-3 flex-wrap">
                    {["模型训练", "模型推理", "模型微调", "数据处理", "开发环境"].map((t) => (
                      <span key={t} className="px-4 py-2 bg-[var(--pri-soft)] text-[var(--pri)] text-sm font-medium rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
                {/* 平台层 */}
                <div className="bg-white rounded-xl p-6 border border-[var(--line)]">
                  <div className="text-xs text-[var(--pri)] font-semibold uppercase tracking-wider mb-3">平台层 · RiseCloud</div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {["统一认证", "资源调度", "计量计费", "应用商店", "多集群管理", "Open API", "安全合规", "运维监控"].map((t) => (
                      <span key={t} className="px-3 py-2 bg-[#F4F7FA] text-[var(--txt-2)] text-sm font-medium rounded-lg text-center">{t}</span>
                    ))}
                  </div>
                </div>
                {/* 基础设施层 */}
                <div className="bg-white rounded-xl p-6 border border-[var(--line)]">
                  <div className="text-xs text-[var(--pri)] font-semibold uppercase tracking-wider mb-3">基础设施层</div>
                  <div className="flex gap-3 flex-wrap">
                    {["NVIDIA A100/H100/H20", "华为昇腾 910B", "海光 DCU", "寒武纪 MLU", "InfiniBand 网络", "高速存储"].map((t) => (
                      <span key={t} className="px-4 py-2 bg-[#090E23] text-white text-sm font-medium rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 价值 */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-3">价值</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #66FF66 0%, var(--pri) 100%)" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.role} className="px-8 py-9 rounded-lg" style={{ boxShadow: "0px 4px 12px 0px rgba(12, 68, 204, 0.1)" }}>
                <p className="text-[22px] font-medium text-[var(--txt)] mb-4">{v.role}</p>
                <ul className="space-y-3">
                  {v.points.map((point, i) => (
                    <li key={i} className="text-sm text-[var(--txt-3)] leading-6 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[var(--pri)]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(92deg, #7A6BFF 12%, var(--pri) 55%, #3040AA 97%)" }}>
        <div className="max-w-[1240px] mx-auto px-8 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <h2 className="text-2xl lg:text-4xl text-white font-medium">让你的算力资源开始创造价值</h2>
            <p className="text-lg text-white/70 mt-4 font-light">部署 RiseCloud 平台，将闲置 GPU 变成可运营、可计费、可扩展的算力服务。</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="https://console.cloud.tkeel.io">
              <Button variant="ghost" className="bg-white text-[var(--txt)] hover:bg-white/90 font-medium px-6 py-3 h-auto rounded-lg gap-2">
                预约演示 <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>
            <Button variant="ghost" className="text-white border border-white/40 hover:bg-white/10 font-medium px-6 py-3 h-auto rounded-lg gap-2">
              咨询专家 <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
