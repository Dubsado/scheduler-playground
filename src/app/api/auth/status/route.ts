import { NextResponse } from "next/server";

export async function GET() {
  // For now, returning a hardcoded value
  return NextResponse.json({ isLoggedIn: false });
}
