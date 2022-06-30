 var introText= document.querySelector('.intro-text');
 var content= introText.textContent;
 var split= content.split("")
introText.textContent=""
 for(let i=0;i<split.length;i++){
 introText.innerHTML+="<span>"+split[i]+"</span>"
 }
 
let counter=0;
 let timer=setInterval(tick,50);

function tick(){
    const span= introText.querySelectorAll("span")[counter];
    span.classList.add('fade');
    counter++;

    if(counter===split.length){
        complete();
        return;
    }

}

function complete(){
    clearInterval(timer);
    timer=null;
}