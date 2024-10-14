import './CheckboxInput.css'


function CheckboxInput({onChange, checked}) {

    return (
        <div className="checkbox-input">
            <label className="checkbox-container">
                {!checked ? "Добавим в избранное?" : "Избранное"}
                <input type="checkbox" className="checkbox-container__checkbox"
                       checked={checked} onChange={onChange}
                />
            </label>
        </div>
    )
}

export default CheckboxInput;