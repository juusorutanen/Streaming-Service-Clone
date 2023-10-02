const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


const movieGrid = document.getElementById("movie-grid");

getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    showMovies(respData.results.splice(0,6));
}

function showMovies(movies) {
    movies.forEach((movie) => {
        const { poster_path, title } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
        `;
        document.getElementById("movie-grid").appendChild(movieEl);
    });
}

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(accordionHeader => {
  accordionHeader.addEventListener("click", event => {
    
    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;
    if(accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    }
    else {
      accordionBody.style.maxHeight = 0;
    }
    
  });
});
