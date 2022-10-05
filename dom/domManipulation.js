const body = document.body

function explanation(title, text){
    let titulo = document.createElement("h1")
    titulo.style.textAlign="center"
    titulo.textContent = title
    body.appendChild(titulo)
    let p = document.createElement("p")
    p.textContent = text
    body.appendChild(p)

}

explanation("DOM manipulation", "This is a small application of DOM manipulation using JavaScript. When you click on any of minions images, it disappears. To make all appear again: CTRL + m")

//images mainMinions
div3 = document.createElement("div")
div3.id = "Minions images"
div3.style.display = "flex"
body.appendChild(div3)


function addMainMinions (idImg, pathImg){
    var figure = document.createElement("figure")
    var img = document.createElement("img")
    img.setAttribute("src", pathImg)
    img.setAttribute("id", idImg)
    img.setAttribute("alt", `${idImg}'s face` )
    img.setAttribute("title", idImg)
    styleImg(img)
    figure.appendChild(img)
    div3.appendChild(figure)

    return img
}
//style of images 
function styleImg (img){
    img.style.height = "7em"
    img.style.width = "7em"
    img.style.borderRadius = "45%"
}

//array of minions
var minions = [
    {
        id:"stuart", pathImg: "../dom/img/stuart.jpeg", image: null
    },
    {
        id:"otto", pathImg: "../dom/img/otto.jpeg", image: null
    },
    {
        id:"kevin", pathImg: "../dom/img/kevin2.jpg", image: null 
    },
    {
        id: "bob", pathImg: "../dom/img/bob.png", image: null
    },
    {
        id: "jerry", pathImg: "../dom/img/jerry.png", image: null
    },
    {
        id: "carl", pathImg: "../dom/img/carl.png", image: null
    },
    {
        id: "tom", pathImg: "../dom/img/tom.jpeg", image: null
    }
]

//add minions and add event onclick
for (let minion of minions){
    //add main Minions on the screen
    minion.image = addMainMinions(minion.id, minion.pathImg) 

    //make minions disappear
    minion.image.onclick = function (){
        let figure = minion.image.parentElement 
        figure.style.display = "none"
    }
}


//make all main-minions visible again 
window.onkeydown = function (event){
    if (event.ctrlKey && event.key == "m"){
       for (let minion of minions){
            let figure = minion.image.parentElement
            figure.style.display = "block"
       }
    }
 }


//evil-minions

explanation("Adding Evil Minions","Click on the button to add Evil Minions to the screen. Click on the image of each one minions and it desappears")



//button to add evil minions on the screen
let button = document.createElement("button")
button.setAttribute("id", "addMinions")
button.textContent = "Add Minion"
button.setAttribute("onclick", "addImg()")
button.style.height = "3em"
button.style.width = "10em"

body.appendChild(button)

var sectionImgEvilMinions = document.createElement("section")
sectionImgEvilMinions.id = "imgEvilMinions"

body.appendChild(sectionImgEvilMinions)

var cont=0;
function addImg (){
    let minionImage = document.createElement("img")
    minionImage.setAttribute("src", "../dom/img/evil-minions.jpg")
    minionImage.setAttribute("alt" , "evil-minion")
    styleImg(minionImage)
    minionImage.style.marginRight = "2.5em"
    minionImage.style.marginTop = "2.5em"
    minionImage.style.marginLeft = "2.5em"

    minionImage.id = `evilMinion${cont}`
    cont++
    sectionImgEvilMinions.appendChild(minionImage)

    minionImage.onclick = function(){
        minionImage.remove()
    }

}