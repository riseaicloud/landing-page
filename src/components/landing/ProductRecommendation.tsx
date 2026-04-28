/**
 * 产品推荐 - 算力售卖 + 模型广场
 * 6 张 GPU 卡片 (3x2) + 6 张模型卡片 (3x2)
 */

/** GPU 产品数据 */
interface GpuProduct {
  name: string;
  badge: string;
  badgeType?: "hot" | "new";
  price: string;
  unit: string;
  note: string;
  cta: string;
  featured?: boolean;
  featTag?: string;
  specs: { key: string; val: string }[];
}

/** Token API 模型数据 */
interface TokenModel {
  vendor: string;
  name: string;
  type: string;
  releaseDate: string;
  totalContext: string;
  maxOutput: string;
  inputPrice: string;
  outputPrice: string;
  hot?: boolean;
}

/** GPU 产品列表（精选 6 款） */
const gpuProducts: GpuProduct[] = [
  {
    name: "NVIDIA A100", badge: "SXM4 80G", price: "2.86", unit: "/小时",
    note: "起，按量付费 · 包月更优惠", cta: "立即购买",
    specs: [
      { key: "CPU", val: "12 核 vCPU" }, { key: "内存", val: "120 GB" },
      { key: "系统盘", val: "100 GB SSD" }, { key: "网络", val: "10 Gbps" },
      { key: "地域", val: "江苏 · 张家口" },
    ],
  },
  {
    name: "NVIDIA V100", badge: "SXM2 32G", badgeType: "hot",
    price: "1299.60", unit: "/月", note: "包月限时 · 折合每小时 ¥1.80",
    cta: "立即购买", featured: true, featTag: "最受欢迎 · 性价比之王",
    specs: [
      { key: "CPU", val: "8 核 vCPU" }, { key: "内存", val: "64 GB" },
      { key: "系统盘", val: "100 GB SSD" }, { key: "网络", val: "10 Gbps · 公网带宽可选" },
      { key: "框架", val: "PyTorch / TF / vLLM 镜像预装" },
    ],
  },
  {
    name: "NVIDIA H20", badge: "96G", price: "4.82", unit: "/小时",
    note: "起，按量付费 · 适合大模型推理", cta: "立即购买",
    specs: [
      { key: "CPU", val: "16 核 vCPU" }, { key: "内存", val: "220 GB" },
      { key: "系统盘", val: "200 GB NVMe" }, { key: "互联", val: "NVLink + IB" },
      { key: "地域", val: "江苏 · 北京 · 张家口" },
    ],
  },
  {
    name: "NVIDIA T4", badge: "16G", price: "444.6", unit: "/月",
    note: "入门首选 · 推理与开发测试", cta: "立即购买",
    specs: [
      { key: "CPU", val: "8 核 vCPU" }, { key: "内存", val: "32 GB" },
      { key: "系统盘", val: "80 GB SSD" }, { key: "框架", val: "主流 AI 镜像预装" },
      { key: "用途", val: "轻量推理 · 开发调试" },
    ],
  },
  {
    name: "NVIDIA H100", badge: "8 卡整机", badgeType: "hot",
    price: "63000", unit: "/月", note: "大模型训练标杆 · 限量供应", cta: "咨询采购",
    specs: [
      { key: "GPU", val: "8 × H100 80G SXM5" }, { key: "CPU", val: "2 × Intel Xeon Platinum" },
      { key: "内存", val: "2 TB DDR5" }, { key: "互联", val: "NVLink 4.0 · 900 GB/s" },
      { key: "网络", val: "8 × 400G IB" },
    ],
  },
  {
    name: "华为昇腾 910B", badge: "国产", badgeType: "new",
    price: "价格咨询", unit: "", note: "国产化场景首选 · 信创合规", cta: "咨询报价",
    specs: [
      { key: "规格", val: "单卡 / 8 卡整机" }, { key: "显存", val: "64 GB HBM2e" },
      { key: "框架", val: "MindSpore / PyTorch (Ascend)" }, { key: "合规", val: "信创 · 等保三级" },
      { key: "交付", val: "公有云 / 私有化" },
    ],
  },
];

