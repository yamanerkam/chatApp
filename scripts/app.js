


if(!localStorage.getItem("name")){
    localStorage.setItem("name",prompt("name"))
}

if(localStorage.getItem("name")==""){
    localStorage.setItem("name","anon")
}

var namme = localStorage.getItem("name")
console.log(namme)

const generalRoom = document.getElementById("general")
const gamingRoom = document.getElementById("gaming")
const musicRoom = document.getElementById("music")
const ninjasRoom = document.getElementById("ninjas")
const updateMssg = document.querySelector(".update-mssg")

const chatRooms = document.querySelector(".chat-rooms")

document.addEventListener("click",(e)=>{
    e.preventDefault()
   // console.log(e.target.id)
   // if(e.target.id=="general"){
     //   newChat1.roomUpdate("general10")
       // newChat1.getChats((data)=>{
         //   console.log(data)
        // })
    //}

})

const send = document.getElementById("send")
const messagee = document.getElementById("message")
const chatList = document.querySelector(".chat-list")
const nameChange = document.getElementById("nameChange")
const namee = document.getElementById("name")



chatRooms.addEventListener("click",(e)=>{
    console.log(e.target.id)
    newChatUI.clear()
    newChat1.roomUpdate(`${e.target.id}1000`)
    newChat1.getChats((data)=>{
        newChatUI.render(data)
     })
})


nameChange.addEventListener("click",(e)=>{
    e.preventDefault()

    if(namee.value==""){
        alert("invalid name")
    }else{
        newChat1.userNameUpdate(namee.value)
    localStorage.setItem("name",namee.value)
    updateMssg.textContent=`your name has been changed to ${namee.value}`
    updateMssg.style.visibility = "visible";
    setTimeout(() => {
        updateMssg.style.visibility = "hidden";
    }, 3000);
    namee.value=""
    }


    

})

send.addEventListener("click",(e)=>{
    e.preventDefault()

    if(messagee.value==""){
        alert("invalid message")
    }else{
        console.log("it works")
        console.log(messagee.value)
        newChat1.addChat(messagee.value)
        messagee.value=""
    }

    
    
})





const newChat1 = new chat("general1000","kam")
const newChatUI = new chatUI(chatList)
newChat1.userNameUpdate(namme)

newChat1.getChats((data)=>{
        newChatUI.render(data)
     })
