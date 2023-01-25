const createRecipeCard = (data) => {
  const card = createDOMElements(
    "article",
    {
      class:
        "recipe__card card h-100 text-black rounded border-0 custom-card-height my-4",
    },
    createDOMElements("div", { class: "recipe__card__placeholder" }),
    createDOMElements(
      "section",
      { class: "recipe__card__section py-4" },
      createDOMElements(
        "header",
        { class: "recipe__card__header" },
        createDOMElements("h6", `${data.name}`, {
          class: "recipe__card__header__title card-title my-2 col-8",
        }),
        createDOMElements(
          "h6",
          `${data.time} min `,
          { class: "recipe__card__header__time my-2" },
          createDOMElements("i", {
            class: "fal fa-clock recipe__card__header__icon",
          })
        )
      ),
      createDOMElements(
        "aside",
        { class: "recipe__card__aside" },
        createDOMElements(
          "ul",
          { class: "list-unstyled custom-width lh-sm" },
          ...data.ingredients.map((ingredients) =>
            createDOMElements(
              "li",
              createDOMElements("strong", `${ingredients.ingredients}`),
              ingredients.quantity ? `: ${ingredients.quantity} ` : "",
              ingredients.unit ? `${ingredients.unit}` : ""
            )
          )
        ),
        createDOMElements("p", `${data.description}`, {
          class: "recipe__card__description",
        })
      )
    )
  );
  return card;
};
