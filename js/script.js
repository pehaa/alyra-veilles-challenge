"use strict"

const dateNow = moment()
dateNow.locale("fr")
const date = document.getElementById("date")
console.log(dateNow)

let filterEntries = "toutes les veilles"


function insertVeille() {
    const ulEl = document.createElement("ul")
    const gridContainer = document.getElementById("grid-container")
    ulEl.classList.add("row", "list-unstyled")
    const filteredEntries = entries.filter((el) => {
        if (filterEntries === "toutes les veilles") {
            return true
        } else {
            return el.category.includes(filterEntries)
        }
    })
    for (let veille of filteredEntries) {
        const li = document.createElement("li")
        li.classList.add("col-sm-12", "col-lg-12")
        li.innerHTML = `<div class="card mx-5 mb-2 shadow-sm bg-white rounded">
        <div class="card-body">
            <h3 class="card-title ">${veille.subject}</h3>
            <a class="badge bg-primary text-decoration-none" href="#" role="button">${veille.category}</a>
            <p id="date" class=" card-text"><small class="text-muted">${veille.date}</small></p>
        </div>
    </div>`
        ulEl.append(li)
    }
    gridContainer.innerHTML = ""
    gridContainer.append(ulEl)
}
insertVeille()

function activateFilterByCategory() {
    const selectCa = document.getElementById("filterCategory")

    uniqueCategory.sort()
    //console.log(uniqueCategory)
    //renvoie les 17 différentes catégories


    for (let category of uniqueCategory) {
        const option = document.createElement("option")
        option.textContent = category
        option.value = category
        selectCa.append(option)
    }
    selectCa.addEventListener("change", () => {
        filterEntries = selectCa.value
        insertVeille()
        console.log(filterEntries)
    })
}

activateFilterByCategory()

function activateFilterByDate() {
    const selectDa = document.getElementById("filterDate")
    uniqueCategory1.sort()


    for (let date of uniqueCategory1) {
        const option = document.createElement("option")
        option.textContent = date
        option.value = date
        selectDa.append(option)
    }
    selectDa.addEventListener("change", () => {
        filterEntries = selectDa.value
        insertVeille()
    })
}

activateFilterByDate()

