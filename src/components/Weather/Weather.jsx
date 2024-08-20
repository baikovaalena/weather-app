import { useState } from "react"
import { getCurrentWeather, getWeather } from '../../api'
import WeatherCard from './WeatherCard/WeatherCard';
import SearchInput from "../SearchInput/SearchInput";

function Weather() {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    async function handleGetCity(city) {
        setIsLoading(true);
        setError(null);
        console.log(city)
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
            <SearchInput onGetCity={handleGetCity}/>
            <div className="container__loading-error">
                {isLoading === false ? '' : <p className="container__wether-loading">Загрузка...</p>}
                {error && <p className="container__wether-error">Ошибка: {error}</p>}
            </div>
            {
                weather && <WeatherCard weather={weather} />
            }
        </>
    )
}

export default Weather;