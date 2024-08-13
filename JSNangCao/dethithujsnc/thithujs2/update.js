const searchParam = new URLSearchParams(document.location.search);
const id = searchParam.get("id");


const prdName = document.querySelector("#name")
const prdPrice = document.querySelector("#price")
const prdImg = document.querySelector("#image")
const updateForm = document.querySelector("#updateform")


fetch("http://localhost:3000/products/" + id)

    .then((res) => res.json())
    .then((data) => {

        prdName.value = data.name;
        prdPrice.value = data.price;
        prdImg.value = data.image;
    });

updateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let updateData = {
        "name": prdName.value,
        "price": prdPrice.value,
        "image": prdImg.value
    };

     // Kiểm tra trường "Tên sản phẩm"
     if (prdName.value.trim().length === 0) {
        document.querySelector("#nameError").classList.remove("hidden");
        return; // Dừng lại nếu có lỗi
    }

    // Kiểm tra trường "Giá"
    if (prdPrice.value.trim().length === 0) {
        document.querySelector("#priceError").classList.remove("hidden");
        return; // Dừng lại nếu có lỗi
    }

    // Kiểm tra trường "Ảnh"
    if (prdImg.value.trim().length === 0) {
        document.querySelector("#imageError").classList.remove("hidden");
        return; // Dừng lại nếu có lỗi
    }


    fetch("http://localhost:3000/products/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
    }).then(() => (window.location = "./index.html"));
    
});

