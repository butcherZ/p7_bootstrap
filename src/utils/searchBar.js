const filteredRecipes = (recipes, searchBar) => {
  console.log(recipes);
  searchBar.addEventListener("keyup", (e) => {
    if (e.target.value.length >= 3) {
      recipesSection.innerHTML = "";
      const query = e.target.value.toLowerCase();

      console.log("query is ", query);
      const results = [];

      for (let i = 0; i < recipes.length; i++) {
        const { name, ingredients, description } = recipes[i];
        const includesInName = name.toLowerCase().includes(query.toLowerCase());
        const includesInDescription = description
          .toLowerCase()
          .includes(query.toLowerCase());
        let includesInIngredients = false;
        for (let j = 0; j < ingredients.length; j++) {
          console.log("ingredients", ingredients);
          if (
            ingredients[j].ingredients
              .toLowerCase()
              .includes(query.toLowerCase())
          ) {
            includesInIngredients = true;
          }
        }
        if (includesInName || includesInDescription || includesInIngredients) {
          results.push(recipes[i]);
        }
      }
      // console.log("results are", results);
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
