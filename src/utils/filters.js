const listenOnInputs = (recipes) => {
  console.log("triggered");
  const { ingredients, ustensils, device } = generateFilters(recipes);
  ustensilsForm.addEventListener("click", () => {
    if (ustensilsWrapper.classList.contains("ustensils__results__hide")) {
      deviceChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      deviceWrapper.classList.replace(
        "device__results__show",
        "device__results__hide"
      );
      deviceWrapper.innerHTML = "";
      ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      ingredientWrapper.classList.replace(
        "ingredient__results__show",
        "ingredient__results__hide"
      );
      ingredientWrapper.innerHTML = "";
      ustensilsChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
      ustensilsWrapper.classList.replace(
        "ustensils__results__hide",
        "ustensils__results__show"
      );
      ustensils.forEach((ustensil) => {
        return ustensilsWrapper.append(
          createDOMElements("li", `${ustensil}`, { class: "ustensil__item" })
        );
      });
    } else {
      ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      ustensilsWrapper.classList.replace(
        "ustensils__results__show",
        "ustensils__results__hide"
      );
      ustensilsWrapper.innerHTML = "";
    }
    listenOnUstensilsInput();
  });

  ustensilsInput.addEventListener("keyup", (e) => {
    ustensilsWrapper.innerHTML = "";
    if (e.target.value.length > 1) {
      const query = e.target.value.toLowerCase();
      const results = ustensils.filter((ustensil) => {
        return ustensil.toLowerCase().includes(query);
      });
      results.forEach((result) => {
        return ustensilsWrapper.append(
          createDOMElements("li", `${result}`, { class: "ustensil__item" })
        );
      });
    }
    listenOnUstensilsInput();
  });

  const listenOnUstensilsInput = () => {
    const ustensilsItems = document.querySelectorAll(".ustensil__item");
    ustensilsItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectedFilters.push(item.textContent);
        const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
        createFiltersBar(selectedFiltersUnduplicated, recipes);
      });
    });
  };

  // display ingredients with toggle
  ingredientForm.addEventListener("click", () => {
    if (ingredientWrapper.classList.contains("ingredient__results__hide")) {
      ingredientChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
      ingredientWrapper.classList.replace(
        "ingredient__results__hide",
        "ingredient__results__show"
      );
      deviceChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      ustensilsWrapper.classList.replace(
        "ustensils__results__show",
        "ustensils__results__hide"
      );
      deviceWrapper.classList.replace(
        "device__results__show",
        "device__results__hide"
      );
      deviceWrapper.innerHTML = "";
      ingredients.forEach((ingredient) => {
        return ingredientWrapper.append(
          createDOMElements("li", `${ingredient}`, {
            class: "ingredient__item",
          })
        );
      });
    } else {
      ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      ingredientWrapper.classList.replace(
        "ingredient__results__show",
        "ingredient__results__hide"
      );
      ingredientWrapper.innerHTML = "";
    }
    listenOnIngredientsItems();
  });

  ingredientInput.addEventListener("keyup", (e) => {
    ingredientWrapper.innerHTML = "";
    if (e.target.value.length >= 1) {
      const query = e.target.value.toLowerCase();
      const results = ingredients.filter((ingredient) => {
        return ingredient.toLowerCase().includes(query);
      });
      results.forEach((result) => {
        return ingredientWrapper.append(
          createDOMElements("li", `${result}`, { class: "ingredient__item" })
        );
      });
    }
    listenOnIngredientsItems();
  });

  const listenOnIngredientsItems = () => {
    const ingredientsItems = document.querySelectorAll(".ingredient__item");
    ingredientsItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectedFilters.push(item.textContent);
        const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
        createFiltersBar(selectedFiltersUnduplicated, recipes);
      });
    });
  };

  deviceForm.addEventListener("click", () => {
    if (deviceWrapper.classList.contains("device__results__hide")) {
      deviceChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
      ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      deviceWrapper.classList.replace(
        "device__results__hide",
        "device__results__show"
      );
      ingredientWrapper.classList.replace(
        "ingredient__results__show",
        "ingredient__results__hide"
      );
      ustensilsWrapper.classList.replace(
        "ustensils__results__show",
        "ustensils__results__hide"
      );
      device.forEach((device) => {
        deviceWrapper.innerHTML += `<li class="device__item">${device}</li>`;
        ustensilsWrapper.innerHTML = "";
        ingredientWrapper.innerHTML = "";
      });
    } else {
      deviceChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
      deviceWrapper.classList.replace(
        "device__results__show",
        "device__results__hide"
      );
      deviceWrapper.innerHTML = "";
    }
    listenOndeviceItems();
  });

  deviceInput.addEventListener("keyup", (e) => {
    deviceWrapper.innerHTML = "";
    if (e.target.value.length > 1) {
      const query = e.target.value.toLowerCase();
      const results = device.filter((item) => {
        return item.toLowerCase().includes(query);
      });
      results.forEach((result) => {
        return deviceWrapper.append(
          createDOMElements("li", `${result}`, { class: "device__item" })
        );
      });
    }
    listenOndeviceItems();
  });

  const listenOndeviceItems = () => {
    const deviceItems = document.querySelectorAll(".device__item");
    deviceItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectedFilters.push(item.textContent);
        const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
        createFiltersBar(selectedFiltersUnduplicated, recipes);
      });
    });
  };
};
