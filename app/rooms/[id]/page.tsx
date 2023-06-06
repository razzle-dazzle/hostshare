import { notFound } from "next/navigation";
import { ApiResponse } from "@/app/service/http/api.interface";
import { RoomInfo, RoomInfoBasic } from "@/app/model/listing.model";
import React from "react";
import { ListingDetail } from "@/app/components/ListingDetail";

export async function generateStaticParams() {
  const rooms: ApiResponse<RoomInfoBasic[]> = await fetch(
    process.env.NEXT_PUBLIC_ENDPOINT + "/api/listings"
  ).then((res) => res.json());

  return rooms.data.map((room) => ({
    id: room.id,
  }));
}

async function getData(id: string): Promise<ApiResponse<RoomInfo>> {
  const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT + `/api/listings/${id}?id=${id}`);

  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RoomPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const resp = await getData(id);
  const { data } = resp;

  if (!data) {
    notFound();
  }

  return (
    <div className="container max-w-[1120px] my-4 md:my-8">
      <section className="w-full m-auto relative">
        {/* <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(post.structuredData)}
        </script> */}
        <ListingDetail data={data} />
      </section>
    </div>
  );
}
