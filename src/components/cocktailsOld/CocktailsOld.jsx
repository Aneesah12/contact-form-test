import {v4} from 'uuid';
import {useCocktails} from "./FetchCocktails";
import styles from "./styles.css"

//painting list of cocktails
//getting data from 3rd party api - DONE
//styling
//filtering cocktails
//mapping cocktails
//extract rendering of each cocktail


//JS object for css (css in JSX)
const CocktailMakeOld = () => {

    const { cocktails } = useCocktails();

    return (
        <divnse>
            <h2 className={styles.cocktailStyling}>Your cocktails!!!</h2>
            <ul>
                {cocktails
                    .map(cocktail =>
                        <ul key={v4()}>
                            <div>
                                <p>{cocktail.strDrink}</p>
                                <small>{cocktail.strCategory}</small>
                                <br/>
                                <small>{cocktail.strGlass}</small>
                            </div>
                        </ul>
                )}
            </ul>
        </divnse>
    )
}

export default CocktailMakeOld;