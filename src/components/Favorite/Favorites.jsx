import './Favorite.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import iconCity from "../../images/favorite-icon-city.png"

function Favorites() {
    const [favoritesCities, setFavoritesCities] = useState(JSON.parse(localStorage.getItem("city")));

    function handleDelete(cityToDelete) {
        const newFavoritesCities = favoritesCities.filter(item => item !== cityToDelete);
        setFavoritesCities(newFavoritesCities);
        localStorage.setItem("city", JSON.stringify(newFavoritesCities));
    }

    return (
        <div className="favorite">
            <h1 className="favorite__title"> Избранное </h1>
            <ul className="favorite__list">
                {favoritesCities.map(city => {
                    const FavoriteIcon = iconCity;

                    return (
                        <li key={city} className="favorite__container">
                            <img src={FavoriteIcon} alt="city" className="favorite__icon"/>
                            <p key={city} className="favorite__city">
                                {city}
                            </p>
                            <button onClick={() => handleDelete(city)} className="favorite__city-button">Удалить
                            </button>
                            <Link to={`/week/${city}`} className="favorite__city-link">Прогноз на 5 дней </Link>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Favorites;