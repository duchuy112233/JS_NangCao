const prdname = document.querySelector("#name")
const prdprice = document.querySelector("#price")
const prdimg = document.querySelector("#img")
const prdxuatxu = document.querySelector("#xuatxu")

const addForm = document.querySelector("#addform");

addForm.addEventListener("submit", (even) => {
    even.preventDefault();


    let = newProducts = {
        "name": prdname.value,
        "price": prdprice.value,
        "img": prdimg.value,
        "xuatxu": prdxuatxu.value,
    }


    if (prdname.value.trim().length===0) {
        document.querySelector("#nameErr").classList.remove("hidden");
        return; 
        
    }
    if (prdprice.value.trim().length===0) {
        document.querySelector("#priceErr").classList.remove("hidden");
        return; 
    }
    if (prdimg.value.trim().length===0) {
        document.querySelector("#imgErr").classList.remove("hidden");
        return; 
    }
    if (prdxuatxu.value.trim().length===0) {
        document.querySelector("#xuatxuErr").classList.remove("hidden");
        return; 
    }

    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProducts)
    }).then(() => {
        window.location = "./index.html";
    });


});
