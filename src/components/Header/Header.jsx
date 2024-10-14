import './Header.css'
import {NavLink} from "react-router-dom";
import * as PropTypes from "prop-types";

function NavLinkLink(props) {
    return null;
}

NavLinkLink.propTypes = {
    className: PropTypes.any,
    to: PropTypes.string,
    children: PropTypes.node
};


function Header() {

    return (
        <header className="header">
            <NavLink to="/" className="header__title">
                <h1 className="title">Прогноз погоды</h1>
            </NavLink>
            <nav className='header__links'>
                <NavLink
                    to="/"
                    className={({isActive}) => (isActive ? 'header__navigation-link active' : 'header__navigation-link')}>
                    Прогноз на 1 день
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({isActive}) => (isActive ? 'header__navigation-link active' : 'header__navigation-link')}>
                    Избранное
                </NavLink>
            </nav>
        </header>
    )
}

export default Header