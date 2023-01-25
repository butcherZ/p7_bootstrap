const filteredRecipes = (recipes, searchBar) => {
  searchBar.addEventListener("keyup", (e) => {
    if (e.target.value.length >= 3) {
      recipesSection.innerHTML = "";
      const query = e.target.value.toLowerCase();
      const results = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().startsWith(query) ||
          recipe.description.toLowerCase().includes(query) ||
          recipe.ingredients.some((ingredients) =>
            ingredients.ingredients.toLowerCase().includes(query)
          )
        );
      });
      console.log("results are", results);
      createRecipeCards(results);
      listenOnInputs(results);
      if (!results.length) {
        recipesSection.append(
          createDOMElements(
            "div",
            `No recipe matches your criteria...you can search for
            "apple pie", "fish" etc....`,
            { class: "no__results" }
          )
        );
      }
    } else if (e.target.value.length <= 3) {
      recipesSection.innerHTML = "";
      createRecipeCards(recipes);
    }
  });
};
