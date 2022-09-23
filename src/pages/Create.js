import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Create = () => {
const BASE_URL = "https://drinks--backend.herokuapp.com/drinks";
const navigate = useNavigate()

const initialForm = { strDrink: '', strDrinkThumb: ''};
const [newForm, setNewForm] = useState(initialForm)

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const newCocktail = { ...newForm }
    const testingOutput = JSON.stringify(newCocktail)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // specify authentication values for apis
      },
      body: testingOutput

    }
    fetch(BASE_URL, options)
    navigate('/cocktails')
  } catch (err) {
    console.log(err)
  }
}


const handleChange = (e) => {
  console.log("current input", e.target.id)
  const data = { ...newForm, [e.target.id]: e.target.value }
  setNewForm(data)
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <label className="labels">cocktailName</label>
        <div className="placeholders">
          <input id="strDrink" type="text" onChange={handleChange} value={newForm.strDrink} />
        </div>
        <label className="labels">img</label>
        <div className="placeholders">
          <input id="strDrinkThumb" type="img" onChange={handleChange} value={newForm.strDrinkThumb} />
        </div>
        <div className="placeholders">
          <button id="createButton" type="submit">Create Cocktail</button>
        </div>
      </div>
    </form>
  );
}
export default Create;