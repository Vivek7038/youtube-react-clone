import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },

// REACT_APP_RAPID_API_KEY=KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA
       headers: {
         'X-RapidAPI-Key': "00f76ed365msh50167ac67d6ae1cp193cf9jsn3b60c22130ca",

         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
       },
     };
     

   
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
