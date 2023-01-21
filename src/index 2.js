// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix';


const KEY = '33003809-0ba39c85a11eed1272aa84bba';
const BASE_URL ='https://pixabay.com/api/';

let inputEl = document.querySelector('#search-form');
let btnEl = document.querySelector('.search-form')
let divBox = document.querySelector('.gallery')
let saveValue = '';
inputEl.addEventListener('input', onSearchInput);
btnEl.addEventListener('submit', onSubmit);

function onSearchInput (event){
let value = inputEl.elements.searchQuery.value
return saveValue = value;
};
// saveValue = value;


function onSubmit (e){
    e.preventDefault();
    // console.log(saveValue);
    fetchImage(saveValue);

};

function fetchImage(name){
    
    const response = fetch(`https://pixabay.com/api/?key=33003809-0ba39c85a11eed1272aa84bba&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`);
    return response.then(resp => {
    if(!resp.ok){
        Notify.failure('Oops, there is no country with that name'), {
            timeout: 5000,
          };
        throw new Error(resp.statusText);
    }
    return resp.json()})
};

//  витягнути з інпута значення ok
//  написати функцію яка дає запити, включаючи показники на сторінці
//  заінерити їх на сторінку
//  підключити галерею
//  зробити нетфлікс


/* <button type="button" class="load-more">Load more</button> */

// const { height: cardHeight } = document
//   .querySelector(".gallery")
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: "smooth",
// });

// "Sorry, there are no images matching your search query. Please try again."

// "We're sorry, but you've reached the end of search results."

// "Hooray! We found totalHits images."

// https://pixabay.com/api/?key=33003809-0ba39c85a11eed1272aa84bba&q={name}&image_type=photo&orientation=horizontal&safesearch=true


