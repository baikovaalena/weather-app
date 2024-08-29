import { useState } from "react"
import { getCurrentWeather} from '../../api'
import WeatherCard from './WeatherCard/WeatherCard';
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";

function Weather() {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleGetCity(city) {
        setIsLoading(true);
        setError(null);
        try {
            const currentWeather = await getCurrentWeather(city);
            setWeather(currentWeather);
        } catch (err) {
            setWeather(null)
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <>
            <SearchInput onGetCity={handleGetCity} />
            <div className="container__loading-error">
                {isLoading && <p className="container__wether-loading">Загрузка...</p>}
                {error && <p className="container__wether-error">Ошибка: {error}</p>}
            </div>
            {
                weather &&
                <>
                    <WeatherCard weather={weather}/>
                    <div className="flexbox-container">
                        <Link to={`/week/${weather.name}`} className="navigation-list">Прогноз на 5 дней в {weather.name}</Link>
                    </div>
                </>
            }
        </>
    )
}

export default Weather;