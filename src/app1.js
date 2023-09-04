// Script for Backing Toggle
let selected = document.querySelector('#bg-button');
let borderChange = document.querySelector('#selected-bg');
let modalContainer = document.getElementById('modal-container');

selected.addEventListener('click', function(){
    borderChange.style.borderColor = 'hsl(176, 50%, 47%)';
    borderChange.style.borderWidth = '2px'
    modalContainer.style.display = 'block';
});

window.addEventListener('click', function(e){
   
    if (e.target === modalContainer ) {
        modalContainer.style.display = 'none';
    }
});

let projectButton = document.querySelector('#project');
let closeBtn = document.querySelector('#close-btn');
let projectCard = document.querySelector('#project-card');

projectButton.addEventListener('click', function(){
    projectCard.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    projectCard.style.display = 'none';
});