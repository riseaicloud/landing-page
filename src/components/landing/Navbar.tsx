import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const navLinks = [
  { label: "算力市场", href: "#marketplace" },
  { label: "大模型服务", href: "#models" },
  { label: "关于我们", href: "#about" },
  { label: "文档", href: "#docs" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-iridescent shadow-glow grid place-items-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-iridescent">星河</span>
              <span className="text-foreground">算力</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            登录
          </a>
          <Button variant="iridescent" size="sm">
            控制台
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;