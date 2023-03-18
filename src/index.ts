import "./pages/index";
import "./pages/chat";
import "./router";
import firebase from "firebase";

const API_BASE_URL = "http://localhost:3000"

const app = firebase.initializeApp({
    apiKey: 'em7EXLr1tZGVTkTWOHMGXkIA26uyxM7LVhD5bAI2',
    authDomain: 'apx-dwf-m6-de209.firebaseapp.com',
    databaseURL: 'https://apx-dwf-m6-de209-default-rtdb.firebaseio.com',
    //project: 'apx-dwf-m6-de209',
});


const database = firebase.database();



function conectarAlChatroom() {
    fetch(API_BASE_URL+"/chatroom", {
        method: "post",
    }).then((res)=>{
        return res.json();
    }).then((data) =>{
       const chatroomsRef = database.ref("/chatrooms/"+ data.id);


       chatroomsRef.on("value", (snapshot)=>{
       const valor = snapshot.val();
       document.querySelector(".id").innerHTML = data.id; 
       document.querySelector(".root").innerHTML = JSON.stringify(valor);  
      });
        
    });
}

(function(){
    const button = document.querySelector(".conectar")
    //button.addEventListener("click",conectarAlChatroom);  
})();