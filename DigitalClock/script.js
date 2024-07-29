

const hour=document.querySelector("[hour-factor]");
const minute=document.querySelector("[minute-factor]");
const second=document.querySelector("[second-factor]");

function time(){
    var d=new Date();
    var s=d.getSeconds();
    var m=d.getMinutes();
    var h=d.getHours();

    hour.innerHTML=`${h<10 ? '0' :''}${h} H`;
    minute.innerText=`${m<10 ? '0' : ''}${m} M`;
//    minute.innerText = `${m < 10 ? '0' : ''}${m} M`;
    second.innerText=`${s<10 ? '0' : ''}${s} S`;

  // setTimeout(time,1000);

}

setInterval(time,1000);

