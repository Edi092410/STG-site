import axios from "axios";

const api = axios.create({
  baseURL: "http://stgsite.mn/api",
});

export const GetData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    const data = response?.data?.data;
    console.log(data);
    return data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
};

export const PostData = async (endpoint, postData) => {
  try {
    const response = await api.post(endpoint, postData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    const data = response?.data?.data;
    console.log(data);
    return data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
};
