import {Routes, Route } from "react-router-dom"
import Cocktails from '../pages/Cocktails'

const CocktailPage = () => {
    return (
        <Route>
            <Route path='/cocktails' element={<Cocktails/>} />
        </Route>
    )
}

export default CocktailPage  