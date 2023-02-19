import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
// import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext({
  youtube: new Youtube(new FakeYoutubeClient()),
  // youtube: new Youtube(new YoutubeClient()),
});

// const client = new YoutubeClient();
const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
