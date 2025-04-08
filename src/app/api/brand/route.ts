import { NextResponse } from "next/server";
import { BrandInfo } from "@/lib/types";

export async function GET() {
  // Mock data - in a real application, this would come from a database or CMS
  const brandInfo: BrandInfo = {
    name: "My Brand Name",
    logo: "https://plus.unsplash.com/premium_vector-1720571239764-ba82e24f7c78?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3", // Using placeholder.com for the logo
    primaryColor: "#dc2626", // red-600
  };

  return NextResponse.json(brandInfo);
}
