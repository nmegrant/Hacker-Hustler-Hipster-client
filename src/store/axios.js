import axios from "axios";

//fixed
export default axios.create({
  // baseURL: process.env.REACT_APP_HEROKU || "http://localhost:4000",
  baseURL: "http://localhost:4000",
});
