// JavaScript to toggle off-canvas menu visibility
document.getElementById('hamburger-menu').addEventListener('click', function() {
  document.getElementById('off-canvas-menu').classList.toggle('show');
});
// Slideshow Functionality for Partners Section
let partnerIndex = 0;
showPartners();

function showPartners() {
  let partners = document.getElementsByClassName("partners-slider")[0].getElementsByTagName("img");
  
  // Hide all partners
  for (let i = 0; i < partners.length; i++) {
    partners[i].style.display = "none";
  }
  
  partnerIndex++;
  if (partnerIndex > partners.length) {
    partnerIndex = 1;
  }
  
  partners[partnerIndex - 1].style.display = "block";
  setTimeout(showPartners, 3000); // Change partner every 3 seconds
}

// Function to hide the hero section when the off-canvas menu is open
function hideHeroOnMenuOpen() {
  const heroSection = document.querySelector('.hero-section');
  heroSection.style.visibility = 'hidden';  // Hides both the hero background and content
  heroSection.style.opacity = '0';          // Fades out the entire section
}

// Function to show the hero section when the off-canvas menu is closed
function showHeroOnMenuClose() {
  const heroSection = document.querySelector('.hero-section');
  heroSection.style.visibility = 'visible';  // Makes the hero section visible again
  heroSection.style.opacity = '1';           // Fades in the entire section
}


// Function to show the detailed information when 'Read More' is clicked
function showMore(id) {
    const details = document.getElementById(id);
    const button = details.previousElementSibling;

    // Display the detailed section
    details.style.display = "block";
    
    // Hide the 'Read More' button after clicking
    button.style.display = "none";
}

// Function to hide the detailed information when 'Show Less' is clicked
function hideDetails(id) {
    const details = document.getElementById(id);
    const button = details.previousElementSibling.previousElementSibling;

    // Hide the detailed section
    details.style.display = "none";
    
    // Show the 'Read More' button again
    button.style.display = "inline-block";
}


// Function to toggle between "Read More" and "Show Less"
function toggleDescription(button) {
    const fullDescription = button.previousElementSibling;
    
    // Check if the full description is visible
    if (fullDescription.style.display === "none" || fullDescription.style.display === "") {
        // Show the full description
        fullDescription.style.display = "block";
        button.textContent = "Show Less"; // Change button text
    } else {
        // Hide the full description
        fullDescription.style.display = "none";
        button.textContent = "Read More"; // Change button text back
    }
}


// Function to toggle between "Read More" and "Show Less"
function toggleDescription(button) {
    const fullDescription = button.previousElementSibling;
    
    // Check if the full description is visible
    if (fullDescription.style.display === "none" || fullDescription.style.display === "") {
        // Show the full description
        fullDescription.style.display = "block";
        button.textContent = "Show Less"; // Change button text
    } else {
        // Hide the full description
        fullDescription.style.display = "none";
        button.textContent = "Read More"; // Change button text back
    }
}


// script.js
document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-bar').value;
    if (searchQuery) {
        alert('You searched for: ' + searchQuery);
    } else {
        alert('Please enter a search term.');
    }
});
