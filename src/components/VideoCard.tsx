import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

interface VideoCardProps {
  video: any;
  type?: "list";
}

export default function VideoCard({ video, type }: VideoCardProps) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <li className={isList ? "flex gap-1 m-2" : ""} onClick={handleClick}>
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex flex-col ">
        <p className="my-2 font-semibold line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
