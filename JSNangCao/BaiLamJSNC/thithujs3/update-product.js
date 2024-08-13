const searchParam = new URLSearchParams(document.location.search);

const id = searchParam.get("id");


const prdName = document.querySelector("#product_name")
const prdNpx = document.querySelector("#publisher")
const prdDes = document.querySelector("#description")
const prdPrice = document.querySelector("#price")
const prdRating = document.querySelector("#rating")

const updateForm = document.querySelector("#updateform")




fetch("http://localhost:3000/products/" + id)

    .then((Response) => Response.json())
    .then((data) => {
        prdName.value = data.name
        prdNpx.value = data.npx
        prdDes.value = data.description
        prdPrice.value = data.price
        prdRating.value = data.rating
    
    });

updateForm.addEventListener("submit", (event) => {

    event.preventDefault();

  

    let updateData = {
        "name": prdName.value,
        "npx": prdNpx.value,
        "description": prdDes.value,
        "price": prdPrice.value,
        "rating": prdRating.value
    };

    fetch("http://localhost:3000/products/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
    }).then(() => (window.location = "./index.html"));


});