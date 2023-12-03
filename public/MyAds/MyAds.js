import { getUser, getSingleAd } from "../firebase/firebase.js"

async function getDetails() {

    let adId = window.location.search.split("=")[1]

    let ad = await getSingleAd(adId)
    let user = await getUser(ad.uid)
    console.log("user" + user)
    let card = ` <div class="image"><img class="img_Details" id="deatils_product_image" src="${ad.image}" alt="">
    </div>
    <div class="details_section">
        <h1 class="title">${ad.title}</h1>
        <br><br>
        <h3 class="item">${user.name}</h3>
        <br>
        <h1 class="price">${ad.cost}</h1>
        <br>
       
        <br><br>
        <h1 class="detail">Product Details</h1>
        <br>
        <p class="descrip">${ad.decription}</p>
    </div> `

    let container = document.getElementById("container")
    container.innerHTML = card
}

getDetails()



let hamburger = document.querySelector(".hamburger")
let navBar = document.querySelector(".nav_bar")
hamburger.onclick = function () {
    navBar.classList.toggle("active")
}


