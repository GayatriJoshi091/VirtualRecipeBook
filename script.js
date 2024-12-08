// Sample recipes
const recipes = [
    {
      title: "Pasta Primavera",
      ingredients: "Pasta, Vegetables, Olive oil, Garlic, Parmesan",
      steps: "Cook pasta. Stir-fry vegetables. Mix everything together.",
      image: "PastaPrimavera.jpeg",
    },
    {
      title: "Chocolate Cake",
      ingredients: "Flour, Sugar, Cocoa powder, Eggs, Butter",
      steps: "Mix ingredients. Bake at 350°F for 30 minutes.",
      image: "ChocolateCake.jpeg",
    },
  ];
  
  // Function to render recipes
  const renderRecipes = () => {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";
  
    recipes.forEach((recipe, index) => {
      const recipeCard = document.createElement("div");
      recipeCard.className = "col-md-4";
  
      recipeCard.innerHTML = `
        <div class="recipe-card">
          <img src="${recipe.image}" alt="${recipe.title}" />
          <h5>${recipe.title}</h5>
          <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
          <p><strong>Steps:</strong> ${recipe.steps}</p>
        </div>
      `;
  
      recipeList.appendChild(recipeCard);
    });
  };
  
  // Handle form submission
  document.getElementById("recipeForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const title = document.getElementById("title").value;
    const ingredients = document.getElementById("ingredients").value;
    const steps = document.getElementById("steps").value;
    const imageFile = document.getElementById("image").files[0];
  
    let imageUrl = "https://via.placeholder.com/150"; // Default image
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        recipes.push({
          title,
          ingredients,
          steps,
          image: e.target.result,
        });
        renderRecipes();
      };
      reader.readAsDataURL(imageFile);
    } else {
      recipes.push({ title, ingredients, steps, image: imageUrl });
      renderRecipes();
    }
  
    // Reset the form
    document.getElementById("recipeForm").reset();
    document.querySelector(".btn-close").click(); // Close modal
  });
  
  // Initial render
  renderRecipes();
  