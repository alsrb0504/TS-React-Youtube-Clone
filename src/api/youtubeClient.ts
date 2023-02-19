import axios from "axios";
import ClientInterface from "./clientInterface";

export default class YoutubeClient implements ClientInterface {
  httpClient;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(params: {}) {
    return this.httpClient.get("search", params);
  }

  async videos(params: {}) {
    return this.httpClient.get("videos", params);
  }

  async channels(params: {}) {
    return this.httpClient.get("channels", params);
  }
}
