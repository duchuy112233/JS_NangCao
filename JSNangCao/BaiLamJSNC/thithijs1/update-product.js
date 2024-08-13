const searchParam = new URLSearchParams(document.location.search);

const id = searchParam.get("id");

const prdName = document.querySelector("#prd-name")
const prdPrice = document.querySelector("#prd-price")
const prdImg = document.querySelector("#prd-img")
const updateForm = document.querySelector("#update-product")


fetch("http://localhost:3000/proeducts/" + id)

    .then((Response) => Response.json())
    .then((data) => {

        prdName.value = data.name;
        prdPrice.value = data.price;
        prdImg.value = data.img;
    });

updateForm.addEventListener("submit", (event) => {

    event.preventDefault();


    let updateData = {
        "name": prdName.value,
        "price": prdPrice.value,
        "img": prdImg.value
    };

    fetch("http://localhost:3000/proeducts/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
    }).then(() => (window.location = "./index.html"));


});

