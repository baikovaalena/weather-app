import '../WeatherWeek/WeatherWeek.css'
import iconWind from '../../../image/pngwing.com.png'

function transformWeatherData(weather) {
    const objWeather = {};
    weather.list.forEach(element => {
        const date = element.dt_txt.split(' ').slice(0, 1)
        if (!objWeather[date]) {
            objWeather[date] = {
                date: element.dt_txt,
                weather: []
            };
        }
        objWeather[date].weather.push(element);
    });
    return Object.values(objWeather);
}


function WeatherWeekCard({weather}) {
    const transformWeather = transformWeatherData(weather);

    return (
        <div className='weather__week-card'>
            <h1>Погода на 5 дней: {weather.city.name}</h1>
            <ul className='container'>
                {transformWeather
                    .map((dayWeather) => {
                        const dateAndTime = dayWeather.date;
                        const date = dateAndTime.split(' ').slice(0, 1).join('');
                        const dayWeatherItems = dayWeather.weather;
                        console.log(dayWeatherItems);
                        return (
                            <li key={dateAndTime} className='weather__card'>
                                <p className='text-date'>{date}</p>
                                <ul className='container-content'>
                                    {dayWeatherItems.map(itemsObj =>
                                        <li key={itemsObj.dt} className='weather__temp-time'>
                                            <p className='text'>
                                                <strong>{itemsObj.dt_txt.substring(10, 16)}:</strong>
                                            </p>
                                            <div className='temp-and-icon'>
                                                <p className='text'>{Math.floor(itemsObj.main.temp - 273.15)} °C</p>
                                                <img
                                                    src={`https://openweathermap.org/img/wn/${itemsObj.weather[0].icon}@2x.png`}
                                                    className="main-content__icon-weather" alt="icon-week"/>
                                            </div>
                                            <div className="wind-and-icon">
                                                <p className="text"><strong>Ветер: </strong>{itemsObj.wind.speed} км/ч</p>
                                                <img
                                                    src={iconWind}
                                                    className="main-content__icon-wind" alt="icon-week"/>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default WeatherWeekCard