import axios from 'axios';

const API_KEY = '50984165-ff91babc2717b2b8abbd0ea6f';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}







