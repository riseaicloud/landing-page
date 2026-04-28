/**
 * 客户案例区域
 * 展示典型客户案例，增强平台可信度
 */

const CaseStudy = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文案 */}
          <div>
            <div className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-4">
              客户案例 CUSTOMER CASE
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-6">
              某新锐车厂广泛智能驾驶赛道，
              <br />
              实现数据分析与模型训练
              <br />
              低效能飞跃
            </h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full" />
          </div>

          {/* 右侧卡片 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              该车厂通过基石智算平台，将自动驾驶模型训练效率提升 300%，
              数据处理周期从数周缩短至数天。基于 A100/H100 GPU 集群和高速存储，
              实现大规模感知模型的快速迭代与部署。
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              <div>
                <div className="text-2xl font-bold text-blue-500">300%</div>
                <div className="text-xs text-gray-400 mt-1">训练效率提升</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">70%</div>
                <div className="text-xs text-gray-400 mt-1">成本降低</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">5x</div>
                <div className="text-xs text-gray-400 mt-1">迭代速度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
