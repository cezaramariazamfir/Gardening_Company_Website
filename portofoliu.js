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

        // schimbam culorile meniului din footer cand trecem cu mouse ul peste ele (un fel de hover)
        var footerMenuLinks = document.querySelectorAll("#footer_menu a");
        footerMenuLinks.forEach(function(link) {
            link.addEventListener("mouseover", function() {
                this.style.color = isDarkMode ? "#FF4742" : "";
            });

            link.addEventListener("mouseout", function() {
                this.style.color = isDarkMode ? "white" : "";
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
            window.location.href = 'servicii.html';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            window.location.href = 'contact.html';
        }
    });
};














