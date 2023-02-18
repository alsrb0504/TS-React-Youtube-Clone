import { createContext, useContext } from "react";
import FakeYoutube from "../api/fakeYoutube";
// import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext({
  // youtube: new Youtube(),
  youtube: new FakeYoutube(),
});

// const youtube = new Youtube();
const youtube = new FakeYoutube();

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
