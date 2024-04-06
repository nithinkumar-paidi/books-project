import { useState, useEffect, useContext } from "react";

import axios from "axios";
export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
        const response = await axios.get(url);
        setData(() => response.data);
      };
    fetchData(url);
  }, [url]);
  return data;
};
