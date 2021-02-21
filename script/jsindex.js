// Victor Norman, JS1-CA ------------------------------

const allContainer = document.querySelector(".allContainer");

const loadingSpinner = document.querySelector(".loadingSpinner");

const errorDisplay = document.querySelector(".errorDisplay");

async function getMovieTitles() {

    try{
        const response = await fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=Godzilla", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "e3b95c4226msh3c62b0ef2ca3388p13283ejsn19e670cb03b4",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
    
        const result = await response.json();
        const titles = result.d

        loadingSpinner.classList = "";

        for (let i = 0; i < titles.length; i++) {
            console.log(titles[i]);
            allContainer.innerHTML +=
            `<a href="details.html?id=${titles[i].id}"><div class="movieContainer">
               <div class="image" style="background-image :url(${titles[i].i.imageUrl});"></div>
               <div class="info"> 
                 <div> <b>Title:</b> ${titles[i].l}</div>
                 <div> <b>Rank:</b> ${titles[i].rank}</div>
                 <div> Year of release: ${titles[i].y}</div>
               </div>
            </div>
            </a>`;
        }
    }

    catch(error) {
        loadingSpinner.classList = "";
        errorDisplay.style.display = "block";
        errorDisplay.innerHTML = error;
        console.log(error);
    }
}

getMovieTitles();