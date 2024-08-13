const searchParam = new URLSearchParams(document.location.search);
const id = searchParam.get("id");

const prdname = document.querySelector("#name")
const prdprice = document.querySelector("#price")
const prdimg = document.querySelector("#img")
const prdxuatxu = document.querySelector("#xuatxu")



fetch("http://localhost:3000/products/"+id)
.then(res => res.json())
.then(data => {
    prdname.value=data.name;
    prdprice.value=data.price;
    prdimg.value=data.img;
    prdxuatxu.value=data.xuatxu;

})



const updateForm = document.querySelector("#updateform");
updateForm.addEventListener("submit",(e)=>{
    e.preventDefault();


    let = upProducts = {
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

    

    fetch("http://localhost:3000/products/"+id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(upProducts)
    }).then(() => {
        window.location = "./index.html";
    });


})