/** 模型列表 - 2026 年最新模型 */
const tokenModels: TokenModel[] = [
  {
    vendor: "DeepSeek", name: "DeepSeek-V4-Pro", type: "chat",
    releaseDate: "Apr 24, 2026", totalContext: "1049K", maxOutput: "393K",
    inputPrice: "1.74", outputPrice: "3.48", hot: true,
  },
  {
    vendor: "DeepSeek", name: "DeepSeek-V4-Flash", type: "chat",
    releaseDate: "Apr 24, 2026", totalContext: "1049K", maxOutput: "393K",
    inputPrice: "0.14", outputPrice: "0.28",
  },
  {
    vendor: "Moonshot AI", name: "Kimi-K2.6", type: "chat",
    releaseDate: "Apr 21, 2026", totalContext: "262K", maxOutput: "262K",
    inputPrice: "0.95", outputPrice: "4.0",
  },
  {
    vendor: "Tencent", name: "Hy3-preview", type: "chat",
    releaseDate: "Apr 7, 2026", totalContext: "131K", maxOutput: "262K",
    inputPrice: "0.0", outputPrice: "0.0",
  },
  {
    vendor: "Z.ai", name: "GLM-5.1", type: "chat",
    releaseDate: "Apr 3, 2026", totalContext: "205K", maxOutput: "131K",
    inputPrice: "1.4", outputPrice: "4.4",
  },
  {
    vendor: "MiniMaxAI", name: "MiniMax-M2.5", type: "chat",
    releaseDate: "Feb 15, 2026", totalContext: "197K", maxOutput: "131K",
    inputPrice: "0.3", outputPrice: "1.2",
  },
];

