const prdName = document.querySelector("#prd-name")
const prdPrice = document.querySelector("#prd-price")
const prdImg = document.querySelector("#prd-img")
const addForm = document.querySelector("#add-product")

addForm.addEventListener("submit", (event) => {
    event.preventDefault();


    let newProduct = {
        "name": prdName.value,
        "price": prdPrice.value,
        "img": prdImg.value
    }
    fetch("http://localhost:3000/proeducts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)

    }).then(() => (window.location = "./index.html"));


});



