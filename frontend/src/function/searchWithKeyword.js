import axios from "axios";

const api_key = "AIzaSyDXKvZjPxqrtMsHduX_Ioygsb9Db_JW3sE";

const searchWithKeyWord = async (keyword) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=${api_key}`;
  const response = await axios.get(url);
  return response;
};

export default searchWithKeyWord;
