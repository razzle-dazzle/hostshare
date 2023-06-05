import { NextResponse } from 'next/server';
import ListingService from "@/app/service/listing.service";

/**
 * Read hardcoded JSON file
 * @url https://vercel.com/guides/loading-static-file-nextjs-api-route
 */
export async function GET() {
  // // Find the absolute path of the json directory
  // const jsonDirectory = path.join(process.cwd(), "json");
  // // Read the json data file data.json
  // const fileContents = await fs.readFile(
  //   jsonDirectory + "/listings.json",
  //   "utf8"
  // );

  // let parsed: JSONListingRawData | null = null;
  // try {
  //   parsed = JSON.parse(fileContents);
  // } catch (error) {
  //   return NextResponse.json({ data: [] });
  // }
  // const data = parsed?.data ?? [];

  
  const data = ListingService.getRooms();

  // Return the content of the data file in json format
  return NextResponse.json({ data });
}

