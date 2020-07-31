"use strict"
/*
const dateNow = moment()
dateNow.locale("fr")
const date = document.getElementById("date")
date.textContent = `${dateNow.format("dddd DD/MM/YYYY")}`*/


let filterEntries = "toutes les veilles"

function insertVeille() {
    const ulEl = document.createElement("ul")
    const gridContainer = document.getElementById("grid-container")
    ulEl.classList.add("row", "list-unstyled")
    const filteredEntries = entries.filter((el) => {
        if (filterEntries === "toutes les veilles") {
            return true
        } else {
            return el.category(filterEntries)
        }
    })
    for (let veille of filteredEntries) {
        const li = document.createElement("li")
        li.classList.add("col-sm-12", "col-lg-12")
        li.innerHTML = `<div class="card mr-5 ml-5 mb-2 shadow-sm bg-white rounded">
        <div class="card-body">
            <h5 class="card-title ">${veille.subject}</h5>
            <a class="badge bg-primary text-decoration-none" href="#" role="button">${veille.category}</a>
            <p id="date" class=" card-text"><small class="text-muted"></small>${veille.date}</p>
        </div>
    </div>`
        ulEl.append(li)
    }
    gridContainer.innerHTML = ""
    gridContainer.append(ulEl)
}
insertVeille()
