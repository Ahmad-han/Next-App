import { NextResponse } from "next/server";
import { Blogs_Data } from "@/app/api/hello/blog";

export async function GET(request: Request) {
    return NextResponse.json(Blogs_Data)
}