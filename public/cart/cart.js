
let hamburger = document.querySelector(".hamburger")
let navBar = document.querySelector(".nav_bar")
hamburger.onclick = function () {
    navBar.classList.toggle("active")
}



let container = document.getElementById("container")
table()
function table() {
    let container = document.getElementById("container")
    let getCart = JSON.parse(localStorage.getItem("cart"))
    for (let i = 0; i < getCart.length; i++) {

        let tr = document.createElement("tr")
        tr.className = 'Head_tr'
        let td1 = document.createElement('td')
        td1.innerHTML = `<img class="minus_image" id="${getCart[i].id}" onclick="del(event)" src="../assest/remove.png" height="15px" width="15px" alt="">`
        let td2 = document.createElement('td')
        td2.innerHTML = ` <img class="image" src="${getCart[i].image}" alt=""></img>`
        let td3 = document.createElement('td')
        td3.innerHTML = `<p>${getCart[i].title}</p>`
        let td4 = document.createElement('td')
        td4.innerHTML = `<p>${getCart[i].price}</p>`
        let td5 = document.createElement('td')
        let input = document.createElement('input');
        input.value = 1;
        input.id = `quantt_${i}`; // Add a unique id for each input
        input.className = "quantt";
        input.type = "number";

        let td6 = document.createElement('td');
        td6.innerHTML = `<p>${getCart[i].price}</p>`; // Initialize with the product price
        td6.className = "amount"

        input.addEventListener('input', function () {
            // Calculate the subtotal when the input value changes
            const quantity = parseInt(input.value);
            const price = getCart[i].price;
            const subTotal = quantity * price;
            td6.innerHTML = `<p>${subTotal}</p>`;
        })
            ;

        let table = document.getElementById("table")
        table.append(tr)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tr.append(td5)
        tr.append(td6)
        td5.append(input)
    }
    let sum = 0
    let table = document.getElementById("table")
    for (let i = 1; i < table.rows.length; i++) {
        sum = sum + parseFloat(table.rows[i].cells[5].innerText);
    }
    console.log(sum);
    let tr = document.createElement('tr')
    tr.className = 'Head_tr'
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    td1.innerHTML = ""
    td2.innerHTML = ""
    td3.innerHTML = ""
    td4.innerHTML = ""
    td5.innerHTML = "Total"
    td6.innerText = sum
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    table.append(tr)
}



window.del = function (event) {
    let getCart = JSON.parse(localStorage.getItem("cart"));
    let pop = event.target.parentElement.parentElement
    pop.remove()
    console.log(getCart);
    let id = event.target.id;

    for (let i = 0; i < getCart.length; i++) {
        if (id == getCart[i].id) {
            // Use splice to remove the item from the array
            getCart.splice(i, 1);
            break; // Exit the loop once the item is found and removed
        }
    }
    // Update the cart in localStorage with the modified array
    localStorage.setItem("cart", JSON.stringify(getCart));
    console.log(getCart);

}

//quantity of cart







//ek h client side searching or ek h server side searching for loop chla kr if ki condition se jo data chahiye wo mil jata h ue client side searching kehte hen


//data fetching by searching aproaches
//load more
// infinaite scroll
// pagination

//server side searching menas k aap kch search krte ho tw wo database se utha kr data laakr deta h
//server side searchinf banificial h q k client side searching means mene agr 1 lakh me se 10 data mngaya hua tw wo un 10 me se hi search kr k dega jb k server side poora data base ko chahnega phr data lakr dega

//MongoDB me aap elastic searching kr skte ho or firebase me ye option nhi tha usme firebase dusre link provide krta h

//server site sorting