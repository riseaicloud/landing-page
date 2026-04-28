import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

/**
 * 顶部导航栏
 * 基石智算风格，白色背景，蓝色品牌色
 */

/** 导航链接配置 */
const navLinks = [
  { label: "算力市场", href: "#products" },
  { label: "大模型互联市场", href: "#models", badge: true },
  { label: "解决方案 400+", href: "#solutions", highlight: true },
  { label: "解决方案", href: "#solutions", hasDropdown: true },
  { label: "产品", href: "#products-all", hasDropdown: true },
  { label: "关于我们", href: "#about", hasDropdown: true },
  { label: "文档", href: "#docs" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* 左侧：logo + 导航 */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
              <rect width="28" height="28" rx="6" fill="#0088FF" />
              <path d="M8 8h5v5H8V8zm7 0h5v5h-5V8zm-7 7h5v5H8v-5zm7 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" fill="white" />
            </svg>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              基石智算
            </span>
          </a>

          {/* 导航链接 */}
          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-200 ${
                    link.highlight
                      ? "text-blue-500 font-semibold bg-blue-50"
                      : "text-gray-600 hover:text-blue-500 hover:bg-gray-50 font-medium"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 右侧：操作按钮 */}
        <div className="flex items-center gap-3">
          <a href="#console" className="hidden sm:flex items-center gap-1 text-sm text-gray-600 hover:text-blue-500 font-medium px-3 py-2">
            控制台
          </a>
          <a href="#login" className="text-sm text-gray-600 hover:text-gray-900 font-medium px-3 py-2">
            登录
          </a>
          <Button variant="blue" size="sm" className="px-5 rounded-lg">
            注册
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
