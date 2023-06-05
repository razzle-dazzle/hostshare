import { NextResponse } from 'next/server';
import ListingService from "@/app/service/listing.service";

/**
 * Get a list of properties/rooms
 */
export async function GET() {
  const data = await ListingService.getRooms();
  return NextResponse.json({ data });
}

