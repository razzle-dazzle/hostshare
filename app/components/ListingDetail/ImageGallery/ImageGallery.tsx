import { RoomInfo } from "@/app/model/listing.model";
import Image from "next/image";

interface ImageTileProps {
  image: RoomInfo["images"]["data"][number];
  /** The tile index, starting from zero */
  tileIndex: number;
  size?: "small" | "large";
}
const ImageTile = ({ image, tileIndex, size = "small" }: ImageTileProps) => {
  const classes =
    size === "small"
      ? "overflow-hidden relative w-[274px] h-[274px] min-h-48 aspect-square"
      : "overflow-hidden relative w-[556px] h-[556px] col-span-2 row-span-2 min-h-96 md:col-start-1 md:row-start-1 aspect-square rounded-tl-2xl rounded-bl-2xl";

  let conditionalClasses = "";
  if (tileIndex === 2) {
    conditionalClasses = "rounded-tr-2xl";
  } else if (tileIndex === 4) {
    conditionalClasses = "rounded-br-2xl";
  }
  return (
    <div className={`${classes} ${conditionalClasses}`}>
      <Image
        src={image.url}
        alt={""}
        fill
        style={{
          objectFit: "cover",
          aspectRatio: image.aspectRatio,
        }}
      />
    </div>
  );
};

type ImageGalleryProps = {
  data: RoomInfo;
};
const ImageGallery = ({ data }: ImageGalleryProps) => {
  return (
    <div className="my-6">
      <section className="dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-2 mx-auto md:grid-cols-4">
          {data.images.data.slice(0, 5).map((image, index) => {
            return index === 0 ? (
              <ImageTile image={image} tileIndex={index} size="large" />
            ) : (
              <ImageTile image={image} tileIndex={index} />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;