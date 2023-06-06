import FilterPanel from '../components/FilterPanel';
import MapWrapper from '../components/Map/MapWrapper';
import ListingCard from "./../components/ListingCard";
import ListingGrid from "./../components/ListingGrid";
import { Categories, RoomInfoBasic } from "./../model/listing.model";
import { ApiResponse } from "./../service/http/api.interface";

async function getData(): Promise<ApiResponse<RoomInfoBasic[]>> {
  const res = await fetch("http://localhost:3000/api/listings");

  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getCategories(): Promise<ApiResponse<Categories[]>> {
  const res = await fetch(`http://localhost:3000/api/categories`);

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
      
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-1 w-1/2 '>
          <ListingGrid>
            {data.map((room, index) => {
              return <ListingCard key={room.id} data={room} index={index}></ListingCard>;
            })}
          </ListingGrid>

        </div>
        <div className='flex flex-1 w-1/2'>
          <MapWrapper center={mapCenter}></MapWrapper>
        </div>
      </div>
    </div>
  );
}
