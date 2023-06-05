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

interface Props {
  data: RoomInfo;
}
const ListingDetail = ({ data }: Props) => {
  return (
    <React.Fragment>
      <TitleStrip data={data} />
      <ImageGallery data={data} />

      <div className="flex flex-wrap">
        <div className='w-[59%]'>
          <HostingInfo data={data} />
          <ListingDesc data={data} />
          <Amenities data={data} />
        </div>
        <div className='w-[33%] ml-[8%]'>
          <ReserveWidget data={data} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListingDetail;
