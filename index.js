window.onload = function() {
    var darkModeButton = document.getElementById('darkmode');
    var isDarkMode = localStorage.getItem('darkMode') === 'true'; // luam darkmode din localstorage

    //seteaza starea pt darkmode
    function setDarkModeState(state) {
        localStorage.setItem('darkMode', state);
    }


    // functia vede in ce stare este darkmode, si schimba cum arata pagina 
    function updatePageAppearance() {
        var color = isDarkMode ? "white" : ""; //daca e true, culoare textului e white(pt ca fundalul va fi black)
        darkModeButton.textContent = isDarkMode ? "LIGHT MODE" : "DARK MODE"; //se schimba textul de pe buton

        var elements = document.querySelectorAll(".buton_meniu, p, h2, h3, .a_footer");
        elements.forEach(function(element) {
            element.style.color = color; 
        });

        var navElement = document.querySelector('nav');
        navElement.style.backgroundColor = isDarkMode ? "black" : ""; 

        var body = document.body;
        body.style.backgroundColor = isDarkMode ? "black" : "";

        var proeictare = document.querySelector('#proiectare');
        proeictare.style.backgroundColor = isDarkMode ? "rgba(0,0,0,0.7)" : "";

        var amenajare = document.querySelector('#amenajare');
        amenajare.style.backgroundColor = isDarkMode ? "rgba(0,0,0,0.7)" : "";

        var intretinere = document.querySelector('#intretinere');
        intretinere.style.backgroundColor = isDarkMode ? "rgba(0,0,0,0.7)" : "";

        // schimbam culorile meniului din footer cand trecem cu mouse ul peste ele (un fel de hover)
        var footerMenuLinks = document.querySelectorAll("#footer_menu a");
        footerMenuLinks.forEach(function(link) {
            link.addEventListener("mouseover", function() {
                this.style.color = isDarkMode ? "#FF4742" : "";
            });

            link.addEventListener("mouseout", function() {
                this.target.style.color = isDarkMode ? "white" : "";
            });
        });

    }

    // cand se incarca pagina, actualizez aspectul (in functie de ultimul state al lui darkmode)
     updatePageAppearance();

    darkModeButton.onclick = function(){
        // cand il apas, se schimba din dark in light, sau invers
        isDarkMode = !isDarkMode;

        // salvez starea in localstorage
        setDarkModeState(isDarkMode);

        // actualizez aspectul paginii
        updatePageAppearance();
    }


    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            window.location.href = 'contact.html';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            window.location.href = 'servicii.html';
        }
    });


    titlu = document.getElementsByClassName("titlu_principal");
    var culori = [
        "#FF4742",
        "#FFFFFF",
        "#D8BFD8"
      ];

    setInterval(function schimbaCuloareRandom(){
        var randomIndex = Math.floor(Math.random() * culori.length); //index random din lista culori
        var randomColor = culori[randomIndex];
        for (var i = 0; i < titlu.length; i++) {
            titlu[i].style.color = randomColor; 
          }
    }, 1000);

    schimbaCuloareRandom();
    
};


//AJAX GET DIN JSON
function showReviews()
{
    //ascund butonul
    document.getElementById("reviews-button").style.display = "none";
    let req = new XMLHttpRequest();

    req.open('GET', 'reviews.json', true);


    req.onload = function() {
        if (req.status == 200) {
            let reviews = JSON.parse(req.responseText);
            console.log('Request succeeded:', reviews);
            for (let i = 0; i < reviews.length; i++) {
                let reviewCard = document.createElement('div');
                reviewCard.innerHTML = `
                <h3 id = "titlu-reviews">${reviews[i].client_name}</h3>
                <p class = "text-review">${reviews[i].review_date}</p>
                <p class = "text-review">${reviews[i].comment}</p>
                <p class = "text-review">Rating: ${reviews[i].rating}</p>
              `;
              reviewCard.classList.add("articol");
                document.getElementById("reviews_feed").appendChild(reviewCard);
              }

        } else if (req.status == 404) {
            window.location.href = '404.html';
        } else {
            console.log('Request failed with status:', req.status);
        }
    
    };

    req.send();
}





