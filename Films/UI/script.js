let url = "https://localhost:44311/films";

onload = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    Card(data);
};


function Card(items) {
    let cards = items.map(item => {

        let div = document.createElement("div");
        div.style.cursor = "pointer";
        div.classList.add("col-xl-3");
        div.classList.add("col-lg-3");
        div.classList.add("col-md-4");
        div.classList.add("col-sm-5");
        div.classList.add("p-1");
        div.classList.add("text-center");

        let divFinaly = document.createElement("div");
        divFinaly.classList.add("cardBox");
        divFinaly.classList.add("card");
        divFinaly.classList.add("p-2");
        divFinaly.style.height = "100%";


        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.classList.add("img");

        img.src = item.image;


        let hr2 = document.createElement("hr");
        hr2.classList.add("m-0");

        let div2 = document.createElement("div");

        div2.innerHTML = item.name;
        div2.style.height = "100%";

        div2.classList.add("text12");
        div2.style.fontSize = "20px";
        let hr = document.createElement("hr");
        hr.classList.add("m-0");

        let div4 = document.createElement("div");
        div4.classList.add("row");
        div4.classList.add("p-1");
        div4.classList.add("pr-3");
        div4.classList.add("pl-3");
        let div41 = document.createElement("col-12");

        for (let index = 0; index < item.rating; index++) {
            let span = document.createElement("span");
            span.innerHTML = "&#9733";
            div41.appendChild(span);
        }
        div4.appendChild(div41);


        let div5 = document.createElement("div");
        div5.classList.add("row");
        let div51 = document.createElement("div");
        div51.classList.add("col-12");
        div51.innerHTML = item.genre;
        div51.classList.add("text12");
        div5.appendChild(div51);


        div6 = document.createElement("div");
        div6.classList.add("row");

        let div61 = document.createElement("div");
        div61.classList.add("col-6");

        let btn1 = document.createElement("button");
        btn1.classList.add("btn");
        btn1.classList.add("btn-danger");
        btn1.innerHTML = "Delete";
        btn1.classList.add("w-100");
        btn1.addEventListener("click",function(){Delete(item)});

        div61.appendChild(btn1);

        let div62 = document.createElement("div");
        div62.classList.add("col-6");

        let btn2 = document.createElement("button");
        btn2.classList.add("btn");
        btn2.classList.add("w-100");
        btn2.classList.add("btn-warning");
        btn2.addEventListener("click", function () { Edit(item) });
        btn2.innerHTML = "Edit";
        div62.appendChild(btn2);

        div6.appendChild(div61);
        div6.appendChild(div62);

        divFinaly.appendChild(img);
        divFinaly.appendChild(div2);
        divFinaly.appendChild(hr);
        divFinaly.appendChild(div4);
        divFinaly.appendChild(div5);
        divFinaly.appendChild(div6);
        div.appendChild(divFinaly);
        return div;
    });
    cards.forEach(element => {
        document.querySelector("#all").appendChild(element);
    });
}
function Add() {
    document.location = "Add.html";
    let obj =
    {
        name: "",
        rating: "",
        genre: "",
        image: ""
    }

    localStorage.setItem("obj", JSON.stringify(obj));
}

function Edit(item) {
    document.location = "Add.html";
    localStorage.setItem("obj", JSON.stringify(item));
}

async function Delete(item)
{
    var xmlhttp=new XMLHttpRequest();
    var theUrl = "https://localhost:44311/films";
    xmlhttp.open("DELETE", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.responseType = 'json';
    await xmlhttp.send(JSON.stringify(item));
    document.location.reload();
}