import React from "react";
import { RoomInfo } from "@/app/model/listing.model";
import {
  Amenities,
  HostingInfo,
  ImageGallery,
  ListingDesc,
  ReserveWidget,
  TitleStrip,
} from "@/app/components/ListingDetail";
import MapWrapper from "../Map/MapWrapper";

interface Props {
  data: RoomInfo;
}
const ListingDetail = ({ data }: Props) => {
  const mapCenter = { lat: data.location.lat, lng: data.location.long };
  return (
    <React.Fragment>
      <TitleStrip data={data} />
      <ImageGallery data={data} />

      <div className="flex flex-wrap pb-[380px] md:pb-0">
        <div className="w-full md:w-[59%]">
          <HostingInfo data={data} />
          <ListingDesc data={data} />
          <Amenities data={data} />

          {/* Placeholder so can see the sticky effect */}
          {[...Array(6).keys()].map((_, key) => (
            <Lorem key={key} />
          ))}
        </div>
        <div className="w-[96vw] m-auto md:m-[initial] fixed md:relative md:w-[33%] md:ml-[8%] md:mr-0 bottom-0 md:bottom-auto left-0 md:left-auto right-0 md:right-auto z-[10000] md:z-[10] bg-white dark:bg-transparent md:bg-transparent">
          <ReserveWidget data={data} />
        </div>

        <section className="w-full my-6 md:my-12">
          <h2 className="text-xl font-semibold mb-6">{"Where you'll be"}</h2>
          <MapWrapper center={mapCenter}></MapWrapper>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ListingDetail;

const Lorem = () => (
  <p className="my-12">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit
    consequuntur nihil sit a consectetur fugiat ullam totam. Reiciendis iure
    quia nulla soluta eum, aliquid beatae dicta debitis perferendis dolores,
    tenetur nisi nostrum assumenda aliquam molestiae ut expedita! Esse animi ab
    officiis similique repellat necessitatibus, iste beatae optio suscipit in!
  </p>
);
