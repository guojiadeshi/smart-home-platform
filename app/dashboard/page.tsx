export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">用户面板</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
          当前版本作为最简占位页。下一阶段会接入真实登录状态、我的需求单、收藏方案、顾问沟通记录。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["我的需求单", "查看已提交的家庭智能化需求。"],
            ["我的收藏方案", "保存感兴趣的 smart home 方案。"],
            ["顾问沟通记录", "查看平台后续联系与匹配进度。"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-black/5 bg-[#fafaf8] p-5">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
