// import path from "path";
// import { promises as fs, readFileSync } from "fs";
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
   * Load a local JSON file
   */
  private async parseRawJson(): Promise<JSONListingRawData | null> {
    const fileContents = await import('./listings.json').then((res) => res.default).catch((err) => {
      console.warn(err);
      throw new Error('Cannot read JSON file!');
    });
    return fileContents as JSONListingRawData;
  }

  /**
   * @returns A list of rooms
   */
  async getRooms(): Promise<RoomInfoBasic[]> {
    const parsed = await this.parseRawJson();
    if (parsed) {
      // reduce payload - the listing cards only require a subset of the room data
      const rooms = this.getRoomInfoBasic(parsed.data);
      return rooms;
    }
    return [];
  }

  /**
   * Converts listing data into a more simple object, since the frontend doesn't require all the data
   * @param rooms 
   * @returns 
   */
  private getRoomInfoBasic(rooms: ListingModel[]): RoomInfoBasic[] {
    const basic = rooms
      .map((room) => room.info)
      .map((room) => {
        return {
          id: room.id,
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
