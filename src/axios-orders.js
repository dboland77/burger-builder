import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-d0320.firebaseio.com/",
});

export default instance;
