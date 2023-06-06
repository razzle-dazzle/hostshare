import { NextResponse } from 'next/server';
import ListingService from "@/app/service/listing.service";

/**
 * Get a unique list of cities from the listings
 */
export async function GET() {
  const data = await ListingService.getLocations();
  return NextResponse.json({ data });
}

