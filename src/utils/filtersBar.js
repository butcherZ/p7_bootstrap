const createFiltersBar = (selectedFiltersUnduplicated, recipes) => {
  filtersBar.innerHTML = "";
  selectedFiltersUnduplicated.forEach((filter) => {
    return filtersBar.append(
      createDOMElements(
        "div",
        `${filter}`,
        { class: "filter__query" },
        createDOMElements("i", {
          class: "fal fa-times-circle filter__query__icon",
        })
      )
    );
  });
  searchOnFilters(recipes, selectedFiltersUnduplicated);
};

const searchOnFilters = (recipes, selectedFiltersUnduplicated) => {
  const filterQuery = document.querySelectorAll(".filter__query");
  const filters = Array.from(filterQuery);
  const result = recipes.filter((recipe) => {
    return filters.every((item) => {
      const formatedItem = item.textContent.toLowerCase();
      return (
        recipe.ingredients.some((i) => {
          return i.ingredients.toLowerCase().includes(formatedItem);
        }) ||
        recipe.appliance.toLowerCase().includes(formatedItem) ||
        recipe.ustensils.some((ustensil) => {
          return ustensil.toLowerCase() === formatedItem;
        })
      );
    });
  });
  if (result.length) {
    recipesSection.innerHTML = "";
    createRecipeCards(result);
    listenOnFilterBar(filters, recipes);
  } else if (!result.length) {
    listenOnFilterBar(filters, recipes);
    recipesSection.innerHTML = "";
    recipesSection.append(
      createDOMElements(
        "div",
        `No recipe matches your criteria...you can search for
        "apple pie", "fish" etc....`,
        { class: "no__results" }
      )
    );
  }
};

const listenOnFilterBar = (filters, recipes) => {
  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      removeFilter(filter, filters, recipes);
    });
  });
};

const removeFilter = (selectedFilter, arrayOfFilters, recipes) => {
  const index = arrayOfFilters.indexOf(selectedFilter);
  arrayOfFilters.slice(index, 0);
  selectedFilter.remove();
  selectedFilters.splice(0, selectedFilters.length);
  if (!arrayOfFilters.length) {
    recipesSection.innerHTML = "";
    createRecipeCards(recipes);
  } else {
    searchOnFilters(recipes, arrayOfFilters);
  }
};
