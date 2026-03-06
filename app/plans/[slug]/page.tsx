import { notFound } from "next/navigation";
import { plans } from "@/lib/data";
import { InquiryForm } from "@/components/inquiry-form";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlanDetailPage({ params }: Props) {
  const { slug } = await params;
  const plan = plans.find((item) => item.slug === slug);

  if (!plan) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <img
            src={plan.coverImage}
            alt={plan.title}
            className="h-[420px] w-full rounded-[2rem] object-cover"
          />

          <div className="mt-8">
            <h1 className="text-4xl font-semibold tracking-tight">{plan.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
              {plan.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">适用户型</p>
                <p className="mt-2 font-medium">{plan.houseType}</p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">面积范围</p>
                <p className="mt-2 font-medium">{plan.areaRange}</p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">预算区间</p>
                <p className="mt-2 font-medium">{plan.budgetRange}</p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">适合阶段</p>
                <p className="mt-2 font-medium">{plan.renovationStage}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold">方案包含模块</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {plan.modules.map((module) => (
                  <div
                    key={module.name}
                    className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold">{module.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <InquiryForm selectedPlanId={plan.id} />
        </div>
      </div>
    </div>
  );
}
