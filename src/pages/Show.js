import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Show = () => {
  const [alldrinks, setDrink] = useState(null)
  const params = useParams()
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`

  const getDrink = async () => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setDrink(result.drinks[0])
      console.log(result.drinks[0])
    } catch (err) {
      console.log(err)
    }
  }

//   console.log(`Current Drink: ${JSON.stringify(alldrinks)}`)

  useEffect(() => {
    getDrink()
  }, []);

  if(!alldrinks){return (<h2>loading…</h2>)};

  return (
    <div className="person">
            <h1>Show Page</h1>
            <h2>{alldrinks.strDrink}</h2>
            <img src={alldrinks.strDrinkThumb} />
            <p>{alldrinks.strInstructions}</p>
    </div>

  )
}

export default Show
