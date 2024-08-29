
import { useParams } from "react-router-dom"
import { getWeekWeather } from '../../../api'
import { useEffect, useState } from "react"
import WeatherWeekCard from '../WeatherCard/WeatherWeekCard'


function WeatherWeek() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [weatherWeek, setWeatherWeek] = useState(null);
    const { cityName } = useParams();

    async function handleGetCityWeek() {
        setIsLoading(true)
        setError(null)
        try {
            const weatherWeekData = await getWeekWeather(cityName)
            setWeatherWeek(weatherWeekData)
        } catch (err) {
            setWeatherWeek(null)
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        handleGetCityWeek()
    }, [cityName])


    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {weatherWeek && <WeatherWeekCard weather={weatherWeek} />}
        </>
    )
}

export default WeatherWeek