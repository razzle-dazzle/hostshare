import { ListingModel, RoomInfoBasic } from "@/app/model/listing.model";
import ListingService from '@/app/service/listing.service';
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: RoomInfoBasic;
};

const ListingCard = ({ data }: Props) => {
  const roomUrl = ListingService.getRoomRoute(data);
  return (
    <Link href={roomUrl}>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-[100%] h-[302px] relative">
          <Image
            src={data.mainImage.url}
            fill={true}
            sizes="(max-width: 500px) 100vw, 120px"
            style={{
              objectFit: "cover",
              borderRadius: 12,
              aspectRatio: data.mainImage.aspectRatio,
            }}
            alt={""}
          />
        </div>

        {/* Property Details */}
        <div
          className="grid text-[15px] mt-3 w-full"
          style={{
            gridTemplateColumns: "273.453px 41.7969px",
            gridTemplateRows: "19px 19px 19px 25px",
            height: "88px",
            lineBreak: "strict",
            lineHeight: "19px",
            rowGap: "2px",
            textSizeAdjust: "100%",
          }}
        >
          <div className="font-semibold text-[#222222] dark:text-white text-[15px]">
            {data.location.city}, {data.location.country.title}
          </div>
          <div className="grid col-end-[-1] col-start-1">
            <span className="text-black dark:text-white">84 miles away</span>
          </div>
          <div className="grid col-end-[-1] col-start-1">
            <span className="text-black dark:text-white">Jun 4 - 9</span>
          </div>
          <div className="grid col-end-[-1] col-start-1">
            <div
            // style={
            //   // "--pricing-guest-display-price-alignment: flex-start; --pricing-guest-display-price-flex-wrap: wrap; --pricing-guest-primary-line-font-size: 15px; --pricing-guest-primary-line-line-height: 19px; --pricing-guest-primary-line-unit-price-font-weight: var(--jx-zk-pv); --pricing-guest-primary-line-trailing-content-font-size: 14px; --pricing-guest-secondary-line-font-size: 15px; --pricing-guest-secondary-line-line-height: 19px; --pricing-guest-secondary-line-color: #717171; --pricing-guest-explanation-disclaimer-font-size: 14px; --pricing-guest-explanation-disclaimer-line-height: 18px; --pricing-guest-primary-line-strikethrough-price-font-weight: 600; --pricing-guest-primary-line-qualifier-font-size: 15px; --pricing-guest-primary-line-qualifier-line-height: 19px;"
            // }
            >
              <span className="text-black dark:text-white">
                {data.currency.symbol}
                {data.price} per night
              </span>
            </div>
          </div>

          <span
            aria-label="5.0 out of 5 average rating"
            className="flex items-center col-end-[-1] col-start-[-2] justify-self-end row-end-auto row-start-1"
            role="img"
          >
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
            <span
              aria-hidden="true"
              className="text-black dark:text-white ml-1"
            >
              {data.ratings.value}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
