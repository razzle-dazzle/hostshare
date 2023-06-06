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
      <h1 className="text-[26px] font-semibold">{data.title}</h1>
      <div className="flex flex-wrap gap-1 mt-2">
        <div className='flex items-center gap-1'>
          <span className="text-black dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "12px",
                width: "12px",
                fill: "currentcolor",
              }}
            >
              <path
                fillRule="evenodd"
                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
              ></path>
            </svg>
          </span>
          <span aria-hidden="true" className="text-black dark:text-white ml-1">
            {data.ratings.guestSatisfactionOverall}
          </span>
        </div>
        <SpacerDot></SpacerDot>
        <button onClick={handleLocationClick}>
          <span className="">
            {data.visibleReviewCount} reviews
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
