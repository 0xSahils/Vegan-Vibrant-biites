const toggleDarkMode = document.getElementById("toggle-dark-mode");
  const body = document.body;

  // Check if dark mode is already set in localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      toggleDarkMode.checked = true;
  }

  // Toggle dark mode and save the preference
  toggleDarkMode.addEventListener("change", function () {
      if (this.checked) {
          body.classList.add("dark-mode");
          localStorage.setItem("darkMode", "enabled");
      } else {
          body.classList.remove("dark-mode");
          localStorage.setItem("darkMode", "disabled");
      }
  });


// Get elements
const recipeContainer = document.querySelector('.recipe-container');
const pageInfo = document.getElementById('page-info');

// Get page number from URL or default to 1


{
  title: "Vegan Chickpea Salad",
  image: "images/chickpea-salad.jpg",
  link: "/recipes/Vegan_Chickpea_SaladRecipe.html" 
},
  { 
    title: "Vegan Buddha Bowl",
    image: "images/buddha-bowl.jpg",
    link: "/recipes/Vegan_Buddha_Bowl.html" 
  },
  { 
    title: "Lentil Soup",
    image: "images/lentil-soup.jpg",
    link: "/recipes/Lentil_Soup.html" 
  },
  { 
    title: "Vegan Tofu Stir Fry",
    image: "images/tofu-stir-fry.jpg",
    link: "/recipes/Vegan_Tofu_Stir_Fry.html" 
  },
  { 
    title: "Quinoa and Black Bean Salad",
    image: "images/quinoa-black-bean.jpg",
    link: "/recipes/Quinoa_and_Black_Bean_Salad.html" 
  },
  { 
    title: "Vegan Pancakes",
    image: "images/vegan-pancakes.jpg",
    link: "/recipes/Vegan_Pancakes.html" 
  },
  { 
    title: "Avocado Toast",
    image: "images/avocado-toast.jpg",
    link: "/recipes/Avocado_Toast.html" 
  },
  { 
    title: "Vegan Smoothie Bowl",
    image: "images/smoothie-bowl.jpg",
    link: "/recipes/Vegan_Smoothie_Bowl.html" 
  },
  { 
    title: "Stuffed Bell Peppers",
    image: "images/stuffed-peppers.jpg",
    link: "/recipes/Stuffed_Bell_Peppers.html" 
  },
  { 
    title: "Vegan Mac and Cheese",
    image: "images/vegan-mac-cheese.jpg",
    link: "/recipes/Vegan_Mac_and_Cheese.html" 
  },
  { 
    title: "Cauliflower Buffalo Wings",
    image: "images/cauliflower-wings.jpg",
    link: "/recipes/Cauliflower_Buffalo_Wings.html" 
  },
  { 
    title: "Vegan Sushi Rolls",
    image: "images/vegan-sushi.jpg",
    link: "/recipes/Vegan_Sushi_Rolls.html" 
  },
  { 
    title: "Vegan Chili",
    image: "images/vegan-chili.jpg",
    link: "/recipes/Vegan_Chili.html" 
  },
  { 
    title: "Vegan Shepherds Pie",
    image: "images/shepherds-pie.jpg",
    link: "/recipes/Vegan_Shepherds_Pie.html" 
  },
  { 
    title: "Vegan Burrito Bowl",
    image: "images/burrito-bowl.jpg",
    link: "/recipes/Vegan_Burrito_Bowl.html" 
  },
  { 
    title: "Sweet Potato and Kale Salad",
    image: "images/sweet-potato-kale.jpg",
    link: "/recipes/Sweet_Potato_and_Kale_Salad.html" 
  },
  { 
    title: "Vegan Brownies",
    image: "images/vegan-brownies.jpg",
    link: "/recipes/Vegan_Brownies.html" 
  },
  { 
    title: "Zucchini Noodles with Pesto",
    image: "images/zucchini-noodles.jpg",
    link: "/recipes/Zucchini_Noodles_with_Pesto.html" 
  },
  { 
    title: "Vegan Pizza",
    image: "images/vegan-pizza.jpg",
    link: "/recipes/Vegan_Pizza.html" 
  },
  { 
    title: "Vegan Chocolate Cake",
    image: "images/vegan-chocolate-cake.jpg",
    link: "/recipes/Vegan_Chocolate_Cake.html" 
  },
  { 
    title: "Vegan Ice Cream",
    image: "images/vegan-ice-cream.jpg",
    link: "/recipes/Vegan_Ice_Cream.html" 
  },
  { 
    title: "Spicy Thai Noodle Salad",
    image: "images/thai-noodle-salad.jpg",
    link: "/recipes/Spicy_Thai_Noodle_Salad.html" 
  },
  { 
    title: "Vegan Pad Thai",
    image: "images/vegan-pad-thai.jpg",
    link: "/recipes/Vegan_Pad_Thai.html" 
  },
  { 
    title: "Vegan Lasagna",
    image: "images/vegan-lasagna.jpg",
    link: "/recipes/Vegan_Lasagna.html" 
  },
  { 
    title: "Vegan Meatballs",
    image: "images/vegan-meatballs.jpg",
    link: "/recipes/Vegan_Meatballs.html" 
  },
  { 
    title: "Vegan Falafel Wrap",
    image: "images/falafel-wrap.jpg",
    link: "/recipes/Vegan_Falafel_Wrap.html" 
  },
  { 
    title: "Spinach and Mushroom Quiche",
    image: "images/spinach-quiche.jpg",
    link: "/recipes/Spinach_and_Mushroom_Quiche.html" 
  },
  { 
    title: "Vegan Caesar Salad",
    image: "images/caesar-salad.jpg",
    link: "/recipes/Vegan_Caesar_Salad.html" 
  },
  { 
    title: "Vegan Eggplant Parmesan",
    image: "images/eggplant-parmesan.jpg",
    link: "/recipes/Vegan_Eggplant_Parmesan.html" 
  },
  { 
    title: "Vegan Pancake Stack",
    image: "images/pancake-stack.jpg",
    link: "/recipes/Vegan_Pancake_Stack.html" 
  },
  { 
    title: "Grilled Portobello Mushroom Burgers",
    image: "images/portobello-burgers.jpg",
    link: "/recipes/Grilled_Portobello_Mushroom_Burgers.html" 
  },
  { 
    title: "Vegan Ramen Bowl",
    image: "images/vegan-ramen.jpg",
    link: "/recipes/Vegan_Ramen_Bowl.html" 
  },
  { 
    title: "Jackfruit Pulled Pork Sandwiches",
    image: "images/jackfruit-pulled-pork.jpg",
    link: "/recipes/Jackfruit_Pulled_Pork_Sandwiches.html" 
  },
  { 
    title: "Vegan Curry with Rice",
    image: "images/vegan-curry.jpg",
    link: "/recipes/Vegan_Curry_with_Rice.html" 
  },
  { 
    title: "Vegan BBQ Tacos",
    image: "images/bbq-tacos.jpg",
    link: "/recipes/Vegan_BBQ_Tacos.html" 
  },
  { 
    title: "Chickpea and Spinach Stew",
    image: "images/chickpea-stew.jpg",
    link: "/recipes/Chickpea_and_Spinach_Stew.html" 
  },
  { 
    title: "Vegan Grilled Cheese Sandwich",
    image: "images/grilled-cheese.jpg",
    link: "/recipes/Vegan_Grilled_Cheese_Sandwich.html" 
  },
  { 
    title: "Coconut Curry Soup",
    image: "images/coconut-curry-soup.jpg",
    link: "/recipes/Coconut_Curry_Soup.html" 
  },
  { 
    title: "Vegan Enchiladas",
    image: "images/vegan-enchiladas.jpg",
    link: "/recipes/Vegan_Enchiladas.html" 
  },
  { 
    title: "Vegan Chocolate Chip Cookies",
    image: "images/vegan-cookies.jpg",
    link: "/recipes/Vegan_Chocolate_Chip_Cookies.html" 
  },
    { 
      title: "Vegan Pineapple Fried Rice",
      image: "images/pineapple-fried-rice.jpg",
      link: "/recipes/Vegan_Pineapple_Fried_Rice.html" 
    },
    { 
      title: "Smoky Lentil Soup",
      image: "images/smoky-lentil-soup.jpg",
      link: "/recipes/Smoky_Lentil_Soup.html" 
    },
    { 
      title: "Sweet Potato Tacos",
      image: "images/sweet-potato-tacos.jpg",
      link: "/recipes/Sweet_Potato_Tacos.html" 
    },
    { 
      title: "Avocado Cucumber Salad",
      image: "images/avocado-cucumber-salad.jpg",
      link: "/recipes/Avocado_Cucumber_Salad.html" 
    },
    { 
      title: "Miso Ramen",
      image: "images/miso-ramen.jpg",
      link: "/recipes/Miso_Ramen.html" 
    },
    { 
      title: "Vegan Jackfruit Tacos",
      image: "images/jackfruit-tacos.jpg",
      link: "/recipes/Vegan_Jackfruit_Tacos.html" 
    },
    { 
      title: "Eggplant Lasagna",
      image: "images/eggplant-lasagna.jpg",
      link: "/recipes/Eggplant_Lasagna.html" 
    },
    { 
      title: "Roasted Beet Salad",
      image: "images/roasted-beet-salad.jpg",
      link: "/recipes/Roasted_Beet_Salad.html" 
    },
    { 
      title: "Tofu Tikka Skewers",
      image: "images/tofu-tikka-skewers.jpg",
      link: "/recipes/Tofu_Tikka_Skewers.html" 
    },
    { 
      title: "Vegetable Dumplings",
      image: "images/vegetable-dumplings.jpg",
      link: "/recipes/Vegetable_Dumplings.html" 
    },
    { 
      title: "Carrot Ginger Soup",
      image: "images/carrot-ginger-soup.jpg",
      link: "/recipes/Carrot_Ginger_Soup.html" 
    },
    { 
      title: "Zucchini Noodle Pesto",
      image: "images/zucchini-noodle-pesto.jpg",
      link: "/recipes/Zucchini_Noodle_Pesto.html" 
    },
    { 
      title: "Vegan Tempeh Stir Fry",
      image: "images/tempeh-stir-fry.jpg",
      link: "/recipes/Vegan_Tempeh_Stir_Fry.html" 
    },
    { 
      title: "Chickpea Curry",
      image: "images/chickpea-curry.jpg",
      link: "/recipes/Chickpea_Curry.html" 
    },
    { 
      title: "Vegan Pulled Pork",
      image: "images/vegan-pulled-pork.jpg",
      link: "/recipes/Vegan_Pulled_Pork.html" 
    },
    { 
      title: "Maple Roasted Brussels Sprouts",
      image: "images/maple-roasted-brussels-sprouts.jpg",
      link: "/recipes/Maple_Roasted_Brussels_Sprouts.html" 
    },
    { 
      title: "Grilled Veggie Panini",
      image: "images/grilled-veggie-panini.jpg",
      link: "/recipes/Grilled_Veggie_Panini.html" 
    },
    { 
      title: "Butternut Squash Risotto",
      image: "images/butternut-squash-risotto.jpg",
      link: "/recipes/Butternut_Squash_Risotto.html" 
    },
    
    { 
      title: "Coconut Lime Rice",
      image: "images/coconut-lime-rice.jpg",
      link: "/recipes/Coconut_Lime_Rice.html" 
    },
    { 
      title: "Vegan Pho",
      image: "images/vegan-pho.jpg",
      link: "/recipes/Vegan_Pho.html" 
    },
    { 
      title: "Cashew Cream Pasta",
      image: "images/cashew-cream-pasta.jpg",
      link: "/recipes/Cashew_Cream_Pasta.html" 
    },
    { 
      title: "Quinoa Kale Salad",
      image: "images/quinoa-kale-salad.jpg",
      link: "/recipes/Quinoa_Kale_Salad.html" 
    },
    { 
      title: "Vegan Pumpkin Latte",
      image: "images/vegan-pumpkin-latte.jpg",
      link: "/recipes/Vegan_Pumpkin_Latte.html" 
    },
    { 
      title: "Crispy Baked Cauliflower",
      image: "images/crispy-baked-cauliflower.jpg",
      link: "/recipes/Crispy_Baked_Cauliflower.html" 
    },
    
    { 
      title: "Vegan Bolognese",
      image: "images/vegan-bolognese.jpg",
      link: "/recipes/Vegan_Bolognese.html" 
    },
    { 
      title: "Stuffed Portobello Mushrooms",
      image: "images/stuffed-portobello-mushrooms.jpg",
      link: "/recipes/Stuffed_Portobello_Mushrooms.html" 
    },
    { 
      title: "Roasted Cauliflower Steaks",
      image: "images/roasted-cauliflower-steaks.jpg",
      link: "/recipes/Roasted_Cauliflower_Steaks.html" 
    },
    { 
      title: "Vegan Margherita Pizza",
      image: "images/vegan-margherita-pizza.jpg",
      link: "/recipes/Vegan_Margherita_Pizza.html" 
    },
    { 
      title: "Zesty Tofu Tacos",
      image: "images/zesty-tofu-tacos.jpg",
      link: "/recipes/Zesty_Tofu_Tacos.html" 
    },
    
    { 
      title: "Vegetable Tempura",
      image: "images/vegetable-tempura.jpg",
      link: "/recipes/Vegetable_Tempura.html" 
    },
    { 
      title: "Black Bean Burgers",
      image: "images/black-bean-burgers.jpg",
      link: "/recipes/Black_Bean_Burgers.html" 
    },
    { 
      title: "Vegan Sushi",
      image: "images/vegan-sushi.jpg",
      link: "/recipes/Vegan_Sushi.html" 
    },
   
    { 
      title: "Avocado Pasta",
      image: "images/avocado-pasta.jpg",
      link: "/recipes/Avocado_Pasta.html" 
    },
    { 
      title: "Mango Sticky Rice",
      image: "images/mango-sticky-rice.jpg",
      link: "/recipes/Mango_Sticky_Rice.html" 
    },
    { 
      title: "Vegan Brisket",
      image: "images/vegan-brisket.jpg",
      link: "/recipes/Vegan_Brisket.html" 
    },
    { 
      title: "Spinach Mushroom Quiche",
      image: "images/spinach-mushroom-quiche.jpg",
      link: "/recipes/Spinach_Mushroom_Quiche.html" 
    },
  { 
    title: "Spaghetti Squash Stir Fry",
    image: "images/spaghetti-squash.jpg",
    link: "/recipes/Spaghetti_Squash_Stir_Fry.html" 
  },
  { 
    title: "Crispy Tofu Bites",
    image: "images/crispy-tofu.jpg",
    link: "/recipes/Crispy_Tofu_Bites.html" 
  },
  { 
    title: "Stuffed Zucchini Boats",
    image: "images/zucchini-boats.jpg",
    link: "/recipes/Stuffed_Zucchini_Boats.html" 
  },
  { 
    title: "Rainbow Salad",
    image: "images/rainbow-salad.jpg",
    link: "/recipes/Rainbow_Salad.html" 
  },
  { 
    title: "Vegan Breakfast Burritos",
    image: "images/breakfast-burritos.jpg",
    link: "/recipes/Vegan_Breakfast_Burritos.html" 
  },
  { 
    title: "Sweet Potato Chili",
    image: "images/sweet-potato-chili.jpg",
    link: "/recipes/Sweet_Potato_Chili.html" 
  },
  { 
    title: "Lentil Bolognese",
    image: "images/lentil-bolognese.jpg",
    link: "/recipes/Lentil_Bolognese.html" 
  },
  { 
    title: "Veggie Spring Rolls",
    image: "images/veggie-spring-rolls.jpg",
    link: "/recipes/Veggie_Spring_Rolls.html" 
  },
  { 
    title: "Spinach Artichoke Dip",
    image: "images/spinach-dip.jpg",
    link: "/recipes/Spinach_Artichoke_Dip.html" 
  },
  { 
    title: "Cauliflower Fried Rice",
    image: "images/cauliflower-rice.jpg",
    link: "/recipes/Cauliflower_Fried_Rice.html" 
  },
  { 
    title: "Vegan Pad See Ew",
    image: "images/pad-see-ew.jpg",
    link: "/recipes/Vegan_Pad_See_Ew.html" 
  },
  { 
    title: "Tempeh BLT Sandwich",
    image: "images/tempeh-blt.jpg",
    link: "/recipes/Tempeh_BLT_Sandwich.html" 
  },
  { 
    title: "Vegan Cabbage Stir Fry",
    image: "images/cabbage-stir-fry.jpg",
    link: "/recipes/Vegan_Cabbage_Stir_Fry.html" 
  },
  { 
    title: "Vegan Curry Noodles",
    image: "images/curry-noodles.jpg",
    link: "/recipes/Vegan_Curry_Noodles.html" 
  },
  { 
    title: "Vegan Sloppy Joes",
    image: "images/sloppy-joes.jpg",
    link: "/recipes/Vegan_Sloppy_Joes.html" 
  },
  { 
    title: "Vegan Empanadas",
    image: "images/empanadas.jpg",
    link: "/recipes/Vegan_Empanadas.html" 
  },
  { 
    title: "Vegetable Lentil Soup",
    image: "images/vegetable-lentil-soup.jpg",
    link: "/recipes/Vegetable_Lentil_Soup.html" 
  },
  { 
    title: "Vegan Spinach Flatbread",
    image: "images/spinach-flatbread.jpg",
    link: "/recipes/Vegan_Spinach_Flatbread.html" 
  },
  { 
    title: "Stuffed Mushroom Caps",
    image: "images/stuffed-mushrooms.jpg",
    link: "/recipes/Stuffed_Mushroom_Caps.html" 
  },
  { 
    title: "Vegan Cauliflower Pizza Crust",
    image: "images/cauliflower-pizza-crust.jpg",
    link: "/recipes/Vegan_Cauliflower_Pizza_Crust.html" 
  },
  { 
    title: "Vegan Tikka Masala",
    image: "images/tikka-masala.jpg",
    link: "/recipes/Vegan_Tikka_Masala.html" 
  },
  { 
    title: "Vegan French Toast",
    image: "images/french-toast.jpg",
    link: "/recipes/Vegan_French_Toast.html" 
  },
  { 
    title: "Vegan Lentil Sliders",
    image: "images/lentil-sliders.jpg",
    link: "/recipes/Vegan_Lentil_Sliders.html" 
  },
  { 
    title: "Vegan Banana Bread",
    image: "images/banana-bread.jpg",
    link: "/recipes/Vegan_Banana_Bread.html" 
  },
  { 
    title: "Chickpea Shakshuka",
    image: "images/chickpea-shakshuka.jpg",
    link: "/recipes/Chickpea_Shakshuka.html" 
  },
  { 
    title: "Vegan Alfredo Pasta",
    image: "images/alfredo-pasta.jpg",
    link: "/recipes/Vegan_Alfredo_Pasta.html" 
  },
  { 
    title: "Vegan Cornbread",
    image: "images/cornbread.jpg",
    link: "/recipes/Vegan_Cornbread.html" 
  },
  { 
    title: "Vegan Chocolate Mousse",
    image: "images/chocolate-mousse.jpg",
    link: "/recipes/Vegan_Chocolate_Mousse.html" 
  },
  { 
    title: "Vegan Zucchini Bread",
    image: "images/zucchini-bread.jpg",
    link: "/recipes/Vegan_Zucchini_Bread.html" 
  },
  { 
    title: "Spicy Sesame Noodles",
    image: "images/spicy-sesame-noodles.jpg",
    link: "/recipes/Spicy_Sesame_Noodles.html" 
  },
  { 
    title: "Vegan Cauliflower Alfredo",
    image: "images/cauliflower-alfredo.jpg",
    link: "/recipes/Vegan_Cauliflower_Alfredo.html" 
  },
  { 
    title: "Vegan Chocolate Pudding",
    image: "images/chocolate-pudding.jpg",
    link: "/recipes/Vegan_Chocolate_Pudding.html" 
  },
  { 
    title: "Vegan Ratatouille",
    image: "images/ratatouille.jpg",
    link: "/recipes/Vegan_Ratatouille.html" 
  },
  { 
    title: "Vegan Snickerdoodle Cookies",
    image: "images/snickerdoodle-cookies.jpg",
    link: "/recipes/Vegan_Snickerdoodle_Cookies.html" 
  },
  { 
    title: "Vegan Bruschetta",
    image: "images/bruschetta.jpg",
    link: "/recipes/Vegan_Bruschetta.html" 
  },
  { 
    title: "Vegan Stuffed Acorn Squash",
    image: "images/stuffed-acorn-squash.jpg",
    link: "/recipes/Vegan_Stuffed_Acorn_Squash.html" 
  },
  { 
    title: "Vegan Cabbage Rolls",
    image: "images/cabbage-rolls.jpg",
    link: "/recipes/Vegan_Cabbage_Rolls.html" 
  },
  { 
    title: "Vegan Coconut Milk Popsicles",
    image: "images/coconut-milk-popsicles.jpg",
    link: "/recipes/Vegan_Coconut_Milk_Popsicles.html" 
  },
  { 
    title: "Vegan Cauliflower Tacos",
    image: "images/cauliflower-tacos.jpg",
    link: "/recipes/Vegan_Cauliflower_Tacos.html" 
  },
  { 
    title: "Vegan Creamy Tomato Soup",
    image: "images/creamy-tomato-soup.jpg",
    link: "/recipes/Vegan_Creamy_Tomato_Soup.html" 
  },
  { 
    title: "Vegan Pumpkin Pie",
    image: "images/pumpkin-pie.jpg",
    link: "/recipes/Vegan_Pumpkin_Pie.html" 
  },
  {title: "Vegetable Dumplings", image: "images/vegetable-dumplings.jpg", link: "/recipes/Vegetable_Dumplings.html"},
  {title: "Carrot Ginger Soup", image: "images/carrot-ginger-soup.jpg", link: "/recipes/Carrot_Ginger_Soup.html"},
  {title: "Zucchini Noodle Pesto", image: "images/zucchini-noodle-pesto.jpg", link: "/recipes/Zucchini_Noodle_Pesto.html"},
  {title: "Vegan Tempeh Stir Fry", image: "images/vegan-tempeh-stir-fry.jpg", link: "/recipes/Vegan_Tempeh_Stir_Fry.html"},
  {title: "Chickpea Curry", image: "images/chickpea-curry.jpg", link: "/recipes/Chickpea_Curry.html"},
  {title: "Vegan Pulled Pork", image: "images/vegan-pulled-pork.jpg", link: "/recipes/Vegan_Pulled_Pork.html"},
  {title: "Maple Roasted Brussels Sprouts", image: "images/maple-roasted-brussels-sprouts.jpg", link: "/recipes/Maple_Roasted_Brussels_Sprouts.html"},
  {title: "Grilled Veggie Panini", image: "images/grilled-veggie-panini.jpg", link: "/recipes/Grilled_Veggie_Panini.html"},
  {title: "Butternut Squash Risotto", image: "images/butternut-squash-risotto.jpg", link: "/recipes/Butternut_Squash_Risotto.html"},
  {title: "Coconut Lime Rice", image: "images/coconut-lime-rice.jpg", link: "/recipes/Coconut_Lime_Rice.html"},
  {title: "Vegan Pho", image: "images/vegan-pho.jpg", link: "/recipes/Vegan_Pho.html"},
  {title: "Cashew Cream Pasta", image: "images/cashew-cream-pasta.jpg", link: "/recipes/Cashew_Cream_Pasta.html"},
  {title: "Quinoa Kale Salad", image: "images/quinoa-kale-salad.jpg", link: "/recipes/Quinoa_Kale_Salad.html"},
  {title: "Vegan Pumpkin Latte", image: "images/vegan-pumpkin-latte.jpg", link: "/recipes/Vegan_Pumpkin_Latte.html"},
  {title: "Crispy Baked Cauliflower", image: "images/crispy-baked-cauliflower.jpg", link: "/recipes/Crispy_Baked_Cauliflower.html"},
  {title: "Vegan Bolognese", image: "images/vegan-bolognese.jpg", link: "/recipes/Vegan_Bolognese.html"},
  {title: "Stuffed Portobello Mushrooms", image: "images/stuffed-portobello-mushrooms.jpg", link: "/recipes/Stuffed_Portobello_Mushrooms.html"},
  {title: "Roasted Cauliflower Steaks", image: "images/roasted-cauliflower-steaks.jpg", link: "/recipes/Roasted_Cauliflower_Steaks.html"},
  {title: "Vegan Margherita Pizza", image: "images/vegan-margherita-pizza.jpg", link: "/recipes/Vegan_Margherita_Pizza.html"},
  {title: "Zesty Tofu Tacos", image: "images/zesty-tofu-tacos.jpg", link: "/recipes/Zesty_Tofu_Tacos.html"},
  {title: "Vegetable Tempura", image: "images/vegetable-tempura.jpg", link: "/recipes/Vegetable_Tempura.html"},
  {title: "Black Bean Burgers", image: "images/black-bean-burgers.jpg", link: "/recipes/Black_Bean_Burgers.html"},
  {title: "Vegan Sushi", image: "images/vegan-sushi.jpg", link: "/recipes/Vegan_Sushi.html"},
  // More recipes can be added here
];







// Back/Forward button behavior: Load the correct page when navigating
window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search);
  currentPage = parseInt(params.get('page')) || 1;
  displayRecipes();
});

// Lazy-load ad when scrolling
window.addEventListener('scroll', function () {
  const adContainer = document.querySelector('.ad-container');
  if (window.scrollY > 300) {
    adContainer.style.display = 'block';
  }
});

// Update URL without reloading
history.pushState({}, '', `?page=${currentPage}`);


// Function to change pages
function changePage(offset) {
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const newPage = Math.max(1, Math.min(currentPage + offset, totalPages));

  if (newPage !== currentPage) {
    currentPage = newPage;
    displayRecipes();
  }
}

// Call the function to display recipes when the page loads

// Select search input field
const searchInput = document.querySelector("#recipe-search");

// Add event listener to detect user input
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  
  // Filter recipes based on search text
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchText)
  );

  // Call function to update the displayed recipes
  displayRecipes(filteredRecipes)};