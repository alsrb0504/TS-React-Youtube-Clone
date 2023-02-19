import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: vidoes,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  return (
    <>
      <div>Videos {keyword ? keyword : "🔥"}</div>
      {isLoading && <p>isLoading...</p>}
      {error && <p>error...</p>}
      {vidoes && (
        <ul className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5 gap-2 gap-y-4">
          {vidoes.map((video: any) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
