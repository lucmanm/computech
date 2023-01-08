import React, { useState, useEffect } from "react";
import axios from "axios";
export const useFetchApi = ({ apiUrl, apiIdUrl }) => {
  const [products, setProd] = useState([]);

  const apiFitch = async () => {
    if (apiUrl) {
      const response = await axios(apiUrl);
      const responseData = await response.data;
      setProd(responseData.products);
    } else {
      const response = await axios(apiIdUrl);
      const responseData = await response.data;
      setProd(responseData);
    }
  };

  useEffect(() => {
    apiFitch();
  }, []);

  return { products };
};
