import FilterPanel from "./components/FilterPanel";
import ListingCard from "./components/ListingCard";
import ListingGrid from "./components/ListingGrid";
import { Categories, RoomInfoBasic } from "./model/listing.model";
import ListingService from "@/app/service/listing.service";

async function getData(): Promise<RoomInfoBasic[]> {
  const data = await ListingService.getRooms();
  return data;
}

async function getCategories(): Promise<Categories[]> {
  const data = await ListingService.getCategories();
  return data;
}

export default async function Home() {
  const data = await getData();
  const categories = await getCategories();

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
