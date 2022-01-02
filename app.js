'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() { 
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "Light-theme"){
        this.textContent = "Modo escuro";
    }
    else{
        this.textContent = "Modo Claro";
    }
    console.log('current class name: ' + className);
});