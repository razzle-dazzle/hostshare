"use client";

import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";


export default function GridGallery({ images }: { images: string[] }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index: number, isVisible: boolean) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-1">
      {images &&
        images.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible: boolean) =>
              imageVisibleChange(index, isVisible)
            }
          >
            <GridGalleryCard
              imageUrl={imageUrl}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}

interface GridGalleryCardProps {
  imageUrl: string;
  show: boolean;
}
function GridGalleryCard({ imageUrl, show }: GridGalleryCardProps) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      {/* <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
          Hello World
        </div>
      </div> */}
      
      <Image
        src={imageUrl}
        width={200}
        height={200}
        // sizes="(max-width: 500px) 100vw, 120px"
        // style={{
        //   objectFit: "cover",
        //   borderRadius: 12,
        //   aspectRatio: data.mainImage.aspectRatio,
        // }}

        alt={""}
      />
    </div>
  );
}
