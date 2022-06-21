let introText= document.querySelector('.introText');
let introTextContent= introText.textContent;
let splitIntroTextContent= introTextContent.split('')
 introText.textContent=''
for(let i=0; i<splitIntroTextContent.length; i++){
    introText.innerHTML+='<span>'+splitIntroTextContent[i]+'</span>'
}
let spanNum=0
let timer=setInterval(popUp,50);
function popUp(){
    let span=introText.querySelectorAll('span')[spanNum];
    span.classList.add('introAnimation');
    spanNum++
    if(spanNum===splitIntroTextContent.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer=null
}
