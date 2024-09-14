document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
   
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
   
    fetch("users.json")
      .then((response) => response.json())
      .then((users) => {
        const userExists = users.some(
          (user) => user.username === username && user.password === password
        );
        if (userExists) {
          sessionStorage.setItem("username", username);
          window.location.href = "https://docs.google.com/spreadsheets/d/1ksTvxua15Hn3J-KXoA2mjEOk4QSQtGqyHQG6unOPlXA/edit#gid=0";
        } else {
          window.location.href = "404.html";
        }
      })
      .catch((error) => {
        console.error("Eroare:", error);
      });
  });