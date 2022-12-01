import React from 'react'
import {pizzas} from '../Data/pizzaData'
import Pizza from './Pizza'

function Pizzas() {
    return (
        <div>
            {pizzas.map(pizza => <Pizza key={pizza.id} name={pizza.name} id={pizza.id} ingredients={pizza.ingredients} price={pizza.price}/>)}

        </div>
    )
}

export default Pizzas