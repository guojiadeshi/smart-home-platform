import { PartnerForm } from "@/components/partner-form";
import { SectionTitle } from "@/components/section-title";

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Partners"
            title="合作入驻"
            description="当前版本开放两类合作申请：工程实施方与供应商。平台后续将增加审核、资料页、案例展示和撮合逻辑。"
          />

          <div className="mt-8 space-y-4">
            {[
              ["工程实施方", "适合智能家居安装、系统集成、调试和交付团队。"],
              ["设备/家具供应商", "适合提供智能照明、窗帘、安防、传感器、网关等品类。"],
              ["平台能力", "后续可扩展区域覆盖、案例展示、评分与合作管理。"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <PartnerForm />
      </div>
    </div>
  );
}
