const table = document.querySelector("#table")
//
fetch("http://localhost:3000/proeducts")
    .then(res => res.json())
    .then(data => render(data))
    .then(()=>{
        //
        const deleteBtn = document.querySelectorAll(".delete-btn")
        for (let  btn of deleteBtn) {
            btn.addEventListener('click',function(){
                const id = btn.dataset.id
                fetch("http://localhost:3000/proeducts/" +id,{
                    method:"DELETE"
                })
            })
            
        }

    })

function render(data){
    let text = ""
    data.forEach(function(product, index) {
        text += /*html*/`
        <tr>
            <td class="p-6">${index + 1}</td>
            <td class="p-6">${product.name}</td>
            <td class="p-6">${product.price}</td>
            <td class="p-6"><img class = "w-40" src="${product.img}" ></td>
            <td class="p-6"><button class = "delete-btn rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-400" data-id = ${product.id} >Delete</button></td>
            <td class="p-6">  <a href="./update-product.html?id=${product.id}"><button class = "rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-400">Update</button> </a></td>
        </tr>

        `
       
    })
    table.innerHTML = text
}