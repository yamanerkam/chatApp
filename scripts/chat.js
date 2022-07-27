const button = document.getElementById("xxx")




class chat {
constructor(roomName,userName){
    this.roomName=roomName
    this.userName=userName
    this.chats=db.collection('chats')
    this.unsub;
}

async addChat(message){
    const now =  new Date()
    const newMes={
       
        time : firebase.firestore.Timestamp.fromDate(now),
        message:message,
        room:this.roomName,
        name:this.userName
        

    } 

    this.chats.add(newMes).then((snap)=>{
      }).catch((err1)=>{
        console.log(err1)
      })

      this.chats.get().then((snapshot)=>{
        //
        
        //console.log(snapshot.docs[2].data())
      snapshot.docs.forEach(element => {
        var ele = element.data()
      });
      
      
      
      
      }).catch((err)=>{
      console.log(err)
      })





}

userNameUpdate(newName) {
    console.log(this.userName)
    this.userName=newName
    console.log(this.userName)
}




getChats(callBack){
    this.unsub = this.chats
    .where("room","==",this.roomName)
    .orderBy("time")
    .onSnapshot(snaps=>{

        snaps.docChanges().forEach(elemt => {
        const change = elemt.doc
        console.log(elemt.doc.data(),elemt.doc.id)
            //console.log(change.id)
        if(elemt.type==="added"){
            
           callBack(elemt.doc.data())

           //this.chats.doc(change.id).delete().then(()=>{console.log("deleted")})
        }
        
       });


       

      })
 }

 roomUpdate(roomNamme){
    this.roomName=roomNamme
    console.log(this.roomName)
   if(this.unsub){
    this.unsub()
    }
    
    }

}



    
    



