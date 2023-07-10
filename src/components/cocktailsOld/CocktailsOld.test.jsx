import CocktailMakeOld from "./CocktailsOld";
import { screen, render } from '@testing-library/react';
import * as FetchCocktails from './FetchCocktails';


const cocktailResponse =  {cocktails:[
        {
            "idDrink": "11000",
            "strDrink": "Mojito",
            "strCategory": "Cocktail",
            "strGlass": "Highball glass",
        },
        {
            "idDrink": "15841",
            "strDrink": "Mojito Extra",
            "strCategory": "Cocktail",
            "strGlass": "Collins glass",
        },
        {
            "idDrink": "178358",
            "strDrink": "Mango Mojito",
            "strCategory": "Cocktail",
            "strGlass": "Jar",
        },
        {
            "idDrink": "178336",
            "strDrink": "Blueberry Mojito",
            "strCategory": "Cocktail",
            "strGlass": "Highball glass",
        }
    ]};

describe('CocktailsOld', () => {
    it('should render cocktails on CocktailMakeOld', async () => {

        //mock service worker vrm

        jest.spyOn(FetchCocktails, 'useCocktails').mockReturnValue(cocktailResponse);

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