
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, setDoc, getDoc, doc, query,where, orderBy } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDexEmB6FIGlspVREYlsVdI14OP5V59BC4",
  authDomain: "fashion-fusion-64db8.firebaseapp.com",
  projectId: "fashion-fusion-64db8",
  storageBucket: "fashion-fusion-64db8.appspot.com",
  messagingSenderId: "629709289755",
  appId: "1:629709289755:web:e1ccc97ef49cac3a40fbbe",
  measurementId: "G-GBHK2F5KW9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage();


//Ad Posting
async function postAd(ad) {
  const storageRef = ref(storage, `ads/${ad.image.name}`);

  await uploadBytes(storageRef, ad.image)
  const url = await getDownloadURL(storageRef)

  ad.image = url

  await addDoc(collection(db, "ads"), ad)
  alert('Data added successfully!')

}

//Sign Up 
function register(user) {
  const { name, phone, email, password } = user
  createUserWithEmailAndPassword(auth, email, password, name, phone)
    .then(async (userCredential) => {
      let userId = userCredential.user.uid
      try {
        console.log("id" + userCredential.user.uid)
        const docRef = await setDoc(doc(db, "users", userId), {
          name,
          phone,
          email,
          userId
        });
        alert("Account successfully created")
        window.location.assign('../index.html')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
}

//Login User
function onlogin(user) {
  const { email, password } = user
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.users
      window.location.assign("./homepage/home.html")
      let btn = document.getElementById("Name")
      btn.innerHTML = user.uid

    })
    .catch((error) => {
      console.log(error)
    });
}


const q = query(collection(db, "ads"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
 
  console.log(doc.id, " => ", doc.data());
});


// get ads from database,firestore
async function getData() {

  const querySnapshot = await getDocs(collection(db, "ads"));
  const ads = []
  querySnapshot.forEach((doc) => {
    const ad = { id: doc.id, ...doc.data() }
    ads.push(ad)

  });

  return ads
}

//sorting of data in asending and desending
async function sorting(sortBy) {
  const querySnapshot = await getDocs(query((db, "ads"), orderBy('amount', sortBy)));
  const ads = []
  querySnapshot.forEach((doc) => {
    const ad = { id: doc.id, ...doc.data() }
    ads.push(ad)

  });

  return ads
}

//called single ad to click on the ad
async function getSingleAd(adId) {

  const docRef = doc(db, "ads", adId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const ad = docSnap.data()
    return ad
  } else {

    console.log("No such document!");
  }
}

//get current user from by the help of uid 
async function getUser(uid) {
  console.log('uid', uid)
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const user = docSnap.data()

    return user
  } else {
    
    console.log("No such document!");
  }
}


//facebook login 
async function fbLogin(){
  const provider =await new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider)
  console.log(result)
}


export {
  register, onlogin, auth, postAd, getData, getUser, sorting, getSingleAd,fbLogin
}

//jis bhi function k ander async kaam ho rha ho rha hoon tw uske bahr bhi
//   use async function bnaenge or andr await
// or agr hm await lgaenge tw wo data return krega wrna wo promise return krega



