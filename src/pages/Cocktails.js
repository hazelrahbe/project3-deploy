import React from "react";
import { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";


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
            <input type="text" value={mySearch} name="search" placeholder="search" onChange={handleChange}/>
            <button type="submit">Submit</button>
            </form>
            {alldrinks.map((drink) => {
                return (
                <div key = {drink._id} className="card">

                    <Link to= {`/cocktails/${drink.idDrink}`}>
                    <p>ID: {drink._id}</p>
                    <p>Cocktail Name: {drink.strDrink}</p>
                    <img src={drink.strDrinkThumb}/>
                    <p>Thier id: {drink.idDrink}</p>
                    </Link>
                    </div>
                )
            })}
        </section>
    )
}
    export default Cocktails;