import React, { useState } from 'react'
import "../Data/Pizza.css"

function Pizza({ name, id, picture, ingredients, price }) {

    /* const pizzaName = pizzaData.name
    const {name} = pizzaData */

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className={"Pizza" + (isFavorite ? " fav" : "")}>
            <img onClick={() =>
                setIsFavorite(true)
            } src="https://www.freeiconspng.com/thumbs/star-icon/blue-star-icon-14.png" alt="star" className="favorite" width="50px" />
            <h1>{name}{isFavorite ? " Kedvenc" : " Nem kedvenc"}</h1>
            <p>{id}</p>
            <p>{ingredients}</p>
            <p>{price}</p>
        </div>
    )
}

export default Pizza