import { NextResponse } from "next/server";
import ListingService from "@/app/service/listing.service";

/**
 * Get a specific property/room by ID
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

  const id = "44119404";
  const data = ListingService.getRoomById(id)

  // // find the room by ID
  // const rooms = parsed?.data ?? [];
  // const data = rooms
  //   .filter((room) => room.info.id === roomId)
  //   .map((r) => r.info);

  // Return the content of the data file in json format
  return NextResponse.json({ data });
}
