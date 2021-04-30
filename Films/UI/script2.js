
let name = document.querySelector("#name");
let rating = document.querySelector("#rating");
let genre = document.querySelector("#genre");
let image = document.querySelector("#image");
let id;
onload = getData();
async function AddFilm() {
  
    let film =
    {
        Name: name.value,
        Rating: Number.parseFloat(rating.value),
        Genre: genre.value,
        Image: image.value

    }
    var xmlhttp = new XMLHttpRequest();
    var theUrl = "https://localhost:44311/films";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.responseType = 'json';
    await xmlhttp.send(JSON.stringify(film));
    alert("OK");
    document.location = "index.html";

}
function Edit() {
    let film =
    {
        Id:id,
        Name: name.value,
        Rating: Number.parseFloat(rating.value),
        Genre: genre.value,
        Image: image.value

    }
    var xmlhttp = new XMLHttpRequest();
    var theUrl = "https://localhost:44311/films";
    xmlhttp.open("PUT", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.responseType = 'json';
    console.log(id);
    xmlhttp.send(JSON.stringify(film));
    alert("OK");
    document.location = "index.html";
}

function getData() {
    let data = localStorage.getItem("obj");
    let obj = JSON.parse(data);
    name.value = obj.name;
    rating.value = obj.rating;
    genre.value = obj.genre;
    image.value = obj.image;
    id = obj.id;
}