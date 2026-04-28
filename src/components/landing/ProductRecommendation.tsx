import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * 产品优选区域
 * GPU 产品卡片网格，展示价格和核心配置
 */

/** GPU 产品数据类型 */
interface GpuProduct {
  /** GPU 型号名称 */
  name: string;
  /** 价格（元/小时 或 元/月） */
  price: string;
  /** 价格单位 */
  unit: string;
  /** 显存 */
  vram: string;
  /** CPU */
  cpu: string;
  /** 内存 */
  memory: string;
  /** 存储 */
  storage: string;
  /** 是否热门推荐 */
  hot?: boolean;
  /** 标签（如"更多NVIDIA系列价格信息"） */
  moreLabel?: string;
}

/** 产品列表 - 第一行 4 个 */
const row1: GpuProduct[] = [
  {
    name: "NVIDIA 4090-D",
    price: "1.79",
    unit: "元/小时",
    vram: "24G",
    cpu: "16核",
    memory: "64GB",
    storage: "50GB",
  },
  {
    name: "NVIDIA H100",
    price: "12.9",
    unit: "元/小时",
    vram: "80G",
    cpu: "32核",
    memory: "128GB",
    storage: "50GB",
    hot: true,
  },
  {
    name: "NVIDIA A100 PCIe",
    price: "3.45",
    unit: "元/小时",
    vram: "40G",
    cpu: "16核",
    memory: "64GB",
    storage: "50GB",
  },
  {
    name: "NVIDIA A100 SXM",
    price: "3万",
    unit: "元/月",
    vram: "80G",
    cpu: "32核",
    memory: "256GB",
    storage: "200GB",
  },
];

/** 产品列表 - 第二行 4 个 */
const row2: GpuProduct[] = [
  {
    name: "NVIDIA A800 PCIe",
    price: "3万",
    unit: "元/月",
    vram: "80G",
    cpu: "64核 ×4",
    memory: "512GB",
    storage: "200GB",
  },
  {
    name: "NVIDIA H100",
    price: "6万",
    unit: "元/月",
    vram: "80G",
    cpu: "128核 ×8",
    memory: "1TB",
    storage: "500GB",
  },
  {
    name: "NVIDIA H800",
    price: "6.57",
    unit: "元/小时",
    vram: "80G ×8",
    cpu: "128核",
    memory: "1TB",
    storage: "200GB",
  },
  {
    name: "",
    price: "",
    unit: "",
    vram: "",
    cpu: "",
    memory: "",
    storage: "",
    moreLabel: "更多 NVIDIA 系列\n价格信息",
  },
];

/**
 * 单个产品卡片
 * @param product - 产品数据
 */
const ProductCard = ({ product }: { product: GpuProduct }) => {
  /** 占位卡片（更多信息入口） */
  if (product.moreLabel) {
    return (
      <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 flex flex-col items-center justify-center text-white min-h-[280px] cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
        <div className="text-center text-lg font-semibold leading-relaxed whitespace-pre-line mb-4">
          {product.moreLabel}
        </div>
        <ArrowRight className="w-5 h-5" />
      </div>
    );
  }

  return (
    <div className={`relative bg-white rounded-xl border min-h-[280px] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
      product.hot ? "border-blue-300 shadow-md" : "border-gray-200"
    }`}>
      {/* 热门标签 */}
      {product.hot && (
        <div className="absolute -top-px -right-px bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
          HOT
        </div>
      )}

      <div className="p-5">
        {/* GPU 名称 */}
        <h3 className="font-semibold text-base text-gray-900 mb-3">{product.name}</h3>

        {/* 价格 */}
        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-sm text-gray-400">¥</span>
          <span className="text-3xl font-bold text-blue-500">{product.price}</span>
          <span className="text-sm text-gray-400">{product.unit}</span>
        </div>

        {/* 配置参数 */}
        <div className="space-y-2.5 text-sm mb-5">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-10 shrink-0">显存</span>
            <span className="text-gray-700">{product.vram}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-10 shrink-0">CPU</span>
            <span className="text-gray-700">{product.cpu}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-10 shrink-0">内存</span>
            <span className="text-gray-700">{product.memory}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-10 shrink-0">存储</span>
            <span className="text-gray-700">{product.storage}</span>
          </div>
        </div>

        {/* CTA */}
        <Button variant="blueOutline" size="sm" className="w-full rounded-lg">
          立即购买
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
};

const ProductRecommendation = () => {
  return (
    <section id="products" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            产品优选
          </h2>
          <p className="text-gray-500 text-base">
            基石智算提供丰富的GPU算力产品，满足训练、推理、微调全场景需求
          </p>
        </div>

        {/* 第一行 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {row1.map((product, i) => (
            <ProductCard key={`r1-${i}`} product={product} />
          ))}
        </div>

        {/* 第二行 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {row2.map((product, i) => (
            <ProductCard key={`r2-${i}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendation;
