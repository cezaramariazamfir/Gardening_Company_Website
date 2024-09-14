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

        var labels = document.querySelectorAll('label');
        labels.forEach(function(element) {
            element.style.color = color;
        });

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

    //FORMULAR
    var trimiteForm = document.getElementById("trimite_formular");
    
    //pun data curenta la data programarii
    var data = document.getElementById('data');
    var current_date = new Date();
    var data_formatata = current_date.toISOString().split('T')[0]; //formatam string ul sa fie in format acceptat 
    data.value = data_formatata;

    trimiteForm.onclick =  function() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var data = document.getElementById("data").value;
        var ora = document.getElementById("ora").value;
      
        // validez input
        if (name === '' || email === '' || data == '' || ora == '') {
          alert("Te rog completează toate câmpurile!");
          return;
        }


        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (regex.test(email)) {
            console.log("Adresa de email este validă.");
        } else {
            alert("Adresa de email nu este validă.");
            return;
        }


        var jsonData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            data: document.getElementById("data").value,
            ora: document.getElementById("ora").value
        };
        console.log(jsonData);
        
        //creez un obiect FormData
        var formData = new FormData();
        
        // iterez prin proprietatile obiectului JSON și le adaug la formData
        for (var key in jsonData) {
            formData.append('data[' + key + ']', jsonData[key]);
        }
        
        // trimit datele catre api-ul de pe sheetdb
        fetch("https://sheetdb.io/api/v1/2ga1nvfgewqw0", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));



        // afisez datele cu alert
        alert("Nume: " + name + "\nEmail: " + email + "\nData: " + data + "\nOra: " + ora);
      
        // resetez formularul
        document.getElementById("formular").reset();
    };

    //STERGERE + CREARERE ELEMENTE
    // iau div-ul unde sunt butoanele
    var butoaneContact = document.getElementById("butoane_contact");

    // sterg butoanele din div
    while (butoaneContact.firstChild) {
        butoaneContact.removeChild(butoaneContact.firstChild);
    }

    // fac un div nou
    var contactInfo = document.createElement("div");
    contactInfo.id = "contact_info";

    // pun datele de contact in div
    var telefon1 = document.createElement("p");
    telefon1.textContent = "0268423189";
    contactInfo.appendChild(telefon1);

    var telefon2 = document.createElement("p");
    telefon2.textContent = "0368007161";
    contactInfo.appendChild(telefon2);

    var email = document.createElement("p");
    email.textContent = "kronplant@yahoo.com";
    contactInfo.appendChild(email);

    // adaug div-ul nou dupa div-ul sters
    butoaneContact.parentNode.insertBefore(contactInfo, butoaneContact.nextSibling);


    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            window.location.href = 'portofoliu.html';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            window.location.href = 'index.html';
        }
    });

    

    };




