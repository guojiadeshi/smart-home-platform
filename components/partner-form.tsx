"use client";

import { useState } from "react";

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");

    const payload = {
      companyName: formData.get("companyName"),
      contactName: formData.get("contactName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      partnerType: formData.get("partnerType"),
      businessScope: formData.get("businessScope"),
      caseIntro: formData.get("caseIntro"),
    };

    const res = await fetch("/api/partners", {
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
      <h3 className="text-xl font-semibold">申请合作入驻</h3>

      <input name="companyName" placeholder="公司名称" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="contactName" placeholder="联系人" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="phone" placeholder="联系电话" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="email" placeholder="邮箱" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <input name="city" placeholder="所在城市" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />

      <select name="partnerType" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black">
        <option value="">请选择合作类型</option>
        <option value="contractor">工程实施方</option>
        <option value="supplier">供应商</option>
      </select>

      <input name="businessScope" placeholder="主营方向，例如智能照明 / 全屋集成 / 安防系统" required className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black" />
      <textarea
        name="caseIntro"
        placeholder="过往项目案例简介"
        rows={5}
        className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-black px-5 py-3 text-sm text-white transition hover:bg-gray-800 disabled:opacity-60"
      >
        {status === "loading" ? "提交中..." : "提交申请"}
      </button>

      {status === "success" ? <p className="text-sm text-green-600">申请已提交，我们会尽快审核。</p> : null}
      {status === "error" ? <p className="text-sm text-red-600">提交失败，请稍后再试。</p> : null}
    </form>
  );
}
