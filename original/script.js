// Array of recipe data (example)
const recipes = [
  { 
    title: "Vegan Chickpea Salad", 
    image: "", 
    link: "" 
  },
  { 
    title: "Vegan Buddha Bowl", 
    image: "", 
    link: "" 
  },
  // Add more recipes here by following the same structure
];

// Presentation Slider Data (featured recipes slider, you can modify these or add more)
const slides = [
  { 
    title: "Featured Recipe 1", 
    description: "Delicious and nutritious!", 
    image: "https://via.placeholder.com/600x200", 
    link: "#" // Replace with actual recipe link
  },
  { 
    title: "Featured Recipe 2", 
    description: "Healthy vegan delight.", 
    image: "https://via.placeholder.com/600x200", 
    link: "#" // Replace with actual recipe link
  },
  { 
    title: "Featured Recipe 3", 
    description: "Perfect for a light meal!", 
    image: "https://via.placeholder.com/600x200", 
    link: "#" // Replace with actual recipe link
  }
];

// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggle-dark-mode');

// Event listener for the dark mode toggle button
toggleDarkMode.addEventListener('change', () => {
  // Toggle the 'dark-mode' class on the body based on the checkbox state
  document.body.classList.toggle('dark-mode', toggleDarkMode.checked);
});

// Display Recipes - The main function that renders the recipe list
const recipeContainer = document.querySelector('.recipe-container'); // Container for the recipes
const pageInfo = document.getElementById('page-info'); // Page information text (e.g., "Page 1 of 5")
let currentPage = 1; // Initialize the current page
let recipesPerPage = window.innerWidth >= 768 ? 15 : 8; // Determine number of recipes per page based on screen size

// Function to display the recipes
function displayRecipes() {
  recipeContainer.innerHTML = ''; // Clear the container before displaying new recipes

  // Calculate the start and end index for the recipes to display on the current page
  const start = (currentPage - 1) * recipesPerPage;
  const end = start + recipesPerPage;

  // Slice the recipes array to get only the recipes to show on this page
  const recipesToShow = recipes.slice(start, end);

  // Loop through the recipes and create the recipe boxes
  recipesToShow.forEach(recipe => {
    const recipeBox = document.createElement('div'); // Create a new div element for each recipe box
    recipeBox.classList.add('recipe-box'); // Add a class to style the recipe box

    // Insert the recipe's image and title, and make it clickable, with the style matching your previous container
    recipeBox.innerHTML = `
      <a href="${recipe.link}" class="recipe-link">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
      </a>
    `;
    recipeContainer.appendChild(recipeBox); // Append the recipe box to the container
  });

  // Update the page info text (e.g., "Page 1 of 5")
  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(recipes.length / recipesPerPage)}`;
}

// Call the function to display recipes when the page loads
displayRecipes();

// Optional: Pagination function to change pages (next/previous)
function changePage(offset) {
  const totalPages = Math.ceil(recipes.length / recipesPerPage); // Calculate the total number of pages
  currentPage = Math.max(1, Math.min(currentPage + offset, totalPages)); // Update the current page with the offset, ensuring it stays within bounds
  displayRecipes(); // Re-render the recipes based on the new page
}

// Example of how to show the slider with featured recipes
// (You would need to add this functionality if you're implementing a slider for featured recipes)
function showSlide() {
  const sliderContainer = document.querySelector('.slider-container'); // Where your slider will go
  sliderContainer.innerHTML = ''; // Clear previous content if any

  slides.forEach(slide => {
    const slideItem = document.createElement('div'); // Create a div for each slide
    slideItem.classList.add('slide-item'); // Add a class for styling

    slideItem.innerHTML = `
      <a href="${slide.link}" class="slide-link">
        <img src="${slide.image}" alt="${slide.title}" class="slide-image">
        <h3>${slide.title}</h3>
        <p>${slide.description}</p>
      </a>
    `;
    sliderContainer.appendChild(slideItem); // Append each slide to the slider container
  });
}

// Call the showSlide function to render the featured recipes slider
showSlide();
