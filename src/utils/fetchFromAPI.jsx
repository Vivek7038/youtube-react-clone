import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


     const options = {
      url: BASE_URL,
      params: {
        maxResults: "50",
      },
      headers: {
        "X-RapidAPI-Key": "71b6a01102msh0fd670b28c7b6fep1b3138jsn81a1afd260f8 ",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };


   
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
