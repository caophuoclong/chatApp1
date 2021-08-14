import axios from 'axios';
const uri = "http://localhost:5000"
const axiosClient = axios.create({
    baseURL: uri,

})

export {uri};
export default axiosClient;
