const previousButton = document.getElementById('prev-button');
let currentItem = document.getElementById('current');
const nextButton = document.getElementById('next-button');
let sliderItemsArr = ['LOREM IPSUM DOLOR SIT', 'LOREM IPSUM DOLOR SIT 1', 'LOREM IPSUM DOLOR SIT 2'];
let i = 0;

currentItem.innerHTML = sliderItemsArr[i];

const showNextItem = () => {
  if (i === sliderItemsArr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  currentItem.innerHTML = sliderItemsArr[i];
}

const showPreviousItem = () => {
  if (i === 0) {
    i = sliderItemsArr.length - 1;
  } else {
    i--;
  }
  currentItem.innerHTML = sliderItemsArr[i];
}

const toggleSearchInput = () => {
  const searchSection = document.getElementById('search-section');
  if (searchSection.style.display === "none") {
    searchSection.style.display = "block";
  } else {
    searchSection.style.display = "none";
  }
};

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1
  });
});

