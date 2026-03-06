import Link from "next/link";
import { plans } from "@/lib/data";
import { PlanCard } from "@/components/plan-card";
import { SectionTitle } from "@/components/section-title";
import { InquiryForm } from "@/components/inquiry-form";

export default function HomePage() {
  const featuredPlans = plans.filter((plan) => plan.featured);

  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Smart Home Platform
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            让家真正变聪明
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
            从方案设计到设备配置，再到工程落地，
            我们连接 smart home 实施方与优质供应商，
            帮家庭用户快速找到适合自己的智能家居方案。
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/plans"
              className="rounded-full bg-black px-6 py-3 text-sm text-white transition hover:bg-gray-800"
            >
              选择我的方案
            </Link>
            <Link
              href="/partners"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-700 transition hover:border-black hover:text-black"
            >
              申请合作入驻
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80"
            alt="现代智能家居空间"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Why us"
          title="一个平台，串起 smart home 从想法到落地"
          description="第一版聚焦三个核心价值：标准化方案、优质实施资源、设备与场景的可组合能力。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["标准化方案", "按户型、预算、装修阶段快速找到适配方案。"],
            ["实施方对接", "沉淀工程实施团队，提升落地效率与交付质量。"],
            ["供应商连接", "连接智能设备与家具供应商，形成可扩展方案库。"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Featured plans"
          title="推荐方案"
          description="先从高频用户需求出发，把方案讲清楚，再逐步扩展成平台撮合能力。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Flow"
            title="使用流程"
            description="先选方案，再留需求，再由平台进一步匹配施工与供应资源。"
          />
          <div className="mt-8 space-y-5">
            {[
              "1. 浏览不同户型与预算的 smart home 方案",
              "2. 选择适合自己的方案或提交定制需求",
              "3. 平台评估需求并匹配实施方与供应商",
              "4. 进入深化设计、报价与工程落地阶段",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-black/5 bg-white p-4 text-sm text-gray-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <InquiryForm />
      </section>
    </div>
  );
}
