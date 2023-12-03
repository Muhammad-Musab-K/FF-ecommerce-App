import { register } from "../firebase/firebase.js"
// function Deatil_users(){
//     if(!localStorage.getItem("users")){
//         localStorage.setItem("users" , "[]")
//     }
// }




 window.signup = function(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let password = document.getElementById("pass")
    let Cpass = document.getElementById("Cpass")

    if( name.value.length < 3  ){
        swal ( "Oops" ,  "name is too short!" ,  "error" )
        return
    }
    if( phone.value.length < 10  ){
        swal ( "Oops" ,  "invalid phone No!" ,  "error" )
        return
    }
    if( password.value.length < 6  ){
        swal ( "Oops" ,  "Password is too short!" ,  "error" )
        return
    }
    if( Cpass.value !== password.value  ){
        swal ( "Oops" ,  "Password is not match!" ,  "error" )
        return
    }
   

         const user = {
            name:name.value,
            phone:phone.value,
            email:email.value,
            password:password.value
    }
    register(user)
 
}
