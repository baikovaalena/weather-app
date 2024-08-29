import './Header.css'
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <h3 className="header__title">Прогноз погоды</h3>
            <nav className='header__links'>
                <Link to="/" className="header__navigation-link">Прогноз на 1 день</Link>
                <Link to="/favorite" className="header__navigation-link">Избранное</Link>
            </nav>
        </header>
    )
}

export default Header