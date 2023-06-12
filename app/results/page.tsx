import { Metadata } from 'next';
import FilterPanel from "../components/FilterPanel";
import MapWrapper from "../components/Map/MapWrapper";
import ListingCard from "./../components/ListingCard";
import ListingGrid from "./../components/ListingGrid";
import { Categories, RoomInfoBasic } from "./../model/listing.model";
// import { endpoint } from '../service/listing.service';
// import { ApiResponse } from "./../service/http/api.interface";
import ListingService from "@/app/service/listing.service";

async function getData(): Promise<RoomInfoBasic[]> {
  const data = await ListingService.getRooms();
  return data;
}

async function getCategories(): Promise<Categories[]> {
  const data = await ListingService.getCategories();
  return data;
}

export const metadata: Metadata = {
  title: "Search Results",
  description: "Checkout these properties on Hostshare.",
};

export default async function Results() {
  const data = await getData();
  const categories = await getCategories();

  // take first items as the centre
  const mapCenter = { lat: data[0].location.lat, lng: data[0].location.long };

  return (
    <div className="container max-4xl">
      <FilterPanel categories={categories}></FilterPanel>

      <div className="flex flex-col md:flex-row md:gap-4 max-h-[90vh] overflow-scroll relative">
        <div className="flex flex-1 w-full md:w-1/2">
          <ListingGrid halfscreen>
            {data.map((room, index) => {
              return (
                <ListingCard
                  key={room.id}
                  data={room}
                  index={index}
                ></ListingCard>
              );
            })}
          </ListingGrid>
        </div>
        <div className="flex flex-1 w-full md:w-1/2 sticky top-0">
          <MapWrapper center={mapCenter} initialZoom={8} heightFull></MapWrapper>
        </div>
      </div>
    </div>
  );
}
