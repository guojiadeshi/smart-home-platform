"use client";

import { useState } from "react";

type Props = {
  selectedPlanId?: string;
};

export function InquiryForm({ selectedPlanId }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      houseType: formData.get("houseType"),
      areaSize: formData.get("areaSize"),
      budgetRange: formData.get("budgetRange"),
      renovationStage: formData.get("renovationStage"),
      demandNotes: formData.get("demandNotes"),
      selectedPlanId,
    };

    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <form action={handleSubmit} className="grid gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">提交家庭需求</h3>

      <input name="name" placeholder="姓名" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="phone" placeholder="手机号" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="city" placeholder="城市" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="houseType" placeholder="户型，例如三居" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="areaSize" placeholder="面积，例如120㎡" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="budgetRange" placeholder="预算区间，例如5万-8万" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="renovationStage" placeholder="装修阶段，例如装修中" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <textarea
        name="demandNotes"
        placeholder="补充需求，例如重视安防、灯光氛围、老人小孩使用场景"
        rows={5}
        className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-black px-5 py-3 text-sm text-white transition hover:bg-gray-800 disabled:opacity-60"
      >
        {status === "loading" ? "提交中..." : "提交需求"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-green-600">提交成功，我们会尽快联系你。</p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-red-600">提交失败，请稍后重试。</p>
      ) : null}
    </form>
  );
}
