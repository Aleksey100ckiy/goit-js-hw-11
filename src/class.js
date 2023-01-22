// export default class ApiService{
//     constructor(){

import axios from "axios";

//     }};

    const options = {
        key: "33003809-0ba39c85a11eed1272aa84bba",
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
    };

        
 export function fetchImage (inputName, page) {
        const data = await axios.get('https://pixabay.com/api/', {
            params: {...options, 
                page,
                q: inputName,
            }
        })
        return data;

    };

    // };
    //       const url = `https://pixabay.com/api/?key=33003809-0ba39c85a11eed1272aa84bba&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`;
    //       fetch (url, options)
    //       .then(resp =>resp.json())
    //       .then(console.log);
    //   }
