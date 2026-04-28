import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * 顶部导航栏
 * RiseCloud 品牌，indigo 主色，毛玻璃背景
 */

/** 导航链接配置 */
const navLinks = [
  { label: "算力售卖", href: "/catalog" },
  { label: "模型广场", href: "/models" },
  { label: "解决方案", href: "/solutions" },
  { label: "产品", href: "/products" },
  { label: "关于我们", href: "/about" },
  { label: "开发者文档", href: "/docs" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl backdrop-saturate-150 bg-[rgba(244,246,251,.78)] border-b border-[rgba(14,20,48,.05)]">
      <div className="max-w-[1240px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* 品牌 */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-[30px] h-[30px] rounded-[9px] bg-gradient-to-br from-[#5B5BFF] via-[#7A6BFF] to-[#A78BFA] grid place-items-center shadow-[0_6px_16px_-4px_rgba(91,91,255,.45)]">
            <span className="text-white font-extrabold text-sm">R</span>
          </div>
          <span className="font-bold text-[17px] text-[var(--txt)]">
            Rise<span className="text-[var(--pri)]">Cloud</span>
          </span>
        </a>

        {/* 导航链接 */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--txt-2)] hover:text-[var(--txt)] hover:bg-[rgba(14,20,48,.04)] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 右侧操作 */}
        <div className="flex items-center gap-2">
          <a href="/login" className="px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--txt-2)] hover:text-[var(--txt)]">
            登录
          </a>
          <Button variant="primary" size="sm" className="gap-2">
            控制台
            <ArrowRight className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
