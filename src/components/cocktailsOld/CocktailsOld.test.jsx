import CocktailMakeOld from "./CocktailsOld";
import { screen, render } from '@testing-library/react';


const cocktailResponse = {
    "drinks": [
    {
        "idDrink": "11000",
        "strDrink": "Mojito",
        "strCategory": "Cocktail",
        "strGlass": "Glass",
    }]
};

describe('CocktailsOld', () => {
    it('should render cocktails on CocktailMakeOld', async () => {

        render(<CocktailMakeOld/>);

        expect(await screen.findByText('Your cocktails!!!')).toBeInTheDocument();
        expect(await screen.findByText('Mojito')).toBeInTheDocument();
        expect(await screen.findByText('Mojito Extra')).toBeInTheDocument();

        const cocktailText = screen.getAllByText('Cocktail');
        const highballGlassText = screen.getAllByText('Highball glass');

        cocktailText.forEach(cocktail => expect(cocktail).toBeInTheDocument());
        highballGlassText.forEach(glass => expect(glass).toBeInTheDocument());

    });
})