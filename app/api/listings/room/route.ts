import { NextResponse } from "next/server";
import ListingService from "@/app/service/listing.service";

/**
 * Get a specific property/room by ID
 */
export async function GET() {
  const id = "44119404";
  const data = ListingService.getRoomById(id)
  return NextResponse.json({ data });
}
