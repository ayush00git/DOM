const view1 = document.querySelector("#view1")
console.log(view1)

const view2 = document.getElementById("view2")
console.log(view2) 

view1.style.display = ""
view2.style.display = "flex"

const views = document.getElementsByClassName("view")
const sameViews = document.querySelectorAll(".view")
console.log(views)
console.log(sameViews)

const divs = view1.querySelectorAll("div")
console.log(divs)

const sameDivs = view1.getElementsByTagName("div")
console.log(sameDivs)

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs)

for(let i = 0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "green";
}

const navText = document.querySelector("nav h1")
console.log(navText)

navText.style.color = "yellow"
navText.textContent = "Hello World!"

const nav = document.querySelector("nav")
console.log(nav)
nav.innerHTML = `<h1>Hello!</h1> <p>This is the navbar content</p>`

nav.style.justifyContent = "flex-start"
nav.style.justifyContent = "flex-end"
nav.style.justifyContent = "space-evenly"
nav.style.justifyContent = "space-between"

// navigating inside a DOM tree
console.log(evenDivs[0])
console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children)
console.log(evenDivs[0].parentElement.childNodes)
evenDivs[0].textContent = "Ayush"
// to check that do a parentElement contains childNodes or not
console.log(evenDivs[0].parentElement.hasChildNodes())

console.log(evenDivs[0].parentElement.lastChild)
console.log(evenDivs[0].parentElement.lastElementChild)
console.log(evenDivs[0].parentElement.firstChild)
console.log(evenDivs[0].parentElement.firstElementChild)

console.log(evenDivs[0].nextSibling)
console.log(evenDivs[0].nextElementSibling)
console.log(evenDivs[0].previousSibling)
console.log(evenDivs[0].previousElementSibling)

// accessing the div 7 
console.log(evenDivs[2].nextElementSibling)
console.log(evenDivs[3].previousElementSibling)
console.log(evenDivs[1].nextElementSibling.nextElementSibling.nextElementSibling)

// let's create the view2 same as view1

view1.style.display = "none"
view2.lastElementChild.remove()
view2.style.flexDirection = "row"
view2.style.flexWrap = "wrap"
view2.style.margin = "10px"
view2.style.backgroundColor = "white"


const createDiv = (parent, iter) => {
    const newDiv = document.createElement("div")
    newDiv.style.width = "100px"
    newDiv.style.height = "100px"
    newDiv.style.backgroundColor = "black"
    newDiv.textContent = iter
    newDiv.style.display = "flex"
    newDiv.style.justifyContent = "center"
    newDiv.style.alignItems = "center"
    newDiv.style.margin = "10px"

    parent.append(newDiv)
}

for(let i = 1; i <= 12; i++){
    createDiv(view2, i)
}