import { useState } from "react"
import { Link } from "react-router-dom";



const Create = () => {
const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/drinks";


const initialForm = { cocktailName: '', img: '', recipe: '' };

const getCocktails = async () => {
  try {
    const response = await fetch(BASE_URL);
    const allCocktails = await response.json();
    console.log(response)
   setCocktail(allCocktails)
  } catch (err) {
    console.log(err);
  }
  
};

const [cocktail, setCocktail] = useState([]);
const [newForm, setNewForm] = useState(initialForm)

useEffect(() => {
    getCocktails();
}, [])


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
    
    const response = await fetch(BASE_URL, options)
    const responseData = await response.json()
  setCocktail(responseData)
    setNewForm(initialForm)
  } catch (err) {
    console.log(err)
  }
}


const handleChange = (e) => {
  console.log("current input", e.target.name)
  const data = { ...newForm, [e.target.name]: e.target.value }
  setNewForm(data)
}



const loaded = () => {
return cocktail?.map((drink) => {
   return (
       <div key={drink._id} className='drink-card'>
           <Link to={`/people/${drink._id}`}>
           <h1>{drink.name}</h1>
           <img src={drink.image} alt={drink.title} />
           <h3>{drink.title}</h3>
           </Link>
       </div>
   );
  });
};




const loading = () => {
  return (
<section className="people-list">
   <h1>
       Loading...
       <span>
          
          <img
               role="presentation"
               alt="spinner logo"
               className="spinner"
               src="https://freesvg.org/img/1544764567.png"
           />{" "}
       </span>
   </h1>
</section>
)};



  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <label className="labels">cocktailName</label>
        <div className="placeholders">
          <input id="cocktailname" type="text" onChange={handleChange} value={formState.cocktailname} />
        </div>
        <label className="labels">img</label>
        <div className="placeholders">
          <input id="img" type="img" onChange={handleChange} value={formState.img} />
        </div>
        <label className="labels">recipe</label>
        <div className="placeholders">
          <input id="recipe" type="recipe" onChange={handleChange} value={formState.recipe} />
        </div>

        <div className="placeholders">
          <button id="createButton" type="submit">Create Cocktail</button>
        </div>
      </div>
    </form>
  );
}
export default Create;
export {getCocktails};

















