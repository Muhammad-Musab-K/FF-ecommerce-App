import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "../firebase/firebase.js";
import {  getData  ,sorting } from "../firebase/firebase.js"

let api_jacket = [
    {
        id: 1,
        item: "Men Fashion",
        category: "New Arrival",
        image: "../assest/jacket1.jpg",
        description: "Fabric: Denim jackets are primarily constructed from denim, a rugged and durable cotton fabric known for its diagonal ribbing or twill weave. Denim is available in various weights and colors, but the classic denim jacket is often made from medium to heavyweight denim in shades of indigo blue.Style: Denim jackets come in various styles, including the classic trucker jacket, which features a button-up front and chest pockets with flaps. Other common styles include bomber jackets, oversized designs, and cropped versions. Some denim jackets have a more vintage or distressed look, with fading, distressing, or patchwork details.",
        price: " RS 6570",
        title: "Trends in Denim"
    },
    {
        id: 2,
        item: "Men Fashion",
        category: "New Arrival",
        image: "../assest/jacket3.jpg",
        description: "Fabric: Denim jackets are primarily constructed from denim, a rugged and durable cotton fabric known for its diagonal ribbing or twill weave. Denim is available in various weights and colors, but the classic denim jacket is often made from medium to heavyweight denim in shades of indigo blue.Style: Denim jackets come in various styles, including the classic trucker jacket, which features a button-up front and chest pockets with flaps. Other common styles include bomber jackets, oversized designs, and cropped versions. Some denim jackets have a more vintage or distressed look, with fading, distressing, or patchwork details.",
        price: " RS 7570",
        title: "Denim Jacket Heaven"
    },
    {
        id: 3,
        item: "Men Fashion",
        category: "New Arrival",
        image: "../assest/jacket5.jpg",
        description: "Fabric: Denim jackets are primarily constructed from denim, a rugged and durable cotton fabric known for its diagonal ribbing or twill weave. Denim is available in various weights and colors, but the classic denim jacket is often made from medium to heavyweight denim in shades of indigo blue.Style: Denim jackets come in various styles, including the classic trucker jacket, which features a button-up front and chest pockets with flaps. Other common styles include bomber jackets, oversized designs, and cropped versions. Some denim jackets have a more vintage or distressed look, with fading, distressing, or patchwork details.",
        price: " RS 6970",
        title: " Distressed Denim Jackets"
    },
    {
        id: 4,
        item: "Men Fashion",
        category: "New Arrival",
        image: "../assest/jacket6.jpg",
        description: "Fabric: Denim jackets are primarily constructed from denim, a rugged and durable cotton fabric known for its diagonal ribbing or twill weave. Denim is available in various weights and colors, but the classic denim jacket is often made from medium to heavyweight denim in shades of indigo blue.Style: Denim jackets come in various styles, including the classic trucker jacket, which features a button-up front and chest pockets with flaps. Other common styles include bomber jackets, oversized designs, and cropped versions. Some denim jackets have a more vintage or distressed look, with fading, distressing, or patchwork details.",
        price: " RS 6170",
        title: "Effortlessly Stylish Denim "
    },
    {
        id: 5,
        item: "Men Fashion",
        category: "New Arrival",
        image: "../assest/jcket2.jpg",
        description: "Fabric: Denim jackets are primarily constructed from denim, a rugged and durable cotton fabric known for its diagonal ribbing or twill weave. Denim is available in various weights and colors, but the classic denim jacket is often made from medium to heavyweight denim in shades of indigo blue.Style: Denim jackets come in various styles, including the classic trucker jacket, which features a button-up front and chest pockets with flaps. Other common styles include bomber jackets, oversized designs, and cropped versions. Some denim jackets have a more vintage or distressed look, with fading, distressing, or patchwork details.",
        price: " RS 5570",
        title: "Your Perfect Jacket"
    },
    {
        id: 6,
        item: "Men Fashion",
        category: "New Arrival",
        image: "../assest/jcket4.jpg",
        description: "Fabric: Denim jackets are primarily constructed from denim, a rugged and durable cotton fabric known for its diagonal ribbing or twill weave. Denim is available in various weights and colors, but the classic denim jacket is often made from medium to heavyweight denim in shades of indigo blue.Style: Denim jackets come in various styles, including the classic trucker jacket, which features a button-up front and chest pockets with flaps. Other common styles include bomber jackets, oversized designs, and cropped versions. Some denim jackets have a more vintage or distressed look, with fading, distressing, or patchwork details.",
        price: " RS 8570",
        title: "Timeless Denim Jackets"
    }
];

