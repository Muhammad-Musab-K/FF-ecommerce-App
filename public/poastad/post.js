import { postAd , auth } from "../firebase/firebase.js"

window.sub = function () {
    let input = document.getElementsByTagName("input")
    const uid = auth.currentUser.uid //Authentication
    let image = input[0].files[0]
    let title = input[1].value
    let decription = input[2].value
    let cost = input[3].value
    let createAd = new Date()
    let ad = {
        image,
        title,
        decription,
        cost,
        uid,
        createAd
    }
    console.log(ad)

    postAd(ad)

}

let hamburger = document.querySelector(".hamburger")
let navBar = document.querySelector(".nav_bar")
hamburger.onclick = function(){
    navBar.classList.toggle("active")
    }




