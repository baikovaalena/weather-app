import iconWind from "../../../../images/pngwing.png";
import "./DayWeekCard.css"
import {useState} from "react";

function DayWeekCard({dayWeather}) {
    const dateAndTime = dayWeather.date;
    const date = dateAndTime.split(' ').slice(0, 1).join('');
    const dayWeatherItems = dayWeather.weather;
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className='container-open-btn'>
            <button onClick={handleOpen} className="button__is-open-card">Открыть <br/> {date}</button>
            {isOpen && <li key={date} className='weather__card'>
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
                                <p className="text">
                                    <strong>Ветер: </strong>{itemsObj.wind.speed} км/ч
                                </p>
                                <img
                                    src={iconWind}
                                    className="main-content__icon-wind" alt="icon-week"/>
                            </div>
                        </li>
                    )}
                </ul>
            </li>}
        </div>
    )
}

export default DayWeekCard;