import '../WeatherCard/WeatherCard.css'
import iconWind from '../../../images/pngwing.png'
import CheckboxInput from "../../CheckboxInput/CheckboxInput";
import '../../../images/weatherCard.jpg'
import {useEffect, useState} from "react";

function WeatherCard({weather}) {
    const {name, wind} = weather
    const iconCode = weather.weather[0].icon;
    const [isChecked, setIsChecked] = useState(false);


    function handleCheck() {
        setIsChecked(!isChecked);
        const localCities = JSON.parse(localStorage.getItem('city')) || [];

        if (!isChecked) {
            if (!localCities.includes(name)) {
                localCities.push(name);
                localStorage.setItem('city', JSON.stringify(localCities));
            }
        } else{
            const deleteCities = localCities.filter(item => item !== name);
            localStorage.setItem('city', JSON.stringify(deleteCities));
        }
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('city')).includes(name)) {
            setIsChecked(true);
        }else {
            setIsChecked(false);
        }
    }, [name]);

    return (
        <>
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
            <CheckboxInput onChange={handleCheck} checked={isChecked}/>
        </>
    )
}

export default WeatherCard