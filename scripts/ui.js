

 class chatUI{
constructor(list){
this.list=list
}

clear(){
  this.list.innerHTML=""
}
render(data){

    const when = dateFns.distanceInWordsToNow(
        data.time.toDate(),
        { addSuffix:true }
      );    
      const html = `
    <li class="list-group-item">
      <span class="username">${data.name}</span>
      <span class="message">${data.message}</span>
      <div class="time">${when}</span>
    </li>
  `;
  this.list.innerHTML += html;


}


}