let api_jeans = [
    {
        id: 7,
        item: "Men Fashion",
        category: "Featured Prodcucts",
        image: "../assest/jeans.jpg",
        description: "We source only the finest denim materials, carefully selecting fabrics known for their durability, comfort, and authentic texture. Our jeans are made from high-quality, tightly woven denim that resists wear and tear, ensuring they look great even after countless wears.",
        price: " RS 2300",
        title: "ThreadCrafted Jeans"
    },
    {
        id: 8,
        item: "Men Fashion",
        category: "Featured Prodcucts",
        image: "../assest/jeans2.jpg",
        description: "We source only the finest denim materials, carefully selecting fabrics known for their durability, comfort, and authentic texture. Our jeans are made from high-quality, tightly woven denim that resists wear and tear, ensuring they look great even after countless wears.",
        price: " RS 2300",
        title: "Indigo Edge"
    },
    {
        id: 9,
        item: "Men Fashion",
        category: "Featured Prodcucts",
        image: "../assest/jeans3.jpg",
        description: "We source only the finest denim materials, carefully selecting fabrics known for their durability, comfort, and authentic texture. Our jeans are made from high-quality, tightly woven denim that resists wear and tear, ensuring they look great even after countless wears.",
        price: " RS 3300",
        title: "Blue Chic"
    },
    {
        id: 10,
        item: "Men Fashion",
        category: "Featured Prodcucts",
        image: "../assest/jeans4.jpg",
        description: "We source only the finest denim materials, carefully selecting fabrics known for their durability, comfort, and authentic texture. Our jeans are made from high-quality, tightly woven denim that resists wear and tear, ensuring they look great even after countless wears.",
        price: " RS 2200",
        title: "Jeans Jive"
    },
    {
        id: 11,
        item: "Men Fashion",
        category: "Featured Prodcucts",
        image: "../assest/jeans5.jpg",
        description: "We source only the finest denim materials, carefully selecting fabrics known for their durability, comfort, and authentic texture. Our jeans are made from high-quality, tightly woven denim that resists wear and tear, ensuring they look great even after countless wears.",
        price: " RS 1300",
        title: "BlueHorizon Jeans"
    },
    {
        id: 12,
        item: "Men Fashion",
        category: "Featured Prodcucts",
        image: "../assest/jeans6.jpg",
        description: "We source only the finest denim materials, carefully selecting fabrics known for their durability, comfort, and authentic texture. Our jeans are made from high-quality, tightly woven denim that resists wear and tear, ensuring they look great even after countless wears.",
        price: " RS 2900",
        title: "Casual Couture"
    }
]

function count(){
let getCart = JSON.parse(localStorage.getItem("cart"))
let quantity = document.getElementById("quantity")
quantity.innerHTML = getCart.length 
}
// count()

//responsive navbar

let hamburger = document.querySelector(".hamburger")
let navBar = document.querySelector(".nav_bar")
hamburger.onclick = function(){
    navBar.classList.toggle("active")
    }



let api_sweats = [
    {
        id: 13,
        item: "Girls Softwear",
        category: "Sweat Shirts Style Collection",
        image: "../assest/sweat.jpg",
        description: "The vibrant colors of our sweatshirts and hoodies are designed to last. They're treated to resist fading and maintain their rich, true-to-life colors, ensuring you'll look great in them even after multiple washes.",
        price: " RS 1050",
        title: "Sweater Weather Staples"
    },
    {
        id: 14,
        item: "Girls Softwear",
        category: "Sweat Shirts Style Collection",
        image: "../assest/sweat2.jpg",
        description: "The vibrant colors of our sweatshirts and hoodies are designed to last. They're treated to resist fading and maintain their rich, true-to-life colors, ensuring you'll look great in them even after multiple washes.",
        price: " RS 1100",
        title: "Sweat Signature"
    },
    {
        id: 15,
        item: "Girls Softwear",
        category: "Sweat Shirts Style Collection",
        image: "../assest/sweat3.jpg",
        description: "The vibrant colors of our sweatshirts and hoodies are designed to last. They're treated to resist fading and maintain their rich, true-to-life colors, ensuring you'll look great in them even after multiple washes.",
        price: " RS 1300",
        title: "Fleece & Ease"
    },
    {
        id: 16,
        item: "Girls Softwear",
        category: "Sweat Shirts Style Collection",
        image: "../assest/swaet4.jpg",
        description: "The vibrant colors of our sweatshirts and hoodies are designed to last. They're treated to resist fading and maintain their rich, true-to-life colors, ensuring you'll look great in them even after multiple washes.",
        price: " RS 1200",
        title: "Chill Vibes Attire"
    },
    {
        id: 17,
        item: "Girls Softwear",
        category: "Sweat Shirts Style Collection",
        image: "../assest/swaet5.jpg",
        description: "The vibrant colors of our sweatshirts and hoodies are designed to last. They're treated to resist fading and maintain their rich, true-to-life colors, ensuring you'll look great in them even after multiple washes.",
        price: " RS 1300",
        title: "ComfyChic Classics"
    },
    {
        id: 18,
        item: "Girls Softwear",
        category: "Sweat Shirts Style Collection",
        image: "../assest/swaet4.jpg",
        description: "The vibrant colors of our sweatshirts and hoodies are designed to last. They're treated to resist fading and maintain their rich, true-to-life colors, ensuring you'll look great in them even after multiple washes.",
        price: " RS 1350",
        title: "Sweatshirt Sanctuary"
    }
]
localStorage

