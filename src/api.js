const API_KEY = 'beb869f71bd1ef68ce85605fc5b33cd7'

export async function getWeekWeather(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const data = await response.json()
    return data
}


export async function getCurrentWeather(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const dataCurrent = await response.json()
    return dataCurrent
}
