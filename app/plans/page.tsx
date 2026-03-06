import { plans } from "@/lib/data";
import { PlanCard } from "@/components/plan-card";
import { SectionTitle } from "@/components/section-title";

export default function PlansPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        eyebrow="Plans"
        title="方案中心"
        description="按户型、面积、预算和装修阶段浏览适合你的 smart home 方案。当前版本先展示平台标准化推荐方案。"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
