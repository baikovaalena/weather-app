import './CheckboxInput.css'
import {useState} from "react";

function CheckboxInput() {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheck() {
        setIsChecked(!isChecked);
    }

    return (
        <div className="checkbox-container">
            {isChecked ? "Избранное" : "Добавим в избранное?"}
            <input type="checkbox" className="checkbox-container__checkbox"
                   onChange={handleCheck}
                   checked={isChecked}
            />
        </div>
    )
}

export default CheckboxInput;