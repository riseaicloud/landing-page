/**
 * 深色页脚
 * 品牌 + 3 列链接 + 二维码 + 底部版权
 */

const columns = [
  {
    title: "产品",
    links: ["GPU 容器", "虚拟集群", "模型 API", "Rise Router", "应用商店"],
  },
  {
    title: "开发者",
    links: ["快速开始", "API 文档", "SDK", "价格", "状态页"],
  },
  {
    title: "公司",
    links: ["关于睿思", "客户案例", "合作伙伴", "招聘", "联系我们"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0E1430] text-[#A0A6BE] pt-14 pb-7 mt-10">
      <div className="max-w-[1240px] mx-auto px-8">
        {/* 网格：品牌 + 3列 + 二维码 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_repeat(3,1fr)_auto] gap-12 mb-9">
          {/* 品牌 */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-[30px] h-[30px] rounded-[9px] bg-gradient-to-br from-[#5B5BFF] via-[#7A6BFF] to-[#A78BFA] grid place-items-center shadow-[0_6px_16px_-4px_rgba(91,91,255,.45)]">
                <span className="text-white font-extrabold text-sm">R</span>
              </div>
              <span className="font-bold text-[17px] text-white">
                Rise<span className="text-[#A78BFA]">Cloud</span>
              </span>
            </div>
            <p className="text-[13px] text-[#7E84A0] leading-[1.65] max-w-[280px]">
              睿思（RiseUnion）出品的算力标准化平台。让算力可管、可用、可交易。
            </p>
          </div>

          {/* 链接列 */}
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="text-[12px] text-white uppercase tracking-[.15em] font-semibold mb-4">{col.title}</h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="/" className="text-[13.5px] text-[#A0A6BE] hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 二维码 */}
          <div className="text-center">
            <div className="w-24 h-24 rounded-[10px] bg-white grid place-items-center mx-auto">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <rect x="4" y="4" width="20" height="20" rx="2" stroke="#0E1430" strokeWidth="3" />
                <rect x="48" y="4" width="20" height="20" rx="2" stroke="#0E1430" strokeWidth="3" />
                <rect x="4" y="48" width="20" height="20" rx="2" stroke="#0E1430" strokeWidth="3" />
                <rect x="10" y="10" width="8" height="8" fill="#0E1430" />
                <rect x="54" y="10" width="8" height="8" fill="#0E1430" />
                <rect x="10" y="54" width="8" height="8" fill="#0E1430" />
                <rect x="30" y="10" width="4" height="4" fill="#0E1430" />
                <rect x="38" y="14" width="4" height="4" fill="#0E1430" />
                <rect x="32" y="22" width="4" height="4" fill="#0E1430" />
                <rect x="42" y="28" width="4" height="4" fill="#0E1430" />
                <rect x="30" y="36" width="6" height="6" fill="#0E1430" />
                <rect x="42" y="42" width="4" height="4" fill="#0E1430" />
                <rect x="50" y="38" width="4" height="4" fill="#0E1430" />
                <rect x="58" y="44" width="6" height="6" fill="#0E1430" />
                <rect x="32" y="48" width="4" height="4" fill="#0E1430" />
                <rect x="42" y="56" width="4" height="4" fill="#0E1430" />
                <rect x="52" y="60" width="4" height="4" fill="#0E1430" />
                <rect x="60" y="54" width="4" height="4" fill="#0E1430" />
              </svg>
            </div>
            <p className="text-[11.5px] mt-2 text-[#7E84A0]">关注公众号</p>
          </div>
        </div>

        {/* 底部 */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-[22px] border-t border-white/[.07] text-[12.5px] text-[#7E84A0] gap-3">
          <div>© 2026 睿思（RiseUnion）· RiseCloud 算力标准化平台</div>
          <div className="flex gap-6">
            <a href="/" className="hover:text-white transition-colors">服务协议</a>
            <a href="/" className="hover:text-white transition-colors">隐私政策</a>
            <a href="/" className="hover:text-white transition-colors">ICP 备案号 12345678</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
