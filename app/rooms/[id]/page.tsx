import { notFound } from "next/navigation";
import { RoomInfo } from "@/app/model/listing.model";
import React from "react";
import { ListingDetail } from "@/app/components/ListingDetail";
// import { endpoint } from '@/app/service/listing.service';
// import { ApiResponse } from "@/app/service/http/api.interface";
import ListingService from "@/app/service/listing.service";
import { Metadata } from 'next';
import { WEBSITE_URL } from '@/lib/utils';

/** Build meta data for page based on dynamic room info */
export async function generateMetadata({
  params,
}: { params: { id: string }}): Promise<Metadata | undefined> {

  const room = await ListingService.getRoomById(params.id);
  if (!room) {
    return;
  }

  const {
    id,
    title,
    description: fullDescription,
    mainImage,
  } = room;
  const ogImage = mainImage.url
    ? mainImage.url
    : `${WEBSITE_URL}/hostshare-logo-green.png`;
  
  // build URL to page
  const fullUrl = `${WEBSITE_URL}${ListingService.getRoomRoute(room)}`;
  
  // build a truncated description...@todo - could also use a truncate library
  const description = fullDescription.substring(0, 64);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      // publishedTime,
      url: fullUrl,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/** Build static params based on all the rooms in the DB */
export async function generateStaticParams() {
  const rooms = await ListingService.getRooms();
  
  return (rooms ?? []).map((room) => ({
    id: room.id,
  }));
}

async function getData(id: string): Promise<RoomInfo | null> {
  const data = await ListingService.getRoomById(id);
  return data;
}

export default async function RoomPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getData(id);
  
  if (!data) {
    notFound();
  }

  return (
    <div className="container max-w-[1120px] my-4 md:my-8">
      <section className="w-full m-auto relative">
        {/* <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(data.structuredData)}
        </script> */}
        <ListingDetail data={data} />
      </section>
    </div>
  );
}
