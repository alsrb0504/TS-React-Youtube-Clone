import axios from "axios";

export default class FakeYoutube {
  async search(keyword: any) {
    return keyword ? this.searchByKeyword() : this.mostPopuplar();
  }

  async searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: { id: { videoId: string } }) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async mostPopuplar() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
