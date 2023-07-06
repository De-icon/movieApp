
window.onload = () => {
  // fetch upcoming movie
  
  fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36d7c9de84msh6dc9183ee581734p1930c4jsnab8ca1caa87a',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
})
  .then(response => response.json())
  .then(data => {
    const list = data.results;

    list.map((item) => {
      const image = item.primaryImage.url
      const titel = item.originalTitleText.text
      const day = item.releaseDate.day
      const month = item.releaseDate.month
      const year = item.releaseDate.year

      const movies = `<div class="movie">
        <img src="${image}">
        <div>
        <h4>${titel} </h4>
        <p>${day}-${month}-${year}</p>
        </div>
      </div>`

      document.getElementById("up-coming").innerHTML += movies      
    })
  })
  .catch(error => {
  console.error(error);
})

  

fetch('https://imdb-top-100-movies1.p.rapidapi.com/',{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36d7c9de84msh6dc9183ee581734p1930c4jsnab8ca1caa87a',
		'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
	}
})
  .then(response => response.json())
  .then(data => {
    const list = data.items;

    list.map((item) => {
      const image = item.thumbnail
      const titel = item.title
      const year = item.year

      const movies = `<div class="movie">
        <img src="${image}">
        <div>
        <h4>${titel} </h4>
        <p>${year}</p>
        </div>
      </div>`
      
      document.getElementById("imbd").innerHTML += movies      
    })
  })
  .catch(error => {
  console.error(error);
})



  
}
// search result 

const result = document.querySelector('.result')
const searchBtn = document.querySelector('.btn')
const closeSearch = document.querySelector('.close')

searchBtn.addEventListener("click", () => {
  const searchInput = document.querySelector('#search-input').value
  const seracher = searchInput.toLowerCase();
  result.classList.add('active')
    const url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${seracher}`
    fetch(url,{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36d7c9de84msh6dc9183ee581734p1930c4jsnab8ca1caa87a',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
})
  .then(response => response.json())
  .then(data => {
    const list = data.results;

    list.map((item) => {
      const image = item.primaryImage.url
      const titel = item.originalTitleText.text
      const day = item.releaseDate.day
      const month = item.releaseDate.month
      const year = item.releaseDate.year

      const movies = `<div class="movie">
        <img src="${image}">
        <div>
        <h4>${titel} </h4>
        <p>${day}-${month}-${year}</p>
        </div>
      </div>`

      resultMovie = document.querySelector(".result-movies").innerHTML += movies      
    })
  })
  .catch(error => {
  console.error(error);
})



})
closeSearch.addEventListener("click", () => {
  result.classList.remove('active')
  resultMovie = document.querySelector(".result-movies").innerHTML = ''      

})
 
// scroller

function enableHorizontalScroll() {
    const scrollContainers = document.querySelectorAll('.scroll-container');
  
    scrollContainers.forEach(scrollContainer => {
      let isScrolling = false;
      let startX;
      let scrollLeft;
  
      scrollContainer.addEventListener('mousedown', e => {
        isScrolling = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
      });
  
      scrollContainer.addEventListener('mouseleave', () => {
        isScrolling = false;
      });
  
      scrollContainer.addEventListener('mouseup', () => {
        isScrolling = false;
      });
  
      scrollContainer.addEventListener('mousemove', e => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scroll speed as needed
        scrollContainer.scrollLeft = scrollLeft - walk;
      });
    });
  }
  
  enableHorizontalScroll();
  