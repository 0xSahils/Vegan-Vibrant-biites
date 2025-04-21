document.addEventListener("DOMContentLoaded", function () {
  const recipes = [
    {
      title: "Vegan Chickpea Salad",
      image: "images/chickpea-salad.jpg",
      link: "/recipes/Vegan_Chickpea_SaladRecipe.html",
    },
    {
      title: "Vegan Buddha Bowl",
      image: "images/vegan-buddha-bowl.jpg",
      link: "/recipes/Vegan_Buddha_Bowl.html",
    },
    {
      title: "Lentil Soup",
      image: "images/lentil-soup.jpg",
      link: "/recipes/Lentil_Soup.html",
    },
    {
      title: "Vegan Tofu Stir Fry",
      image: "images/tofu-stir-fry.jpg",
      link: "/recipes/Vegan_Tofu_Stir_Fry.html",
    },
    {
      title: "Quinoa and Black Bean Salad",
      image: "images/quinoa-black-bean-salad.jpg",
      link: "/recipes/Quinoa_and_Black_Bean_Salad.html",
    },
    {
      title: "Vegan Pancakes",
      image: "images/vegan-pancake-stack.jpg",
      link: "/recipes/Vegan_Pancakes.html",
    },
    {
      title: "Avocado Toast",
      image: "images/avocado-toast.jpg",
      link: "/recipes/Avocado_Toast.html",
    },
    {
      title: "Vegan Smoothie Bowl",
      image: "images/vegan-smoothie-bowl.jpg",
      link: "/recipes/Vegan_Smoothie_Bowl.html",
    },
    {
      title: "Stuffed Bell Peppers",
      image: "images/stuffed-bell-peppers.jpg",
      link: "/recipes/Stuffed_Bell_Peppers.html",
    },
    {
      title: "Vegan Mac and Cheese",
      image: "images/vegan-mac-and-cheese.jpg",
      link: "/recipes/Vegan_Mac_and_Cheese.html",
    },
    {
      title: "Cauliflower Buffalo Wings",
      image: "images/cauliflower-buffalo-wings.jpg",
      link: "/recipes/Cauliflower_Buffalo_Wings.html",
    },
    {
      title: "Vegan Sushi Rolls",
      image: "images/vegan-sushi.jpg",
      link: "/recipes/Vegan_Sushi_Rolls.html",
    },
    {
      title: "Vegan Chili",
      image: "images/vegan-chili.jpg",
      link: "/recipes/Vegan_Chili.html",
    },
    {
      title: "Vegan Shepherds Pie",
      image: "images/vegan-shepherds-pie.jpg",
      link: "/recipes/Vegan_Shepherds_Pie.html",
    },
    {
      title: "Vegan Burrito Bowl",
      image: "images/vegan-burrito-bowl.jpg",
      link: "/recipes/Vegan_Burrito_Bowl.html",
    },
    {
      title: "Sweet Potato and Kale Salad",
      image: "images/sweet-potato-and-kale-salad.jpg",
      link: "/recipes/Sweet_Potato_and_Kale_Salad.html",
    },
    {
      title: "Vegan Brownies",
      image: "images/vegan-brownies.jpg",
      link: "/recipes/Vegan_Brownies.html",
    },
    {
      title: "Zucchini Noodles with Pesto",
      image: "images/zucchini-noodle-pesto.jpg",
      link: "/recipes/Zucchini_Noodles_with_Pesto.html",
    },
    {
      title: "Vegan Pizza",
      image: "images/vegan-pizza.jpg",
      link: "/recipes/Vegan_Pizza.html",
    },
    {
      title: "Vegan Chocolate Cake",
      image: "images/vegan-chocolate-cake.jpg",
      link: "/recipes/Vegan_Chocolate_Cake.html",
    },
    {
      title: "Vegan Ice Cream",
      image: "images/vegan-ice-cream.jpg",
      link: "/recipes/Vegan_Ice_Cream.html",
    },
    {
      title: "Spicy Thai Noodle Salad",
      image: "images/spicy-thai-noodle-salad.jpg",
      link: "/recipes/Spicy_Thai_Noodle_Salad.html",
    },
    {
      title: "Vegan Pad Thai",
      image: "images/vegan-pad-thai.jpg",
      link: "/recipes/Vegan_Pad_Thai.html",
    },
    {
      title: "Vegan Lasagna",
      image: "images/vegan-lasagna.jpg",
      link: "/recipes/Vegan_Lasagna.html",
    },
    {
      title: "Vegan Meatballs",
      image: "images/vegan-meatballs.jpg",
      link: "/recipes/Vegan_Meatballs.html",
    },
    {
      title: "Vegan Falafel Wrap",
      image: "images/vegan-falafel-wrap.jpg",
      link: "/recipes/Vegan_Falafel_Wrap.html",
    },
    {
      title: "Spinach and Mushroom Quiche",
      image: "images/spinach-mushroom-quiche.jpg",
      link: "/recipes/Spinach_and_Mushroom_Quiche.html",
    },
    {
      title: "Vegan Caesar Salad",
      image: "images/vegan-caesar-salad.jpg",
      link: "/recipes/Vegan_Caesar_Salad.html",
    },
    {
      title: "Vegan Eggplant Parmesan",
      image: "images/vegan-eggplant-parmesan.jpg",
      link: "/recipes/Vegan_Eggplant_Parmesan.html",
    },
    {
      title: "Vegan Pancake Stack",
      image: "images/vegan-pancake-stack.jpg",
      link: "/recipes/Vegan_Pancake_Stack.html",
    },
    {
      title: "Grilled Portobello Mushroom Burgers",
      image: "images/grilled-portobello-mushroom-burger.jpg",
      link: "/recipes/Grilled_Portobello_Mushroom_Burgers.html",
    },
    {
      title: "Vegan Ramen Bowl",
      image: "images/vegan-ramen-bowl.jpg",
      link: "/recipes/Vegan_Ramen_Bowl.html",
    },
    {
      title: "Jackfruit Pulled Pork Sandwiches",
      image: "images/jackfruit-pulled-pork-sandwich.jpg",
      link: "/recipes/Jackfruit_Pulled_Pork_Sandwiches.html",
    },
    {
      title: "Vegan Curry with Rice",
      image: "images/vegan-curry-with-rice.jpg",
      link: "/recipes/Vegan_Curry_with_Rice.html",
    },
    {
      title: "Vegan BBQ Tacos",
      image: "images/vegan-bbq-tacos.jpg",
      link: "/recipes/Vegan_BBQ_Tacos.html",
    },
    {
      title: "Chickpea and Spinach Stew",
      image: "images/chickpea-spinach-stew.jpg",
      link: "/recipes/Chickpea_and_Spinach_Stew.html",
    },
    {
      title: "Vegan Grilled Cheese Sandwich",
      image: "images/vegan-grilled-cheese.jpg",
      link: "/recipes/Vegan_Grilled_Cheese_Sandwich.html",
    },
  ];

  const recipesPerPage = 6;
  let currentPage = 1;
  const recipeContainer = document.querySelector(".recipe-container");
  const pageInfo = document.getElementById("page-info");

  function displayRecipes() {
    recipeContainer.innerHTML = "";
    const start = (currentPage - 1) * recipesPerPage;
    const end = start + recipesPerPage;
    const paginatedRecipes = recipes.slice(start, end);

    paginatedRecipes.forEach((recipe) => {
      const recipeBox = document.createElement("div");
      recipeBox.classList.add("recipe-box");
      recipeBox.innerHTML = `
              <a href="${recipe.link}">
                  <img src="${recipe.image}" alt="${recipe.title}">
                  <h3>${recipe.title}</h3>
              </a>
          `;
      recipeContainer.appendChild(recipeBox);
    });
    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(
      recipes.length / recipesPerPage
    )}`;
  }

  window.changePage = function (direction) {
    if (
      (direction === -1 && currentPage > 1) ||
      (direction === 1 &&
        currentPage < Math.ceil(recipes.length / recipesPerPage))
    ) {
      currentPage += direction;
      displayRecipes();
    }
  };

  displayRecipes();

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("toggle-dark-mode");
  darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
  });
});
