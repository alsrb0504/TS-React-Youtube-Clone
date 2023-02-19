import React from "react";
import { formatAgo } from "../util/date";

interface VideoCardProps {
  video: any;
}

export default function VideoCard({ video }: VideoCardProps) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li className="w-full">
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div className="flex flex-col ">
        <p className="my-2 font-semibold line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
