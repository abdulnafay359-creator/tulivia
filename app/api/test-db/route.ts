import { prisma } from "@/lib/db/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const userCount = await prisma.user.count()
    return NextResponse.json({ success: true, userCount })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 })
  }
}