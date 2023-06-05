import { NextResponse } from "next/server";
import ListingService from "@/app/service/listing.service";

/**
 * Get a specific property/room by ID
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ data: null });
  }
  
  // const id = "44119404";
  const data = ListingService.getRoomById(id)
  return NextResponse.json({ data });
}
