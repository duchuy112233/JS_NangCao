const prdName = document.querySelector("#name");
const prdPrice = document.querySelector("#price");
const prdImg = document.querySelector("#image");
const addForm = document.querySelector("#addform");

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newProduct = {
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

    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    }).then(() => {

    window.location = "./index.html";
    });
});
