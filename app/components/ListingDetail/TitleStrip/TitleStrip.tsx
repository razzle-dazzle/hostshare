"use client";

import { RoomInfo } from "@/app/model/listing.model";
import React from "react";

type Props = {
  data: RoomInfo;
};

const TitleStrip = ({ data }: Props) => {
  const handleLocationClick = () => {};

  return (
    <div className="text-black dark:text-white">
      <h1 className='text-[26px] font-semibold'>{data.title}</h1>
      <div className="flex flex-wrap gap-0.5 mt-2">
        <div>Rating</div>
        <SpacerDot></SpacerDot>
        <button onClick={handleLocationClick}>
          <span className="">
            {data.location.city}, {data.location.country.title}
          </span>
        </button>
        <SpacerDot></SpacerDot>
        {data.host?.isSuperhost && (
          // handle superhost, if applicable
          <React.Fragment>
            <span className="">Superhost</span>
            <SpacerDot></SpacerDot>
          </React.Fragment>
        )}
        <button onClick={handleLocationClick}>
          <span className="">
            {data.location.city}, {data.location.country.title}
          </span>
        </button>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-black dark:text-white">
          {/* <Balancer>{post.title}</Balancer> */}
        </h1>
      </div>
    </div>
  );
};

/** This is the little dot separator */
const SpacerDot = () => {
  return (
    <span className="text-[#717171]" aria-hidden="true">
      ·
    </span>
  );
};

export default TitleStrip;
