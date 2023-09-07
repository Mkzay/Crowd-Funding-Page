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
// Function to deselect all buttons and hide all modal containers
// Function to deselect all buttons and hide all modal containers
function deselectAll() {
  for (let i = 1; i <= 3; i++) {
    let borderChange = document.querySelector(`#selected-bg${i}`);
    let modalContainer = document.getElementById(`modal-container${i}`);
    
    borderChange.style.borderColor = '';
    borderChange.style.borderWidth = '';
    modalContainer.classList.add('custom-hidden');
  }
}

// Loop through buttons with IDs like bg-button1, bg-button2, bg-button3
for (let i = 1; i <= 3; i++) {
  let selectedButton = document.querySelector(`#bg-button${i}`);
  let borderChange = document.querySelector(`#selected-bg${i}`);
  let modalContainer = document.getElementById(`modal-container${i}`);
  
  selectedButton.addEventListener('click', function () {
    // Deselect all buttons and hide all modal containers
    deselectAll();
    
    // Set the new current button and modal
    borderChange.style.borderColor = 'hsl(176, 50%, 47%)';
    borderChange.style.borderWidth = '2px';
    modalContainer.classList.remove('custom-hidden');
  });
}



// Script for Main modal
let projectButton = document.querySelector('#project');
let closeBtn = document.querySelector('#close-btn');
let projectCard = document.querySelector('#project-card');

function openModal() {
  projectCard.classList.remove('custom-hidden');
}

function closeModal() {
  projectCard.classList.add('custom-hidden');
}

projectButton.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);


  //Script for Completion
  let completeButton1 = document.querySelector('#complete-button1');
  let thankYouModal = document.querySelector('#thank-you-modal');
  let clearButton = document.querySelector('#clear-button');

  completeButton1.addEventListener('click', function(){
    thankYouModal.classList.remove('custom-hidden');
  });

  clearButton.addEventListener('click', function(){
    thankYouModal.classList.add('custom-hidden');
  });

  clearButton.addEventListener('click', closeModal);

  let completeButton2 = document.querySelector('#complete-button2');

  completeButton2.addEventListener('click', function(){
    thankYouModal.classList.remove('custom-hidden');
  });

  let completeButton3 = document.querySelector('#complete-button3');

  completeButton3.addEventListener('click', function(){
    thankYouModal.classList.remove('custom-hidden');
  });

  //Script for bookmark
  let bookmark = document.querySelector('#bookmark');
  let bookmarkText = document.querySelector('#bookmark-text');

  bookmark.addEventListener('click', function(){
    bookmarkText.style.color = 'hsl(176, 72%, 28%)'
    bookmarkText.innerHTML = 'Bookmarked'
  })

  //Script for Rewards Button
 // Function to scroll to a specific section in the modal
function scrollToSection() {
  // Specify the ID of the section you want to scroll to
  var sectionIdToScrollTo = "targetSection";

  // Get the target section element by its ID
  var targetSection = document.getElementById('selected-bg2');

  // Check if the target section exists before scrolling
  if (targetSection) {
    // Use scrollIntoView to smoothly scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Target section not found!");
  }
}

// Event listener for the button
let rewardButton1 = document.querySelector('#reward-button1');

rewardButton1.addEventListener('click', function(){
  projectCard.classList.remove('custom-hidden');

  // Call the scrollToSection function here to scroll to the specified section
  scrollToSection();
});

function scrollToSection() {
  // Specify the ID of the section you want to scroll to
  var sectionIdToScrollTo = "targetSection";

  // Get the target section element by its ID
  var targetSection = document.getElementById('selected-bg3');

  // Check if the target section exists before scrolling
  if (targetSection) {
    // Use scrollIntoView to smoothly scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Target section not found!");
  }
}

// Event listener for the button
let rewardButton2 = document.querySelector('#reward-button2');

rewardButton2.addEventListener('click', function(){
  projectCard.classList.remove('custom-hidden');

  // Call the scrollToSection function here to scroll to the specified section
  scrollToSection();
});


});
