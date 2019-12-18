import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const url = 'http://127.0.0.1';
const api = axios.create({
  baseURL: url
});
api.interceptors.request.use(
  async config => {
    let token = await AsyncStorage.getItem('token');
    console.log("token: ", token);
    if (
        token
    ) {
      console.log("tem token: ", token);
    //   console.log("token: ", credentials[0][1]);
      config.headers["token"] = `${token}`;
      //console.log("header: ", config.headers);
    }
    console.log("config: ", config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
