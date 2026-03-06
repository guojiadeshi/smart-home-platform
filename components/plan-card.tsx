import Link from "next/link";
import { Plan } from "@/lib/types";

type Props = {
  plan: Plan;
};

export function PlanCard({ plan }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={plan.coverImage}
        alt={plan.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{plan.title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">{plan.summary}</p>

        <div className="mt-5 space-y-2 text-sm text-gray-500">
          <p>适用户型：{plan.houseType}</p>
          <p>面积范围：{plan.areaRange}</p>
          <p>预算区间：{plan.budgetRange}</p>
        </div>

        <Link
          href={`/plans/${plan.slug}`}
          className="mt-6 inline-flex rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
        >
          查看详情
        </Link>
      </div>
    </article>
  );
}
