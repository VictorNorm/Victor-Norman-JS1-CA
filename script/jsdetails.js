const queryString = document.location.search
console.log(queryString)

const parameters = new URLSearchParams(queryString);
console.log(parameters)

const id = parameters.get("id");
console.log(id)

const container = document.querySelector(".container")
const pageTitle = document.querySelector(".pageTitle")

const errorContainer = document.querySelector(".errorContainer")

const loadingSpinner = document.querySelector(".loadingSpinner");

const errorDisplay = document.querySelector(".errorDisplay");

async function getMovieID() {

    try {
        const response = await fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=" + id, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "e3b95c4226msh3c62b0ef2ca3388p13283ejsn19e670cb03b4",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        });

        const result = await response.json();

        const movieInfo = result.d
        console.log(movieInfo)

        loadingSpinner.classList = "";

        movieInfo.forEach(function(info) {
            pageTitle.innerHTML = info.l;
            container.innerHTML = 
            `<div>
            <h3 class="h3Details">${info.l}</h3>
            <div class="poster-container" style="background-image :url(${info.i.imageUrl});"></div>
            <div class="movie-info">Starring: <b>${info.s}</b></div>
            <div class="movie-info">Year of release: <b>${info.y}</b></div>
            </div>
            `;
        });

    } catch (error) {
        console.log(error)
        loadingSpinner.classList = "";
        errorDisplay.style.display = "block";
        errorDisplay.innerHTML = error;
    }
}

getMovieID();

