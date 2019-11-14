for(let i = 0; < 1024; i++){
    document.querySelector(".app").innerHTML += '<div></div>';
}
document.body.addEventListener('click', event => {
   event.target.style.backgroundColor = '#fff';
   event.target.style.border = '1 px solid #000';
})
document.addEventListener('keydown', event => {
    if(event.key === 'e'){
        document.querySelector(".app").style.backgroundColor = '#30f';
    }
    if(event.key === 'i'){
        document.querySelector(".app").style.backgroundColor = '#60f';
    }
    if(event.key === 'i'){
        document.querySelector(".app").style.backgroundColor = '#90f';
    }
    if(event.key === 'i'){
        document.querySelector(".app").style.backgroundColor = '#a0f';
    }
    if(event.key === 'i'){
        document.querySelector(".app").style.backgroundColor = '#o0f'
    }
})
document.querySelector('clear').addEventListener('click', event =>{
   window.location = window.location;
})
document.body.addEventListener('click', event =>{
  if(event.ctrlKey){
      event.target.innerText = document.querySelector('#text').Value;
      event.target.style.backgroundColor='rgb(0,'+ blue + ',0)';
  }
})