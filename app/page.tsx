import FilterPanel from "./components/FilterPanel";
import ListingCard from "./components/ListingCard";
import ListingGrid from "./components/ListingGrid";
import { Categories, RoomInfoBasic } from "./model/listing.model";
import { ApiResponse } from "./service/http/api.interface";
import { endpoint } from './service/listing.service';

async function getData(): Promise<ApiResponse<RoomInfoBasic[]>> {
  const res = await fetch(endpoint + "/api/listings");

  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getCategories(): Promise<ApiResponse<Categories[]>> {
  const res = await fetch(endpoint + `/api/categories`);

  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const resp = await getData();
  const { data } = resp;
  const categoriesResp = await getCategories();
  const { data: categories } = categoriesResp;

  if (!data || data.length === 0) {
    <div>No data!</div>;
  }
  return (
    <div className="container max-4xl">
      <FilterPanel categories={categories}></FilterPanel>
      <ListingGrid>
        {data.map((room, index) => {
          return <ListingCard key={room.id} data={room} index={index}></ListingCard>;
        })}
      </ListingGrid>
    </div>
  );
}
