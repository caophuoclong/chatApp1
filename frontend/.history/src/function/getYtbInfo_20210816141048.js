import axios from "axios";
const api_key = "AIzaSyDXKvZjPxqrtMsHduX_Ioygsb9Db_JW3sE";

const getTitle = (url) => {};
const getInfoVideo = async (id, api_key) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${api_key}&part=snippet`;
  const response = await axios.get(url);
  return response;
};
const progressYoutubeInfo = async (url) => {
  if (url) {
    const id = getId(url);
    const response = await getInfoVideo(id, api_key);
    const title = response.data.items[0].snippet.title;
    const thumbnail = response.data.items[0].snippet.thumbnails.medium.url;
    return { title, thumbnail };
  }
  return;
};

const ended = async (musicList) => {
  let arrayMusic = [];
  musicList.forEach(async (value, pos) => {
    const res = await progressYoutubeInfo(value);
    const title = res.title.data.items[0].snippet.title;
    const thumbnail = res.thumbnail;
    const obj = { url: value, title, thumbnail };
    arrayMusic.push(obj);
  });
  return arrayMusic;
};
const getId = (url) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

export { getId, progressYoutubeInfo };
export default ended;
