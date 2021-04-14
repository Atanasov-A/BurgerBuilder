import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-burger-9045d-default-rtdb.firebaseio.com/",
});

export { axiosInstance };
