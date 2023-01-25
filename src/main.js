const generateFilters = (recipes) => {
  let ingredients = [];
  let device = [];
  let ustensils = [];
  recipes.forEach((recipe) => {
    ingredients = [
      ...new Set([
        ...ingredients,
        ...recipe.ingredients.map((i) => i.ingredients),
      ]),
    ].sort();
    ustensils = [
      ...new Set([...ustensils, ...recipe.ustensils.map((u) => u)]),
    ].sort();
    device = [...new Set([...device, ...[recipe.appliance]])].sort();
  });
  return { ingredients, ustensils, device };
};

const getData = async () =>
  await fetch("../src/data/recipes.json", {
    mode: "no-cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log("An error occurs when fetching recipes", err));

const createRecipeCards = (recipes) => {
  recipes.forEach((recipe) => {
    recipesSection.append(createRecipeCard(recipe));
  });
};

const init = async () => {
  const { recipes } = await getData();
  filteredRecipes(recipes, globalSearchBar);
  generateFilters(recipes);
  listenOnInputs(recipes);
  createRecipeCards(recipes);
};

init();
