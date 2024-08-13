const table = document.querySelector("#table")

fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => render(data))
    .then(() => {
        //
        const deleteBtn = document.querySelectorAll(".delete-btn")
        for (let btn of deleteBtn) {
            btn.addEventListener("click", function () {
                const cf = confirm("Bán có chắc chắc muốn xoá sản phẩm này ?")
                if (cf) {
                    const id = btn.dataset.id
                    fetch("http://localhost:3000/products/" + id, {
                        method: "DELETE"
                    })
                }


            })

        }
    })







function render(data) {
    let text = ""
    data.forEach(function (produc, index) {
        text += /*html*/`
       <tr>
        <td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
        <td class="px-6 py-4 whitespace-nowrap">${produc.name}</td>
        <td class="px-6 py-4 whitespace-nowrap">${produc.npx}</td>
        <td class="px-6 py-4 whitespace-nowrap">${produc.description}</td>
        <td class="px-6 py-4 whitespace-nowrap">${produc.price}</td>
        <td class="px-6 py-4 whitespace-nowrap">${produc.rating}</td>
        <td class="px-6 py-4 whitespace-nowrap">
            <button data-id =${produc.id} class="delete-btn   bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Xoá
            </button>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <a href="./update-product.html?id=${produc.id}">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Cập nhật
                </button>
            </a>
        </td>
    </tr>


        `
    });

    table.innerHTML = text
}