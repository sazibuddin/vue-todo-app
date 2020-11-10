
  
  const axios = require("axios");
  const defaultOptions = {
    //baseURL: process.env.VUE_APP_API_URL
    baseURL: 'http://ecommerce.sazibuddin.me/api',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  let axiosInstance = axios.create(defaultOptions);
  axiosInstance.interceptors.request.use(function (config) {
    let token = "";
    config.headers.Authorization = token ? `Token ${token}` : "";
    // config.headers.Authorization =  token ? `${token}` : '';
    return config;
  });
  
  export default axiosInstance;