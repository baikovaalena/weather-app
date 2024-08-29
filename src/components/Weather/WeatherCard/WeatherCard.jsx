import '../../Weather/Weather.css'
import iconWind from '../../../image/pngwing.com.png'

function WeatherCard({weather}) {
    const {name, wind} = weather
    const iconCode = weather.weather[0].icon;


    return (
        <div className='main-content'>
            <div className='main-content__counter-weather'>
                <div className="main-content__content-weather">
                    <div className="main-content__city-checkbox">
                        <p className="main-content__city"> {name} </p>
                    </div>
                    <p className="main-content__temp">
                        {`Температура сейчас: ${Math.floor(weather.main.temp - 273.15)} °C`}
                        <img src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} alt="weather"
                             className="main-content__icon-weather"/>
                    </p>
                    <p className="main-content__wind">
                        {`Скорость ветра: ${wind.speed} км/ч`}
                        <img src={iconWind} alt="" className="main-content__icon-wind"/>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default WeatherCard