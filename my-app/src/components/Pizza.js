import React, { useEffect, useState } from 'react'
import "../Data/Pizza.css"

function Pizza({ name, id, picture, ingredients, price }) {

    /* const pizzaName = pizzaData.name
    const {name} = pizzaData */

    const [isFavorite, setIsFavorite] = useState(false)
    useEffect(function () {
        console.log(isFavorite)
    }, [isFavorite])

    return (
        <div className={"Pizza" + (isFavorite ? " fav" : "")}>
            <img onClick={() =>
                setIsFavorite(!isFavorite)
            } src={isFavorite ? "https://www.psdgraphics.com/wp-content/uploads/2022/01/heart-png-768x589.png" : "https://www.freeiconspng.com/thumbs/star-icon/blue-star-icon-14.png"} alt="star" className="favorite" width="50px" />
            <h1>{name}{isFavorite ? " Kedvenc" : " Nem kedvenc"}</h1>
            <p>{id}</p>
            <p>{ingredients}</p>
            <p>{price}</p>
            <img className="pizzaPhoto" src={"pictures/" + picture} alt={picture + "photo"} />
        </div>
    )
}

export default Pizza