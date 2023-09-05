document.addEventListener('DOMContentLoaded', function() {

  //Script for Navigation
  const navToggle = document.getElementById('nav-toggle');
  const navbarLinks = document.getElementById('navbar-links');
  const toggleIcon = document.getElementById('toggle-icon');
  
  navToggle.addEventListener('click', function() {
    navbarLinks.classList.toggle('hidden');
  
    if (navbarLinks.classList.contains('hidden')) {
      toggleIcon.src = 'images/icon-hamburger.svg';
    } else {
      toggleIcon.src = 'images/icon-close-menu.svg';
    }
  });
  
  
  // Script for Tiny Modals
  let selected1 = document.querySelector('#bg-button1');
  let borderChange1 = document.querySelector('#selected-bg1');
  let modalContainer1 = document.getElementById('modal-container1');
  
  selected1.addEventListener('click', function(){
      borderChange1.style.borderColor = 'hsl(176, 50%, 47%)';
      borderChange1.style.borderWidth = '2px'
      modalContainer1.style.display = 'block';
  });

  let selected2 = document.querySelector('#bg-button2');
  let borderChange2 = document.querySelector('#selected-bg2');
  let modalContainer2 = document.getElementById('modal-container2');
  
  selected2.addEventListener('click', function(){
      borderChange2.style.borderColor = 'hsl(176, 50%, 47%)';
      borderChange2.style.borderWidth = '2px'
      modalContainer2.style.display = 'block';
  });

  let selected3 = document.querySelector('#bg-button3');
  let borderChange3 = document.querySelector('#selected-bg3');
  let modalContainer3 = document.getElementById('modal-container3');
  
  selected3.addEventListener('click', function(){
      borderChange3.style.borderColor = 'hsl(176, 50%, 47%)';
      borderChange3.style.borderWidth = '2px'
      modalContainer3.style.display = 'block';
  });


  //Script for Main modal
  let projectButton = document.querySelector('#project');
  let closeBtn = document.querySelector('#close-btn');
  let projectCard = document.querySelector('#project-card');
  
  projectButton.addEventListener('click', function(){
      projectCard.style.display = 'flex';
  });
  
  closeBtn.addEventListener('click', function(){
      projectCard.style.display = 'none';
  });

  //Script for Completion
  let completeButton = document.querySelector('#complete-button1');
  let thankYouModal = document.querySelector('#thank-you-modal');
  let clearButton = document.querySelector('#clear-button');

  completeButton.addEventListener('click', function(){
  thankYouModal.style.display = 'flex';
  projectCard.style.display = 'none';

  });

  clearButton.addEventListener('click', function(){
    thankYouModal.style.display = 'none';
  });

  //Script for bookmark
  let bookmark = document.querySelector('#bookmark');
  let bookmarkText = document.querySelector('#bookmark-text');

  bookmark.addEventListener('click', function(){
    bookmarkText.style.color = 'hsl(176, 72%, 28%)'
    bookmarkText.innerHTML = 'Bookmarked'
  })

});
