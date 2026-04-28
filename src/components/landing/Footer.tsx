/**
 * 页脚区域
 * 多列链接布局 + 底部版权信息
 */

/** 页脚链接列配置 */
const columns = [
  {
    title: "个人算力产品",
    links: ["GPU容器机", "GPU裸金属", "云服务器"],
  },
  {
    title: "企业算力产品",
    links: ["私有化部署", "专属云", "智算集群"],
  },
  {
    title: "产品",
    links: ["模型市场", "DeepSeek", "数据服务"],
  },
  {
    title: "帮助",
    links: ["帮助中心", "API文档", "计费说明", "联系我们"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Logo 区 */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <div className="flex items-center gap-2 mb-8">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="shrink-0">
            <rect width="28" height="28" rx="6" fill="#0088FF" />
            <path d="M8 8h5v5H8V8zm7 0h5v5h-5V8zm-7 7h5v5H8v-5zm7 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" fill="white" />
          </svg>
          <span className="text-base font-bold text-gray-900">
            基石智算
          </span>
          <span className="text-xs text-gray-400 ml-1">CornerHub</span>
        </div>
      </div>

      {/* 链接列 */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-blue-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 底部版权 */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <div>
            版权所有 © 2026 基石智算科技有限公司 · 京ICP备XXXXXXXX号-1 · 京公网安备XXXXXXXXXXXXX号
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-600">隐私协议</a>
            <a href="#" className="hover:text-gray-600">服务条款</a>
            <a href="#" className="hover:text-gray-600">使用条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
