import { NextResponse } from "next/server";
import { InquiryPayload } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as InquiryPayload;

    if (!body.name || !body.phone || !body.city) {
      return NextResponse.json(
        { message: "缺少必填字段" },
        { status: 400 }
      );
    }

    console.log("New inquiry:", body);

    return NextResponse.json(
      { message: "需求已接收" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry API error:", error);

    return NextResponse.json(
      { message: "服务器错误" },
      { status: 500 }
    );
  }
}
