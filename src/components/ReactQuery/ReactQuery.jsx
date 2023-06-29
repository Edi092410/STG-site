import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "http://stgsite.mn/api/",
});

export const ReactQuery = (site) => {
  return useQuery({
    queryFn: async () => {
      const { data } = await api.get("settings");
      console.log(data);
      return data;
    },
  });
};
