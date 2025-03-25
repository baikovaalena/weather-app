import './WeatherWeekCard.css'
import DayWeekCard from "./WeekCard/DayWeekCard";

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
    <>
      <h1>Погода на 5 дней: {weather.city.name}</h1>

      <div className='weather__week-card'>
        <ul className='container'>
          {transformWeather.map((dayWeather) => {

            return (
              <DayWeekCard key={dayWeather.date} dayWeather={dayWeather}/>
            )
          })
          }
        </ul>
      </div>
    </>
  )
}

export default WeatherWeekCard