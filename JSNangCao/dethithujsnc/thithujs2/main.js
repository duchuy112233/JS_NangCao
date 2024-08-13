const table = document.querySelector("#table")

fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => render(data))
    .then(() => {
        const deleteBtn = document.querySelectorAll(".delete-btn")
        for (let btn of deleteBtn) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id
                fetch("http://localhost:3000/products/" + id, {
                    method: "DELETE"
                })

            })

        }
    })


function render(data) {
    let text = ""
    data.forEach(function (produc, index) {
        text += /*html*/`
        <tr>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">${index + 1}</td>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">${produc.name}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">${produc.price}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><img class = "w-20" src="${produc.image}" alt=""></td>
            <td class="p-6">
                <a href="./update.html?id=${produc.id}"><button class = "rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-400">Update</button>    </a>
                <button class = "delete-btn rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-400" data-id = ${produc.id} >Delete</button>
            </td>
      
            
          
        </tr>
        `
    });
    table.innerHTML = text
}