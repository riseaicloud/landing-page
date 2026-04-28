import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const gpus = [
  { name: "NVIDIA H100", spec: "80GB HBM3 · SXM5", price: "12.80", available: 128, tag: "旗舰" },
  { name: "NVIDIA A100", spec: "80GB HBM2e · SXM4", price: "6.50", available: 512, tag: "热门" },
  { name: "NVIDIA L40S", spec: "48GB GDDR6", price: "3.20", available: 1024, tag: "推理" },
  { name: "NVIDIA RTX 4090", spec: "24GB GDDR6X", price: "1.50", available: 2048, tag: "性价比" },
];

const Marketplace = () => {
  return (
    <section id="marketplace" className="relative py-32 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="font-mono-tech text-xs text-muted-foreground mb-4">// MARKETPLACE</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-iridescent">实时算力</span> 市场
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl">
              透明定价，秒级可用。选择适合您工作负载的 GPU 型号。
            </p>
          </div>
          <Button variant="outlineGlow" size="lg">
            浏览全部
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gpus.map((g, i) => (
            <div
              key={g.name}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-elevated transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-5 right-5 px-2 py-0.5 text-[10px] font-mono-tech rounded-full bg-iridescent-soft text-foreground border border-border">
                {g.tag}
              </div>
              <div className="w-12 h-12 rounded-xl bg-iridescent shadow-glow mb-5 grid place-items-center font-mono-tech text-primary-foreground font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-base text-foreground mb-1">{g.name}</h3>
              <p className="text-xs text-muted-foreground font-mono-tech">{g.spec}</p>

              <div className="mt-6 pt-5 border-t border-border flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">起价</div>
                  <div className="text-2xl font-bold text-iridescent font-mono-tech tabular-nums">
                    ¥{g.price}
                    <span className="text-xs text-muted-foreground font-normal">/h</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">可用</div>
                  <div className="text-sm font-semibold tabular-nums text-foreground">
                    {g.available.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;