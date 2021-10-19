/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer < 0) return;

  if (timer === 0) return 'Lasagna is done.';

  if (timer > 0) return 'Not done, please wait.';

  return 'You forgot to set the timer.';
}

export function preparationTime(layers, layerPreparation = 2) {
  let totalTime = 0;

  layers.forEach((l) => {
    totalTime += layerPreparation;
  });
  return totalTime;
}

export function quantities(layers) {
  const totalQuantities = {
    noodles: 0,
    sauce: 0,
  };

  layers.forEach((l) => {
    if (l === 'noodles') totalQuantities[l] += 50;
    else if (l === 'sauce') totalQuantities[l] += 0.2;
  });

  return totalQuantities;
}

export function addSecretIngredient(friendsList, myList) {
  const lastIndex = friendsList.length - 1;
  myList.push(friendsList[lastIndex]);
}

export function scaleRecipe(recipe, people) {
  const newRecipe = {
    noodles: 0,
    sauce: 0,
    mozzarella: 0,
    meat: 0,
  };

  for (let i = 1; i <= people; i++) {
    newRecipe.noodles += recipe.noodles / 2;
    newRecipe.sauce += recipe.sauce / 2;
    newRecipe.mozzarella += recipe.mozzarella / 2;
    newRecipe.meat += recipe.meat / 2;
  }

  return newRecipe;
}
