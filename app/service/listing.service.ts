import path from "path";
import { promises as fs } from "fs";

class ListingService {
  async parseRawJson(): Promise<JSONListingRawData | null> {
    // Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "json");
    // Read the json data file data.json
    const fileContents = await fs.readFile(
      jsonDirectory + "/listings.json",
      "utf8"
    );

    let parsed: JSONListingRawData | null = null;
    try {
      parsed = JSON.parse(fileContents);
      return parsed;
    } catch (error) {
      return null;
    }
  }

  async getRooms(): Promise<ListingModel[]> {
    const parsed = await this.parseRawJson();
    if (parsed) {
      // @todo - reduce payload, we don't need everything for the listing cards...
      return parsed.data;
    }
    return [];
  }

  async getRoomById(id: string): Promise<ListingModel["info"] | null> {
    const parsed = await this.parseRawJson();
    if (!parsed) return null;

    const room = parsed.data.find((room) => room.info.id === id);
    if (!room) return null;
    return room.info;
  }
}

const myListingService = new ListingService();
export default myListingService;
