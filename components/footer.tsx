export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">SmartNest</h3>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            连接 smart home 工程实施方与优质供应商，
            为家庭用户提供一站式方案选择与落地服务。
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            导航
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>首页</li>
            <li>方案中心</li>
            <li>合作入驻</li>
            <li>用户面板</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            联系方式
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>邮箱：hello@smartnest.com</li>
            <li>电话：400-888-8888</li>
            <li>服务：全国重点城市逐步开通</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
