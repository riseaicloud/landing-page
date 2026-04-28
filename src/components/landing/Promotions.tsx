import { Button } from "@/components/ui/button";

/**
 * Callout 横幅
 * 企业咨询 + 新用户赠券两条 banner
 */

const Promotions = () => {
  return (
    <section className="pb-20">
      <div className="max-w-[880px] mx-auto px-8 flex flex-col gap-4">
        {/* 企业用户 */}
        <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-center bg-white border border-[var(--line)] rounded-[18px] p-[22px_28px] shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] transition-all duration-300">
          <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-[var(--pri)] to-[var(--pri-3)] grid place-items-center text-white text-[26px] font-extrabold shrink-0 shadow-[0_8px_18px_-4px_rgba(91,91,255,.4)]">
            ⚡
          </div>
          <div>
            <h4 className="text-base font-bold tracking-[-0.01em] mb-2 text-[var(--txt)]">面向企业用户的算力服务</h4>
            <ul className="flex flex-col gap-[5px]">
              <li className="text-[13px] text-[var(--txt-2)] leading-[1.6] pl-3.5 relative before:content-[''] before:absolute before:left-0.5 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[var(--pri)]">
                专属客户经理 1V1 对接，按需定制资源池规模
              </li>
              <li className="text-[13px] text-[var(--txt-2)] leading-[1.6] pl-3.5 relative before:content-[''] before:absolute before:left-0.5 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[var(--pri)]">
                统一配额管理 · 多项目成本分摊 · 操作审计 · 等保合规
              </li>
            </ul>
          </div>
          <Button variant="primary">企业咨询</Button>
        </div>

        {/* 新用户 */}
        <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-center bg-white border border-[var(--line)] rounded-[18px] p-[22px_28px] shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] transition-all duration-300">
          <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-[var(--acc)] to-[#FFB37A] grid place-items-center text-white text-[26px] font-extrabold shrink-0 shadow-[0_8px_18px_-4px_rgba(255,111,168,.4)]">
            🎁
          </div>
          <div>
            <h4 className="text-base font-bold tracking-[-0.01em] mb-2 text-[var(--txt)] flex items-center gap-2">
              <span className="text-[var(--amber)]">★</span> 新用户专享，限量赠送算力券！
            </h4>
            <ul className="flex flex-col gap-[5px]">
              <li className="text-[13px] text-[var(--txt-2)] leading-[1.6] pl-3.5 relative before:content-[''] before:absolute before:left-0.5 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[var(--acc)]">
                新注册账号即赠 ¥100 通用券，可抵扣 GPU 容器与模型 API 用量
              </li>
              <li className="text-[13px] text-[var(--txt-2)] leading-[1.6] pl-3.5 relative before:content-[''] before:absolute before:left-0.5 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[var(--acc)]">
                完成实名认证再领 ¥200 训练券，活动每月限量发放
              </li>
            </ul>
          </div>
          <Button variant="primary">立即领取</Button>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
