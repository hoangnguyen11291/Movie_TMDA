import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    // console.log("Starting Request", request);
    return request;
  },
  function (error) {
    console.log("Request error", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("Response Error", error);
    return Promise.reject({ message: error.split("\n") });
  }
);

export default api;
