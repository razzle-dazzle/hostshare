import { NextResponse } from 'next/server';
import ListingService from "@/app/service/listing.service";

/**
 * Get a list of categories
 */
export async function GET() {
  const data = await ListingService.getCategories();
  return NextResponse.json({ data });
}

