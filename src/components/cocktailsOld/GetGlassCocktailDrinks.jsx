const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito";

export async function getMojitoGlassCocktails() {
    const response2 = await fetch(url);
    console.log("RESPONSE2: ", response2)
    const data2 = await response2.json();

    let cocktailDrinks = data2.drinks;
    console.log("DRINKS!!!: ", cocktailDrinks)

    return (cocktailDrinks.filter( cocktailDrink =>
        cocktailDrink.strGlass.includes("glass")))
}