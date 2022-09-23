import React from "react";
import { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";


const Api = () => {
const [allmarket, setMarket] = useState([]);
const [response, setResponse] = useState(null);
const ApiFetch = new Promise(async (resolve, reject) => {
        try {
            const myData = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories', {
                headers: {
                  'X-CMC_PRO_API_KEY': '000737a8-3121-4a3a-876d-5bdaef5ff9f0',
                }
            });
            setResponse(myData);
        } catch(ex) {
            response = null;
            // error
            console.log(ex);
            reject(ex);
          }
          if (response) {
            // success
            const json = response.data;
            console.log(json);
            setMarket(json);
          }
    })

useEffect(() => {
    ApiFetch ()
})

console.log(allmarket)
    return (
        <section className="container">
            {allmarket.map((market, index, data) => {
                return (
                <div key = {index} className="card">

                    <Link to= {'/markets'}></Link>
                    <p>ID: {market.id}</p>
                    <p>Name: {market.name}</p>
                    <p>Logo: {market.symbol}</p>
                    <p>{market.usd}</p>

                    <button>Trade</button>
                    </div>
                )
            })}
        </section>
    )
}
    export default Api;