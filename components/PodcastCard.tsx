import React from "react";
import Image from "next/image";
const PodcastCard = ({
  description,
  imgURL,
  title,
  podcastId,
}: {
  imgURL: string;
  description: string;
  title: string;
  podcastId: number;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image src={imgURL} alt={title} height={174} width={174} className="aspect-square h-ft w-full rounded-xl 2xl:[200px]" />
        <div className="flex flex-col">
          <h1 className="text-60 truncate font-bold text-white-1"> {title}</h1>
          <h2 className="text-12 truncate  text-yellow-300 font-normal capitalize"> {description}</h2>

        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
