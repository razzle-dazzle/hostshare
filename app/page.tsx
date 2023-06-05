import { GetStaticProps, InferGetStaticPropsType } from "next";
import ListingCard from "./components/ListingCard";
import ListingGrid from "./components/ListingGrid";
import { ListingModel } from "./model/listing.model";

async function getData() {
  const res = await fetch('http://localhost:3000/api/listings');
  
  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="container">
      <ListingGrid>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
        <ListingCard></ListingCard>
      </ListingGrid>
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
  );
}
