import './SearchInput.css'
import { useState } from "react"

function SearchInput({ onGetCity }) {
    const [city, setCity] = useState('')

    function handleOnChange(event) {
        setCity(event.target.value)
    }
    
    function handleCLick() {
        onGetCity(city)
        setCity('')
    }

   const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleCLick()
        }
   }
    
    return (
            <div className="container-input">
                <input type="text" placeholder="Введите город" value={city} onChange={handleOnChange} onKeyDown={onKeyDown} className="container-input__input" />
                <button onClick={handleCLick} className="input__button-weather">Найти город</button>
            </div>
    )
}

export default SearchInput