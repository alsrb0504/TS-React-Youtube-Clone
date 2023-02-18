import React from "react";

interface VideoCardProps {
  video: any;
}

export default function VideoCard({ video }: VideoCardProps) {
  return <div>{video.snippet.title}</div>;
}
