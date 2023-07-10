import {useEffect, useState} from "react";
import {getMojitoGlassCocktails} from "./GetGlassCocktailDrinks";

export const useCocktails = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const loadCocktails = async () => {
            setCocktails(await getMojitoGlassCocktails());
        }
        loadCocktails()
    }, [])

    return { cocktails };
}