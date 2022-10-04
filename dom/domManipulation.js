const body = document.body

//creating elements
let div1 = document.createElement("div")

body.appendChild(div1)

div1.setAttribute("id", "mainTitle") //insere atributos
div1.style.display = "flex"
div1.style.justifyContent= "center"


let titulo= document.createElement("h1")
titulo.textContent = "DOM manipulation"

div1.appendChild(titulo)

div2 = document.createElement("div")
div2.id = "explanationText"
body.appendChild(div2)

let p = document.createElement("p")
p.textContent = "This is a small application of DOM manipulation using JavaScript. When you click on any of minions images, it disappears. To make all appear again: CTRL + m"
p.style.textAlign ="justify"
div2.appendChild(p)


//images
div3 = document.createElement("div")
div3.id = "Minions images"
body.appendChild(div3)


//figure1
figure = document.createElement("figure")
div3.appendChild(figure)

div3.style.display = "flex"

img1 = document.createElement("img")
img1.setAttribute("src" , "../dom/img/stuart.jpeg")
img1.setAttribute("alt" , "Stuart's face")
img1.style.height = "7em"
img1.style.width = "7em"
img1.style.borderRadius = "45%"
img1.id = "stuart"

figure.appendChild(img1)

//figure2
figure2 = document.createElement("figure")
div3.appendChild(figure2)

img2 = document.createElement("img")
img2.setAttribute("src" , "../dom/img/otto.jpeg")
img2.setAttribute("alt" , "Otto's face")
img2.style.height = "7em"
img2.style.width = "7em"
img2.style.borderRadius = "45%"
img2.id = "otto"

figure2.appendChild(img2)

//figure3
figure3 = document.createElement("figure")
div3.appendChild(figure3)

img3 = document.createElement("img")
img3.setAttribute("src" , "../dom/img/kevin2.jpg")
img3.setAttribute("alt" , "Kevin's face")
img3.style.height = "7em"
img3.style.width = "7em"
img3.style.borderRadius = "45%"
img3.id = "kevin"

figure3.appendChild(img3)

//figure4
figure4 = document.createElement("figure")
div3.appendChild(figure4)

img4 = document.createElement("img")
img4.setAttribute("src" , "../dom/img/bob.jpg")
img4.setAttribute("alt" , "Bob's face")
img4.style.height = "7em"
img4.style.width = "7em"
img4.style.borderRadius = "45%"
img4.id = "bob"

figure4.appendChild(img4)

//make minions disappear

img1.onclick = function (){
    figure.style.display = "none"
}
img2.onclick = function (){
    figure2.style.display = "none"
}
img3.onclick = function (){
    figure3.style.display = "none"
}
img4.onclick = function (){
    figure4.style.display = "none"
}



//make all minions visible again 
window.onkeydown = function (event){
    if (event.ctrlKey && event.key == "m"){
        figure.style.display = "block"
        figure2.style.display = "block"
        figure3.style.display = "block"
        figure4.style.display = "block"
    }
}

//evil-minions

let sectionEvilMinions = document.createElement("section")
sectionEvilMinions.id = "sectionEvilMinions"
let h2 = document.createElement("h2")
h2.textContent = "Adding Evil Minions"
h2.style.textAlign = "center"

sectionEvilMinions.appendChild(h2)

let p2 = document.createElement("p")
p2.style.textAlign = "justified"
p2.textContent = "Click on the button to add Evil Minions to the screen. Click on the image of each one minions and it desappears"

sectionEvilMinions.appendChild(p2)

body.appendChild(sectionEvilMinions)

//button to add more minions in the screen
let button = document.createElement("button")
button.setAttribute("id", "addMinions")
button.textContent = "ADD Minion"
sectionEvilMinions.appendChild(button)
button.setAttribute("onclick", "addImg()")



var sectionImgEvilMinions = document.createElement("section")
sectionImgEvilMinions.id = "imgEvilMinions"

body.appendChild(sectionImgEvilMinions)

var cont=0;
function addImg (){
    let minionImage = document.createElement("img")
    minionImage.setAttribute("src", "../dom/img/evil-minions.jpg")
    minionImage.setAttribute("alt" , "evil-minion")
    minionImage.style.height = "7em"
    minionImage.style.width = "7em"
    minionImage.style.borderRadius = "45%"
    minionImage.style.marginRight = "2.5em"
    minionImage.style.marginTop = "2.5em"
    minionImage.style.marginLeft = "2.5em"

    minionImage.id = `evilMinion${cont}`
    cont++
    sectionImgEvilMinions.appendChild(minionImage)

    minionImage.onclick = function(){
        minionImage.style.display = "none"
    }

}