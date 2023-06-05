interface Image {
  /** Image Absolute URL */
  url: string;
  /** Width in px */
  width: number;
  /** Height in px */
  height: number;
  /** Like image/jpeg */
  mimeType: string;
  /** Photo orientation */
  orientation: "landscape" | "portrait" | "square";
  /** Like 1.3333333333333333 */
  aspectRatio: number;
  /** Like "photo", "avatar"... */
  type: string;
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

export interface RoomInfo {
  /** Room ID, like "33747689" */
  id: string;
  /** Like "home" */
  type: string;
  /** List of all the photos */
  images: Image[];
  mainImage: Image;
  details: Details;
  /** Like "Beautiful Bedroom in West LA Architectural Gem" */
  title: string;
  /** The long description of the listing */
  description: string;

  maxGuestCapacity: number;
  host: {
    /** Ex. Natalie And Scott */
    name: string;
    avatar: Image;
    isSuperhost: boolean;
  };
  amenities: Amenities;
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

/** This is all the info that a card needs on the index page */
export type RoomInfoBasic = Pick<RoomInfo, "id" | "images" | "mainImage" | "location" | "ratings" | "price" | "currency">;

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
