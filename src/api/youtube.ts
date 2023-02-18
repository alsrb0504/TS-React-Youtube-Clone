import axios, { AxiosInstance } from "axios";

export interface YoutubeInterface {
  httpClient: AxiosInstance;
  search: (keyword: string | undefined) => Promise<any>;
  searchByKeyword: (keyword: string) => void;
  mostPopuplar: () => void;
}

export default class Youtube implements YoutubeInterface {
  httpClient;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(keyword: string | undefined) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopuplar();
  }

  async searchByKeyword(keyword: string) {
    return this.httpClient
      .get(`search`, {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: { id: { videoId: string } }) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async mostPopuplar() {
    return this.httpClient
      .get(`videos`, {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
