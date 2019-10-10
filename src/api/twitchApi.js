import axios from "axios";
const apiKey = `${process.env.REACT_APP_API}`
let twitchApi = axios.create({
  headers: {
    "Client-ID": `${apiKey}`
  }
});

export default twitchApi;
