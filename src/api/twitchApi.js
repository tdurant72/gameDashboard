import axios from "axios";

let twitchApi = axios.create({
  headers: {
    "Client-ID": ""
  }
});

export default twitchApi;
