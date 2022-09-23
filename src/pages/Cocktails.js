import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cocktails = () => {
    const [alldrinks, setDrink] = useState([]);
    const [mySearch, setMySearch] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        return (
            fetch('https://drinks--backend.herokuapp.com/drinks?name=' + mySearch)
                .then((res) => res.json())
                .then((json) => setDrink(json))
        )
    }
    const handleChange = (event) => {
    return (
        setMySearch(event.target.value)
    )
}

useEffect(() => {
    fetch('https://drinks--backend.herokuapp.com/drinks')
        .then((res) => res.json())
        .then((json) => {
            // console.log(json)
            setDrink(json)
    })
.catch(console.error)}, []);
// console.log(mySearch)
    return (
        <section className="container">
            <form onSubmit={handleSubmit}> 
            <div className="cocktails">
            <input className="Cinput" type="text" value={mySearch} name="search" placeholder="search" onChange={handleChange}/>
            <button className="Cbutton" type="submit">Submit</button>
            </div>
            </form>
            {alldrinks.map((drink) => {
                return (
                <div key = {drink._id} className="card">

                    <Link style={{textDecoration:'none'}} to= {`/cocktails/${drink.idDrink}`}>
                    <p className="Cptag2">Cocktail Name: {drink.strDrink}</p>
                    <div className="CDimg">
                    <img src={drink.strDrinkThumb} alt="drink img"/>
                    </div>
                    <hr></hr>
                    </Link>
                    </div>
                )
            })}
        </section>
    )
}
    export default Cocktails;