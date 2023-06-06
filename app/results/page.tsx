import FilterPanel from "../components/FilterPanel";
import MapWrapper from "../components/Map/MapWrapper";
import ListingCard from "./../components/ListingCard";
import ListingGrid from "./../components/ListingGrid";
import { Categories, RoomInfoBasic } from "./../model/listing.model";
import { ApiResponse } from "./../service/http/api.interface";

async function getData(): Promise<ApiResponse<RoomInfoBasic[]>> {
  const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT + "/api/listings");

  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getCategories(): Promise<ApiResponse<Categories[]>> {
  const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT + `/api/categories`);

  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Results() {
  const resp = await getData();
  const { data } = resp;
  const categoriesResp = await getCategories();
  const { data: categories } = categoriesResp;

  if (!data || data.length === 0) {
    <div>No data!</div>;
  }

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
