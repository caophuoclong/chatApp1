import axios from "axios";
const uri = "https://api-server-intern.herokuapp.com/";
const axiosClient = axios.create({
  baseURL: uri,
});

export { uri };
export default axiosClient;
