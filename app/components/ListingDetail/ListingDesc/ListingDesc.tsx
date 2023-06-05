"use client";
import { RoomInfo } from "@/app/model/listing.model";

type Props = {
  data: RoomInfo;
};

const ListingDesc = ({ data }: Props) => {

  const handleShowMore = () => {
    // TODO: Open modal here...
  };
  
  return (
    <div className="text-black dark:text-white py-8 my-8 border-t-slate-300 border-b-slate-300 border-t-[1px] border-b-[1px]">
      <p className="line-clamp-6 overflow-hidden text-ellipsis whitespace-pre-wrap text-[16px] leading-[24px] mb-4">
        {data.description}
      </p>
      <button
        className="flex gap-1 items-center cursor-pointer"
        onClick={handleShowMore}
      >
        <span className="text-md font-semibold underline">Show more</span>
        <span>
          <svg
            viewBox="0 0 18 18"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style={{
              height: 12,
              width: 12,
              display: "block",
              fill: "#171717",
            }}
          >
            <path
              d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ListingDesc;
