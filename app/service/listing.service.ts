import path from "path";
import { promises as fs, readFileSync } from "fs";
import {
  Categories,
  JSONListingRawData,
  ListingModel,
  Locations,
  RoomInfo,
  RoomInfoBasic,
} from "../model/listing.model";

export const endpoint = process.env.NEXT_PUBLIC_ENDPOINT ?? "http://localhost:3000";

class ListingService {
  /**
   * Load and parse a local JSON file
   * Inspired by @url https://vercel.com/guides/loading-static-file-nextjs-api-route
   */
  private async parseRawJson(): Promise<JSONListingRawData | null> {
    // Get the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "public", "json");
    // const jsonDirectory = "/json"; // inside public folder
    // Read json data file
    // const fileContents = readFileSync('listings.json', "utf8").toString();
    const base = jsonDirectory.substring(0, 1) === '/' ? jsonDirectory : `/${jsonDirectory}`;

    let fileContents = '';
    try {
      fileContents = await fs.readFile(
        `${base}/listings.json`,
        "utf8"
      );
      
    } catch (error) {
      console.warn(error);
    }


    if (!fileContents) return null;

    // parse file
    let parsed: JSONListingRawData | null = null;
    try {
      parsed = JSON.parse(fileContents);
      return parsed;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  /**
   * @returns A list of rooms
   */
  async getRooms(): Promise<RoomInfoBasic[]> {
    const parsed = await this.parseRawJson();
    if (parsed) {
      // const rooms = parsed.data.map(room => room.info);
      const rooms = this.getRoomInfoBasic(parsed.data);
      // reduce payload - the listing cards only require a subset of the room data

      return rooms;
    }
    return [];
  }

  private getRoomInfoBasic(rooms: ListingModel[]): RoomInfoBasic[] {
    const basic = rooms
      .map((room) => room.info)
      .map((room) => {
        return {
          id: room.id,
          // images: {
          //   ...room.images,
          //   data: room.images.data.slice(0, 1), // Note: reduce the payload to just one image!
          // },
          mainImage: room.mainImage,
          location: room.location,
          ratings: room.ratings,
          price: room.price,
          currency: room.currency,
        };
      });
    return basic;
  }

  /**
   * @param id The room ID
   * @returns A specific room by ID
   */
  async getRoomById(id: string): Promise<RoomInfo | null> {
    const parsed = await this.parseRawJson();
    if (!parsed) return null;

    const room = parsed.data.find((room) => room.info.id === id);
    if (!room) return null;
    return room.info;
  }

  /**
   * @returns A list of categories
   */
  async getCategories(): Promise<Categories[]> {
    const parsed = await this.parseRawJson();
    if (!parsed) return [];
    const categories = parsed.categories ?? [];
    return categories;
  }

  /**
   * @returns A list of categories
   */
  async getLocations(): Promise<Locations[]> {
    const parsed = await this.parseRawJson();
    if (!parsed) return [];
    const locations: Locations[] = parsed.data.map(i => {
      return {
        city: i.info.location.city,
        country: i.info.location.country.title,
      };
    });

    /** Create a unique array of objects from locations */
    const uniqueLocations = (a: any) => [...new Set(a.map((o: any) => JSON.stringify(o)))].map((s: any) => JSON.parse(s))
    const unique: Locations[] = uniqueLocations(locations);
    return unique;
  }

  /** Build the URL route for the room listing item */
  getRoomRoute(room: RoomInfoBasic): string {
    return `/rooms/${room.id}`;
  }
}

const myListingService = new ListingService();
export default myListingService;
