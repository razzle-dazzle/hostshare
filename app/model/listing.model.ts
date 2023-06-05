interface Image {
  url: string;
  width: number;
  height: number;
  mimeType: string;
  orientation: "landscape" | "portrait";
  /** Like 1.3333333333333333 */
  aspectRatio: number;
  type: "main" | "photo" | string;
}

interface Details {
  type: string;
  data: {
    /** Like "bedroom", "bed", "baths" ... */
    type: string;
    /** Like 1 */
    value: number;
  }[];
  /** Count of data array */
  count: number;
}

interface Amenities {
  type: string;
  data: Amenity[];
  /** Count of data array */
  count: number;
}

interface Amenity {
  /** Like "Scenic views" */
  group: string;
  available: boolean;
  /** Like "Garden view" */
  title: string;
  /** Like "hairdryer", "shampoo" ... */
  type: string;
}

interface Location {
  /** Like 34.02023 */
  lat: number;
  /** Like -118.4216 */
  long: number;
  address: string;
  /** Like "Los Angeles" */
  city: string;
  country: {
    /** Like US - ISO 3166-1 alpha-2 */
    code: string;
    /** Like "United States" */
    title: string;
  };
  zip: string;
}

interface Ratings {
  /** Ex: 5 */
  accuracy: number;
  /** Ex: 5 */
  checkin: number;
  /** Ex. 4.96 */
  cleanliness: number;
  communication: number;
  location: number;
  /** The calculated rating value */
  value: number;
  guestSatisfactionOverall: number;
}

interface RoomInfo {
  /** Like "home" */
  type: string;
  images: Image[];
  details: Details;
  description: string;
  mainImage: Image;
  maxGuestCapacity: number;
  amenities: Amenities;
  /** Like "Beautiful Bedroom in West LA Architectural Gem" */
  title: string;
  /** Like "33747689" */
  id: string;
  location: Location;
  ratings: Ratings;
  visibleReviewCount: number;
  available: boolean;
  price: number;
  currency: {
    /** Like "USD" */
    code: string;
    /** Like "$" */
    symbol: string;
    /** Like "United States Dollar" */
    name: string;
  };
  sleepingArrangements: {
    /** Like "sleeping-arrangement" */
    type: string;
    data: any[];
    count: number;
  };
}

export interface Categories {
  /** Ex. "8678" */
  id: string;
  /** Ex. "rooms" */
  type: string;
  /** Ex. "Rooms" */
  title: string;
}
export interface ListingModel {
  ref: string;
  info: RoomInfo;
}
export interface JSONListingRawData {
  source: string;
  type: string;
  categories: Categories[];
  data: ListingModel[];
  count: number;
}
