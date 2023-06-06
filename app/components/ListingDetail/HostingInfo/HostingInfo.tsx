import { RoomInfo } from "@/app/model/listing.model";
import Image from "next/image";
import SuperhostIcon from "@/app/icons/superhost.svg";

type Props = {
  data: RoomInfo;
};

const HostingInfo = ({ data }: Props) => {
  return (
    <section className="text-black dark:text-white">
      <div className="flex justify-between items-center gap-2">
        <div>
          <h2 className="text-[22px] text-[#222] dark:text-white font-semibold mb-1">
            {data.title} {data.host?.name ? `hosted by ${data.host.name}` : ""}
          </h2>
          <p>7+ guests, 2 bedrooms, 4 beds, 2 baths</p>
        </div>
        <div className="flex w-[56px] h-[56px] relative flex-shrink-0">
          {
            data.host && (
              <Image
                src={data.host.avatar.url}
                alt={"Host image"}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  // aspectRatio: data.host.avatar.aspectRatio,
                }}
                // width={56}
                // height={56}
              />
            )
          }
          {data.host?.isSuperhost && (
            <div className="absolute bottom-0 right-0 w-[20px] h-[22px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 14"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                // style="display: block; height: 24px; width: 24px;"
              >
                <linearGradient
                  id="a"
                  x1="8.5%"
                  x2="92.18%"
                  y1="17.16%"
                  y2="17.16%"
                >
                  <stop offset="0" stopColor="#e61e4d"></stop>
                  <stop offset=".5" stopColor="#e31c5f"></stop>
                  <stop offset="1" stopColor="#d70466"></stop>
                </linearGradient>
                <path
                  fill="#fff"
                  d="M9.93 0c.88 0 1.6.67 1.66 1.52l.01.15v2.15c0 .54-.26 1.05-.7 1.36l-.13.08-3.73 2.17a3.4 3.4 0 1 1-2.48 0L.83 5.26A1.67 1.67 0 0 1 0 3.96L0 3.82V1.67C0 .79.67.07 1.52 0L1.67 0z"
                ></path>
                <path
                  fill="url(#a)"
                  d="M5.8 8.2a2.4 2.4 0 0 0-.16 4.8h.32a2.4 2.4 0 0 0-.16-4.8zM9.93 1H1.67a.67.67 0 0 0-.66.57l-.01.1v2.15c0 .2.1.39.25.52l.08.05L5.46 6.8c.1.06.2.09.29.1h.1l.1-.02.1-.03.09-.05 4.13-2.4c.17-.1.3-.29.32-.48l.01-.1V1.67a.67.67 0 0 0-.57-.66z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* <div className='flex flex-col justify-between items-center gap-2'>
        <div className='flex gap-2'>
        <Image
            src={data.host.avatar.url}
            alt={"Host image"}
            fill
            style={{
              objectFit: "cover",
              borderRadius: '50%',
              aspectRatio: data.host.avatar.aspectRatio,
            }}
            // width={56}
            // height={56}
          />
        </div>
      </div> */}
    </section>
  );
};

export default HostingInfo;
