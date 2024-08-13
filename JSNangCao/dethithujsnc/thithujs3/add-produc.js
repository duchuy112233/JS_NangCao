const prdName = document.querySelector("#product_name")
const prdNpx = document.querySelector("#publisher")
const prdDes = document.querySelector("#description")
const prdPrice = document.querySelector("#price")
const prdRating = document.querySelector("#rating")

const addForm = document.querySelector("#addform")

addForm.addEventListener("submit", (even) => {
    even.preventDefault()


    let newProduct = {
        "name": prdName.value,
        "npx": prdNpx.value,
        "description": prdDes.value,
        "price": prdPrice.value,
        "rating": prdRating.value
    }
    fetch("http://localhost:3000/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    }).then(() => (window.location = "./index.html"));


});
