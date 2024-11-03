// Header
fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

// Homepage
fetch("components/homepage.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("content").innerHTML = data;
  });

// Footer dosyasını yükle
// fetch("footer.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("footer").innerHTML = data;
//   });
