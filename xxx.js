const newChat2 = new chat("gaming","b")
    newChat2.addChat("fuck")
    newChat2.getChats((data)=>{
       console.log(data)
    })


    setTimeout(()=>{
        newChat2.roomUpdate("general")
        newChat2.getChats((data)=>{
        console.log(data)
     })
    },3000)
