import FakeYoutubeClient from "./fakeYoutubeClient";
import YoutubeClient from "./youtubeClient";

export default class Youtube {
  apiClient;

  constructor(apiClient: YoutubeClient | FakeYoutubeClient) {
    this.apiClient = apiClient;
  }

  async channelImageURL(id: string) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id: string) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item: { id: { videoId: string } }) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async search(keyword: string | undefined) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopuplar();
  }

  async searchByKeyword(keyword: string) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item: { id: { videoId: string } }) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async mostPopuplar() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
