import { onlogin  , fbLogin} from "./firebase/firebase.js"




window.logIn = function(){
  
    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value

    const user = {email , password}
    onlogin(user)
}

window.facebook = function (){
    fbLogin()
}