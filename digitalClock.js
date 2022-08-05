setInterval(() => {
    d=new Date;
    htime = d.getHours();
  
    mtime = d.getMinutes();
    stime = d.getSeconds();

    let hourse=document.getElementById("hr");
    let minutes=document.getElementById("min");
    let seconds=document.getElementById("sec");

    hourse.innerHTML=htime;
    minutes.innerHTML=mtime;
    seconds.innerHTML=stime;
    

},1000);