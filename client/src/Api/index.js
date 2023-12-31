import axios from "axios";

const Axios =  axios.create({
  baseURL: process.env.REACT_APP_baseURL,
  withCredentials: true,
});

export default Axios