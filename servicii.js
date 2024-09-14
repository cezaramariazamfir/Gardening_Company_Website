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

        var elements = document.querySelectorAll(".buton_meniu, p, h2, h3, .a_footer, li");
        elements.forEach(function(element) {
            element.style.color = color; 
        });

        var navElement = document.querySelector('nav');
        navElement.style.backgroundColor = isDarkMode ? "black" : ""; 

    
        var body = document.body;
        body.style.backgroundColor = isDarkMode ? "black" : "";

        var bodyStyle = getComputedStyle(body); //iau stilul de pe body
        console.log('Background Color: ', bodyStyle.backgroundColor); //il afisez in consola

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
            window.location.href = 'index.html';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            window.location.href = 'portofoliu.html';
        }
    });


    buton_calculare = document.getElementById("buton_calculare");
    buton_calculare.onclick = calculeazaPret;
    
    function calculeazaPret() {
        var lungime = parseFloat(document.getElementById('lungime').value);
        var latime = parseFloat(document.getElementById('latime').value);
    
        if (isNaN(lungime) || isNaN(latime)) {
            alert("Vă rugăm să introduceți lungimea și lățimea corect!");
            return;
        }
    
        var suprafata = lungime * latime;
        var costTotal = suprafata * 20;

        var email;
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        do {
            email = prompt("Introduceți adresa de email pentru a primi 10% reducere:", "");
            if (email === null) {
                document.getElementById('rezultat').innerHTML = "Costul total este de " + costTotal.toFixed(2) + " RON.";
                break;
                }
            if (!regex.test(email)) {
                alert("Adresa de email nu este validă.");
            }
            else{
                console.log("Adresa de email este validă: " + email);
                costTotal *= 0.9; // aplic reducerea
                document.getElementById('rezultat').innerHTML = "Costul total după reducere este de " + costTotal.toFixed(2) + " RON.";
            }
        } while (!regex.test(email));
        
        


        // generez un cod de reducere
        function generareCodReduere() {
            var lungimeCod = 8; 
            var caracterePermise = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
            var cod = ''; 
            
            for (var i = 0; i < lungimeCod; i++) {
                var indexCaracter = Math.floor(Math.random() * caracterePermise.length); 
                cod += caracterePermise.charAt(indexCaracter); 
            }
            
            return cod; 
        }

        // array-ul unde sunt stocate toate codurile de reducere
        var coduriReducre = [];

        // generez un cod unic de reducere si il pun in array
        var codReducre;
        do {
            codReducre = generareCodReduere();
        } while (coduriReducre.includes(codReducre));

        coduriReducre.push(codReducre);


        email = email.toUpperCase();
        alert("Emailul: " + email + '\nCodul de reducere: ' + codReducre);

    }

    
};