getJacket()
function getJacket() {
    for (let i = 0; i < api_jeans.length; i++) {


        let createCard = document.createElement("div")
        createCard.className = "card2"
        createCard.onclick = function () {
            window.location.href = "../ads/ads.html?productId=" + api_jeans[i].id
        }
        let img = document.createElement("img")
        img.src = api_jeans[i].image
        img.className = "image2"
        let titles = document.createElement("div")
        titles.className = "title"
        let title_p = document.createElement("p")
        title_p.append(api_jeans[i].title)
        let price = document.createElement("div")
        price.className = "price"
        let price_p = document.createElement("p")
        price_p.append(api_jeans[i].price)
        let span = document.createElement("span")
        span.innerHTML = "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>";




        let container = document.getElementById("container")
        container.append(createCard)
        createCard.append(img)
        createCard.append(titles)
        titles.append(title_p)
        createCard.append(price)
        price.append(price_p)
        price.append(span)

    }

}
getJeans()

function getJeans() {
    for (let i = 0; i < api_jacket.length; i++) {


        let createCard = document.createElement("div")
        createCard.className = "card"
        createCard.onclick = function () {
            window.location.href = "../ads/ads.html?productId=" + api_jacket[i].id
        }
        let img = document.createElement("img")
        img.src = api_jacket[i].image
        img.className = "image"
        let titles = document.createElement("div")
        titles.className = "title"
        let title_p = document.createElement("p")
        title_p.append(api_jacket[i].title)
        let price = document.createElement("div")
        price.className = "price"
        let price_p = document.createElement("p")
        price_p.append(api_jacket[i].price)
        let span = document.createElement("span")
        span.innerHTML = "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>";




        let container2 = document.getElementById("container2")
        container2.append(createCard)
        createCard.append(img)
        createCard.append(titles)
        titles.append(title_p)
        createCard.append(price)
        price.append(price_p)
        price.append(span)

    }
}

getSweat()

function getSweat() {
    for (let i = 0; i < api_sweats.length; i++) {


        let createCard = document.createElement("div")
        createCard.className = "card"
        createCard.onclick = function () {
            window.location.href = "../ads/ads.html?productId=" + api_sweats[i].id
        }
        let img = document.createElement("img")
        img.src = api_sweats[i].image
        img.className = "image"
        let titles = document.createElement("div")
        titles.className = "title"
        let title_p = document.createElement("p")
        title_p.append(api_sweats[i].title)
        let price = document.createElement("div")
        price.className = "price"
        let price_p = document.createElement("p")
        price_p.append(api_sweats[i].price)
        let span = document.createElement("span")
        span.innerHTML = "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>";




        let container3 = document.getElementById("container3")
        container3.append(createCard)
        createCard.append(img)
        createCard.append(titles)
        titles.append(title_p)
        createCard.append(price)
        price.append(price_p)
        price.append(span)

    }
}



onAuthStateChanged(auth, (user) => {
    if (user) {
        let e = document.getElementById("Name")
        e.innerHTML = user.email

        const uid = user.uid;
        

    } else {
        window.location.replace("../index.html")
    }
});



let logout = document.getElementById("logout")

logout.addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("successfully logout")
        window.location.replace("../index.html")
    }).catch((error) => {
        console.log(error)
    });
})

//My ads
window.getAds =async function(){
    
    let data= await  getData()
    
    
    for (let i = 0; i < data.length; i++) {
        let ad = data[i]

        let createCard = document.createElement("div")
        createCard.className = "card2"
        createCard.onclick = function () {
            window.location.href = "../MyAds/MyAds.html?productId=" + ad.id
        }
        let img = document.createElement("img")
        img.src = data[i].image
        img.className = "image2"
        let titles = document.createElement("div")
        titles.className = "title"
        let title_p = document.createElement("p")
        title_p.append(data[i].title)
        let price = document.createElement("div")
        price.className = "price"
        let price_p = document.createElement("p")
        price_p.append(data[i].cost)
        let span = document.createElement("span")
        span.innerHTML = "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>" +
            "<img class='star' src='../assest/star.png'>";
            let name = document.createElement("p")
            

        let container = document.getElementById("container4")
        container.innerHTML = ""
        container.append(createCard)
        createCard.append(img)
        createCard.append(titles)
        titles.append(title_p)
        createCard.append(price)
        price.append(price_p)
        price.append(span)
    }

}

getAds()