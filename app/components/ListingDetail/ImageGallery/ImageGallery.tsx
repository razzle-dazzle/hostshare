"use client";

import { RoomInfo } from "@/app/model/listing.model";
import Image from "next/image";
import { GallerySheet, GridGallery } from "..";
import { Button } from "../../Shadcn/Button";

interface ImageTileProps {
  image: RoomInfo["images"]["data"][number];
  /** The tile index, starting from zero */
  tileIndex: number;
  size?: "small" | "large";
}
const ImageTile = ({ image, tileIndex, size = "small" }: ImageTileProps) => {
  const classes =
    size === "small"
      ? "min-w-[100%] md:min-w-[auto] max-w-[100%] mx-auto overflow-hidden relative w-[274px] h-[274px] min-h-48 aspect-square"
      : "min-w-[100%] md:min-w-[auto] max-w-[100%] mx-auto overflow-hidden relative w-[274px] h-[274px] sm:w-[556px] sm:h-[556px] sm:col-span-2 sm:row-span-2 min-h-48 sm:min-h-96 md:col-start-1 md:row-start-1 aspect-square md:rounded-tl-2xl md:rounded-bl-2xl";

  let conditionalClasses = "";
  if (tileIndex === 2) {
    conditionalClasses = "md:rounded-tr-2xl";
  } else if (tileIndex === 4) {
    conditionalClasses = "md:rounded-br-2xl";
  }
  return (
    <div className={`${classes} ${conditionalClasses}`}>
      <Image
        src={image.url}
        alt={""}
        fill
        sizes="(max-width: 768px) 95vw, (max-width: 1200px) 500px, 600px"
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
  const handleGalleryModal = () => {
    console.log("show all photos");
  };
  const images: string[] = data.images.data.map((image) => image.url);

  return (
    <div className="my-6 md:my-12">
      <section className="dark:text-gray-50">
        <div className="container relative grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto md:grid-cols-4">
          {data.images.data.slice(0, 5).map((image, index) => {
            return index === 0 ? (
              <ImageTile
                key={index}
                image={image}
                tileIndex={index}
                size="large"
              />
            ) : (
              <ImageTile key={index} image={image} tileIndex={index} />
            );
          })}
          {/* <Button
            variant={"secondary"}
            className="bottom-6 right-6 absolute"
            onClick={handleGalleryModal}
          >
            Show all photos
          </Button> */}
        </div>
      </section>

      <GallerySheet>
        <GridGallery images={images}></GridGallery>
      </GallerySheet>
    </div>
  );
};

export default ImageGallery;
