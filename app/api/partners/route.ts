import { NextResponse } from "next/server";
import { PartnerPayload } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PartnerPayload;

    if (!body.companyName || !body.contactName || !body.phone || !body.partnerType) {
      return NextResponse.json(
        { message: "缺少必填字段" },
        { status: 400 }
      );
    }

    console.log("New partner application:", body);

    return NextResponse.json(
      { message: "合作申请已接收" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Partner API error:", error);

    return NextResponse.json(
      { message: "服务器错误" },
      { status: 500 }
    );
  }
}
