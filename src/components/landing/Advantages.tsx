import { Cpu, Network, HardDrive, Expand, BookOpen, Headphones } from "lucide-react";

/**
 * 产品优势区域
 * 6 个优势卡片，2行3列布局，每个带图标和描述
 */

/** 优势项配置 */
const advantages = [
  {
    icon: Cpu,
    title: "史诗级算力",
    description: "搭载最新 NVIDIA H100/A100 GPU，FP16 算力高达 1979 TFLOPS，满足大规模模型训练和推理需求。",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: Network,
    title: "极高网络性能",
    description: "IB 400Gbps 高速互联网络，支持 RDMA 通信，千卡级分布式训练延迟低至微秒级。",
    color: "text-cyan-500 bg-cyan-50",
  },
  {
    icon: HardDrive,
    title: "专属高速存储服务",
    description: "NVMe SSD 本地存储 + 分布式高性能文件系统，顺序读写速度高达 7GB/s，满足海量数据吞吐。",
    color: "text-green-500 bg-green-50",
  },
  {
    icon: Expand,
    title: "弹性扩容",
    description: "分钟级实例创建与释放，灵活扩缩容，按需使用按量计费，资源利用率最大化。",
    color: "text-purple-500 bg-purple-50",
  },
  {
    icon: BookOpen,
    title: "深度学习环境集成",
    description: "预装 PyTorch、TensorFlow、CUDA 等主流框架，内置 Jupyter Notebook，开箱即用零配置。",
    color: "text-orange-500 bg-orange-50",
  },
  {
    icon: Headphones,
    title: "高端专属服务",
    description: "7×24 小时技术支持，专属客户经理一对一服务，SLA 99.9% 可用性保障。",
    color: "text-rose-500 bg-rose-50",
  },
];

const Advantages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            产品优势
          </h2>
          <p className="text-gray-500">
            全方位技术能力，助力 AI 创新
          </p>
        </div>

        {/* 2x3 优势网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group text-center"
            >
              {/* 图标 */}
              <div className={`w-16 h-16 rounded-2xl ${item.color} grid place-items-center mx-auto mb-5`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
