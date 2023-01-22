
import axios from "axios";

const options = {
  key: "33003809-0ba39c85a11eed1272aa84bba",
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

export async function fetchImage (inputName, page) {
    const result = await axios.get('https://pixabay.com/api/', {
        params: {...options, 
            page,
            q: inputName,
        }
    })
    return result.data;
  
  };