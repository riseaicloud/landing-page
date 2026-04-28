const cols = [
  {
    title: "产品",
    links: ["算力市场", "大模型服务", "推理 API", "训练平台"],
  },
  {
    title: "资源",
    links: ["开发文档", "API 参考", "示例代码", "更新日志"],
  },
  {
    title: "公司",
    links: ["关于我们", "联系销售", "加入我们", "合作伙伴"],
  },
];

const Footer = () => {
  return (
    <footer id="about" className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-iridescent shadow-glow" />
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-iridescent">星河</span>算力
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            连接全球 GPU，赋能下一代 AI 创新者。
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <div className="font-mono-tech text-xs text-muted-foreground mb-4">
              // {col.title.toUpperCase()}
            </div>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-foreground hover:text-iridescent transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono-tech">
          <div>© 2026 星河算力 · ALL SYSTEMS OPERATIONAL</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-iridescent animate-pulse" />
            <span>STATUS: ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;