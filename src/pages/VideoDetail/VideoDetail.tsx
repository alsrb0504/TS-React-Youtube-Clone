import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ChannelInfo from "../../components/ChannelInfo";
import RelatedVideos from "../../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { videoId } = useParams();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <div className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </div>
  );
}