/** GPU 产品卡片 */
const GpuCard = ({ product }: { product: GpuProduct }) => {
  const badgeClass = product.badgeType === "hot"
    ? "bg-[var(--acc-soft)] text-[var(--acc)]"
    : product.badgeType === "new"
    ? "bg-[var(--green-soft)] text-[var(--green)]"
    : "bg-[var(--pri-soft)] text-[var(--pri)]";

  const isPriceText = product.price === "价格咨询";

  return (
    <div className={`relative bg-white border rounded-[18px] p-[24px_22px] flex flex-col transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[var(--shadow-md)] hover:border-[var(--line-2)] ${
      product.featured
        ? "border-2 border-transparent shadow-[0_18px_40px_-16px_rgba(91,91,255,.25)]"
        : "border-[var(--line)]"
    }`}
      style={product.featured ? {
        background: "linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg, var(--pri) 0%, var(--acc) 100%) border-box",
      } : undefined}
    >
      {product.featured && product.featTag && (
        <div className="absolute -top-px right-5 px-3 py-1 pb-1.5 rounded-b-lg bg-gradient-to-br from-[var(--pri)] to-[var(--acc)] text-white text-[11px] font-semibold tracking-wider">
          {product.featTag}
        </div>
      )}

      <div className="flex items-center justify-between mb-3.5">
        <div className="text-base font-bold tracking-[-0.01em] text-[var(--txt)]">{product.name}</div>
        <div className={`font-mono-code text-[10.5px] font-semibold px-2 py-[3px] rounded-[5px] tracking-wider ${badgeClass}`}>
          {product.badge}
        </div>
      </div>

      <div className="flex items-baseline gap-1 mb-1.5 font-mono-code">
        {!isPriceText && <span className="text-[18px] font-semibold mr-[-2px] text-[var(--txt)]">¥</span>}
        <span className={`text-4xl font-bold tracking-[-0.02em] leading-none ${
          product.featured
            ? "bg-gradient-to-br from-[var(--pri)] to-[var(--acc)] bg-clip-text text-transparent"
            : "text-[var(--txt)]"
        } ${isPriceText ? "!text-[30px]" : ""}`}>
          {product.price}
        </span>
        {product.unit && <span className="text-[13px] text-[var(--txt-3)] font-medium">{product.unit}</span>}
      </div>
      <div className="text-[12.5px] text-[var(--txt-3)] mb-[18px]">{product.note}</div>

      <a href="/" className={`block text-center py-2.5 px-4 rounded-[10px] text-[13.5px] font-semibold mb-[18px] transition-colors ${
        product.featured
          ? "bg-gradient-to-br from-[var(--pri)] to-[var(--pri-2)] text-white shadow-[0_6px_14px_-4px_rgba(91,91,255,.4)]"
          : "bg-[#0E1430] text-white hover:bg-[#1B2148]"
      }`}>
        {product.cta}
      </a>

      <div className="flex flex-col gap-px bg-[var(--line)] rounded-[10px] overflow-hidden border border-[var(--line)]">
        {product.specs.map((spec) => (
          <div key={spec.key} className="grid grid-cols-[64px_1fr_auto] gap-2.5 items-center px-3 py-2.5 bg-white text-[12.5px]">
            <span className="text-[var(--txt-3)] font-medium">{spec.key}</span>
            <span className="text-[var(--txt)] font-medium truncate text-left">{spec.val}</span>
            <span className="text-[var(--txt-4)] text-[10px]">▼</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/** 模型卡片 - SiliconFlow 风格 */
const ModelCard = ({ model }: { model: TokenModel }) => {
  return (
    <div className={`relative bg-white border rounded-[18px] p-6 flex flex-col transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[var(--shadow-md)] hover:border-[var(--line-2)] ${
      model.hot ? "border-[var(--pri-line)] shadow-[var(--shadow-md)]" : "border-[var(--line)]"
    }`}>
      {/* 厂商 + 类型 */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[12px] font-semibold text-[var(--txt-2)]">{model.vendor}</span>
        <span className="text-[10.5px] font-medium px-2 py-[2px] rounded-full bg-[var(--pri-soft)] text-[var(--pri)]">{model.type}</span>
        {model.hot && (
          <span className="text-[10.5px] font-medium px-2 py-[2px] rounded-full bg-[var(--acc-soft)] text-[var(--acc)]">HOT</span>
        )}
      </div>

      {/* 模型名称 */}
      <h3 className="text-[17px] font-bold text-[var(--txt)] tracking-[-0.01em] mb-2">{model.name}</h3>

      {/* 发布日期 */}
      <div className="text-[11.5px] text-[var(--txt-4)] mb-4">Release on: {model.releaseDate}</div>

      {/* 上下文信息 */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div>
          <div className="text-[11px] text-[var(--txt-4)] mb-1">Total Context</div>
          <div className="text-sm font-semibold text-[var(--txt)] font-mono-code">{model.totalContext}</div>
        </div>
        <div>
          <div className="text-[11px] text-[var(--txt-4)] mb-1">Max Output</div>
          <div className="text-sm font-semibold text-[var(--txt)] font-mono-code">{model.maxOutput}</div>
        </div>
      </div>

      {/* 价格 */}
      <div className="border-t border-[var(--line)] pt-4 mt-auto">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-[11px] text-[var(--txt-4)] mb-1">Input</div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-[11px] text-[var(--txt-3)]">$</span>
              <span className="text-xl font-bold text-[var(--txt)] font-mono-code">{model.inputPrice}</span>
              <span className="text-[11px] text-[var(--txt-4)]">/ M Tokens</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] text-[var(--txt-4)] mb-1">Output</div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-[11px] text-[var(--txt-3)]">$</span>
              <span className="text-xl font-bold text-[var(--txt)] font-mono-code">{model.outputPrice}</span>
              <span className="text-[11px] text-[var(--txt-4)]">/ M Tokens</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductRecommendation = () => {
  return (
    <>
      {/* GPU 产品 */}
      <section className="py-20" id="catalog">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <div className="inline-block text-[12px] text-[var(--pri)] uppercase tracking-[.18em] font-semibold mb-3.5">产品推荐</div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] leading-[1.2] tracking-[-0.02em] font-bold mb-3.5">算力售卖 · GPU 容器与集群</h2>
            <p className="text-[15.5px] leading-[1.7] text-[var(--txt-2)]">
              支持 NVIDIA、华为昇腾、海光、寒武纪等多种异构芯片，<a href="/pricing" className="text-[var(--pri)] font-medium">查看完整规格 →</a>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gpuProducts.map((p, i) => (
              <GpuCard key={`gpu-${i}`} product={p} />
            ))}
          </div>

          <p className="text-center text-[var(--txt-3)] text-[12.5px] leading-[1.7] mt-9">
            支持 <b className="text-[var(--txt-2)]">按量付费</b>、<b className="text-[var(--txt-2)]">包月</b>、<b className="text-[var(--txt-2)]">包年</b> 三种计费模式 · 注册即赠 ¥100 体验额度。
            <a href="/pricing" className="text-[var(--pri)] font-medium"> 查看完整价格表 →</a>
          </p>
        </div>
      </section>

      {/* 模型广场 */}
      <section className="pb-20" id="tokens">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <div className="inline-block text-[12px] text-[var(--pri)] uppercase tracking-[.18em] font-semibold mb-3.5">模型广场</div>
            <h2 className="text-[clamp(26px,3.2vw,38px)] leading-[1.2] tracking-[-0.02em] font-bold mb-3.5">一份 API 调遍全网模型</h2>
            <p className="text-[15.5px] leading-[1.7] text-[var(--txt-2)]">
              完全兼容 OpenAI 协议，覆盖 Text · Image · Video 全模态。<a href="/docs" className="text-[var(--pri)] font-medium">查看接入文档 →</a>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tokenModels.map((m, i) => (
              <ModelCard key={`model-${i}`} model={m} />
            ))}
          </div>

          <p className="text-center text-[var(--txt-3)] text-[12.5px] leading-[1.7] mt-9">
            统一目录已聚合 <b className="text-[var(--txt-2)]">50+ 主流模型</b>，包含 DeepSeek、Kimi、GLM、MiniMax、阶跃星辰等。
            <a href="/models" className="text-[var(--pri)] font-medium"> 查看全部模型 →</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductRecommendation;
