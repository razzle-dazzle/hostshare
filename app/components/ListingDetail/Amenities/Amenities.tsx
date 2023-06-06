import { RoomInfo } from "@/app/model/listing.model";
import { clsx } from "clsx";

type ImageGalleryProps = {
  data: RoomInfo;
};
const Amenities = ({ data: { amenities } }: ImageGalleryProps) => {
  return (
    <div className="my-6">
      <section className="text-black dark:text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto">
          {amenities.data.slice(0, 10).map((amenity, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-start items-center gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: 24,
                    width: 24,
                    fill: "currentcolor",
                  }}
                >
                  <path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm-5.92 20H9.92L4 27.91V28h24v-.09zM28 4H4v21.08l12-12 12 12zM16 15.91 11.91 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
                <div
                  className={clsx(
                    "my-1 font-semibold font-md text-[#222] dark:text-white",
                    amenity.available === false ? "line-through" : ""
                  )}
                >
                  {amenity.title}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <button className="rounded-lg inline-block border-[1px] border-[#222] text-black dark:text-white px-6 py-3 font-semibold">
            Show all {amenities.count} amenities
          </button>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
