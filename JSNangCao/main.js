const table = document.querySelector("#table")

fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => render(data))
    .then(() => {
        const deleteBtn = document.querySelectorAll(".delete-btn")
        for (let btn of deleteBtn) {
            btn.addEventListener("click", function () {
                const x = confirm("Bạn có chắc chắn muốn xoá")
                if (x) {
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
    data.forEach(function (product, index) {
        text += /*html*/`
     <tr>
     <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">${index + 1}</td>
     <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">${product.name}</td>
     <td class="whitespace-nowrap px-4 py-2 text-gray-700">${product.price}</td>
     <td class="whitespace-nowrap px-4 py-2 text-gray-700"><img class="w-20" src="${product.img}" alt=""></td>
     <td class="whitespace-nowrap px-4 py-2 text-gray-700">${product.xuatxu}</td>
     <td class="p-6">
         <a href="/update.html?id=${product.id}"><button
                 class="rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-400">Update</button>
         </a>
         <button
             data-id=${product.id} class="delete-btn rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-400">Delete</button>
     </td>



 </tr>
    `
    });

    table.innerHTML = text
}