import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Activity } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid -z-10 opacity-60" />
      <div className="absolute inset-x-0 top-0 h-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(var(--primary-glow) / 0.18), transparent 60%)",
        }}
      />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-glow animate-pulse-glow -z-10" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full -z-10 opacity-50 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, hsl(245 80% 65% / 0.3), transparent 70%)", animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs px-3 py-1.5 mb-8 border border-border rounded-full bg-card/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-iridescent" />
            <span className="text-muted-foreground">// COMPUTE.MARKETPLACE</span>
            <span className="text-foreground">v2.0</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-iridescent">解锁无限算力</span>
            <br />
            <span className="text-foreground">赋能您的 AI 创新</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
            接入全球领先的 GPU 集群，按需获取强大的计算资源，
            <br className="hidden sm:block" />
            加速您的模型训练、推理与大规模部署。
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="iridescent" size="lg" className="px-8">
              立即开始
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outlineGlow" size="lg" className="px-8">
              查看文档
            </Button>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-border max-w-lg">
            {[
              { label: "可用 GPU", value: "3,456" },
              { label: "活跃模型", value: "1,234" },
              { label: "节点延迟", value: "<5ms" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-iridescent font-mono-tech tabular-nums">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: visual cluster */}
        <div className="relative animate-float-up" style={{ animationDelay: "0.15s" }}>
          <div className="grid grid-cols-3 gap-3 aspect-square">
            {/* Hero card */}
            <div className="col-span-2 row-span-2 rounded-2xl p-6 bg-card/70 backdrop-blur-sm border border-border shadow-elevated flex flex-col justify-between relative overflow-hidden group hover:shadow-glow transition-all duration-500">
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-glow opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="font-mono-tech text-xs text-muted-foreground mb-3">GPU.A100.80G</div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-iridescent grid place-items-center shadow-glow">
                    <Cpu className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">高性能 GPU</h3>
                    <p className="text-sm text-muted-foreground mt-1">企业级算力 · 按需计费</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-iridescent font-mono-tech">¥1.50</span>
                  <span className="text-sm text-muted-foreground">/ 小时</span>
                </div>
                {/* Mini chart */}
                <div className="flex items-end gap-1 h-10 mt-4">
                  {[40, 65, 50, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-iridescent opacity-70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Small card 1 */}
            <div className="rounded-2xl p-4 bg-card/70 backdrop-blur-sm border border-border shadow-soft hover:border-primary/40 transition-colors">
              <div className="font-mono-tech text-[10px] text-muted-foreground mb-2">MODEL.HOST</div>
              <Zap className="w-5 h-5 text-iridescent mb-2" style={{ color: "hsl(var(--primary))" }} />
              <div className="font-semibold text-sm text-foreground">模型托管</div>
              <div className="text-xs text-muted-foreground mt-0.5">即时部署</div>
            </div>

            {/* Small card 2 */}
            <div className="rounded-2xl p-4 bg-card/70 backdrop-blur-sm border border-border shadow-soft hover:border-primary/40 transition-colors">
              <div className="font-mono-tech text-[10px] text-muted-foreground mb-2">AUTO.SCALE</div>
              <Activity className="w-5 h-5 mb-2" style={{ color: "hsl(var(--secondary))" }} />
              <div className="font-semibold text-sm text-foreground">弹性伸缩</div>
              <div className="text-xs text-muted-foreground mt-0.5">秒级扩容</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;