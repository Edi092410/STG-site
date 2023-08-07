import axios from "axios";

const api = axios.create({
  baseURL: "https://admin.e-siticom.com/api",
});

export const GetData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    const data = response?.data?.data;
    return data;
  } catch (error) {}
};

export const PostData = async (endpoint, postData) => {
  try {
    const response = await api.post(endpoint, postData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    const data = response?.data?.data;
    return data;
  } catch (error) {}
};
export const GetDataWithAuthorization = async (endpoint) => {
  try {
    const data = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
