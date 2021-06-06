const previousButton = document.getElementById('prev-button');
let currentItem = document.getElementById('current');
const nextButton = document.getElementById('next-button');
const burgerMenu = document.getElementById('burger-menu');
let sliderItemsArr = ['LOREM IPSUM DOLOR SIT', 'LOREM IPSUM DOLOR SIT 1', 'LOREM IPSUM DOLOR SIT 2'];
let activeSliderItemIndex = 0;

currentItem.innerHTML = sliderItemsArr[activeSliderItemIndex];

const showNextItem = () => {
  if (activeSliderItemIndex === sliderItemsArr.length - 1) {
    activeSliderItemIndex = 0;
  } else {
    activeSliderItemIndex++;
  }
  currentItem.innerHTML = sliderItemsArr[activeSliderItemIndex];
}

const showPreviousItem = () => {
  if (activeSliderItemIndex === 0) {
    activeSliderItemIndex = sliderItemsArr.length - 1;
  } else {
    activeSliderItemIndex--;
  }
  currentItem.innerHTML = sliderItemsArr[activeSliderItemIndex];
}

const toggle = (element) => {
  return element.classList.toggle("show");
}

const toggleSearchInput = () => {
  const searchSection = document.getElementById('search-section');
  toggle(searchSection);
};

const toggleNav = () => {
  const listItemsDiv = document.getElementById('burger-menu-items');
  toggle(listItemsDiv);
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1
  });
});

