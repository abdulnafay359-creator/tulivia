import { NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

export async function GET() {
  try {
    const productCount = await prisma.product.count()
    return NextResponse.json({ count: productCount })
  } catch (error) {
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 })
  }
}