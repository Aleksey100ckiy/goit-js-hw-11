// Описаний в документації

import fetchImage from './class'

// const KEY = '33003809-0ba39c85a11eed1272aa84bba';
// const BASE_URL ='https://pixabay.com/api/';

let inputEl = document.querySelector('#search-form');
let btnEl = document.querySelector('.search-form')
let divBox = document.querySelector('.gallery')
let saveValue = '';
let btnNextSearchEl = document.querySelector('.load-more')
let page = 1;


btnNextSearchEl.addEventListener('click', onNextSearchClick);
inputEl.addEventListener('input', onSearchInput);
btnEl.addEventListener('submit', onSubmit);

function onSearchInput (event){
    event.preventDefault();
    
let value = inputEl.elements.searchQuery.value
return saveValue = value;

};
const resp = fetchImage(cat, 1).then((response)=> {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // виконується завжди
});  ;



const resp = fetchImage(cat, 1).then((response)=> {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // виконується завжди
});  ;


function onSubmit (e){
    e.preventDefault();
    page = 1;

    console.log(saveValue)
    // fetchImage(saveValue, page)
    // .then(data => {console.log(data.hits)
    //     createImg (data.hits)})
    // .catch(err => console.log(err));

};


function createImg (arr){
    const markup = arr.map((img) => `<div class="photo-card">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes: ${img.likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${img.views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${img.comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${img.downloads}</b>
          </p>
        </div>
      </div>`)
        .join("");
        return divBox.insertAdjacentHTML('beforeend', markup)
};

function clearInput(){
    let empty = '';
    divBox.innerHTML = empty;
};

function onNextSearchClick (evt){
    evt.preventDefault();
    console.log(page);

};




// зробити селектори, слухачі, ок
// на кожного слухача зробити ф-цію, ок
//  витягнути з інпута значення ok
//  написати функцію яка дає запити, включаючи показники на сторінці ok
// зробити, щоб запрос був 1 пейдж і по 40 на пейдж ok
//  заінерити їх на сторінку ok
// пустий масив - повідомленя // "Sorry, there are no images matching your search query. Please try again."
// накидати стилі ок
// зробити скидання при новому сабміті ок
// зробити пагінацію сторінок
// зробити кнопку(ok), приховати(ok), розбудити, якщо кінець колекції - повідомлення  "We're sorry, but you've reached the end of search results."
//  підключити галерею 
// розібратись і зробити з асинк евейт запрос
//  зробити нетфлікс всіх повідомлень 




// async function fetchImage() {
//   try{
//     const response = await fetch (`https://pixabay.com/api/?key=33003809-0ba39c85a11eed1272aa84bba&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`);
//     if(!response.ok){
//       throw new Error(response.statusText)
//     }
//     const data = await response.json();
//     console.log(data);
//   }catch (err){
//     console.log(err);

//   };
// }



// function fetchImage(name, page){
    
//     const response = fetch(`https://pixabay.com/api/?key=33003809-0ba39c85a11eed1272aa84bba&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page.value}&per_page=40`);
//     return response.then(resp => {
//     if(!resp.ok){
//         throw new Error(resp.statusText);
//     }
//     return resp.json()})
// };

// if(arrImages == []){
//     Notify.failure("Sorry, there are no images matching your search query. Please try again."), {
//         timeout: 5000,
//       };
// }

// const { height: cardHeight } = document
//   .querySelector(".gallery")
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: "smooth",
// });


// / import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";
// import { Notify } from 'notiflix';



// https://pixabay.com/api/?key=33003809-0ba39c85a11eed1272aa84bba&q=${name}&image_type=photo&orientation=horizontal&safesearch=true