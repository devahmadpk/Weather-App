

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'; // Example icons

const NavDock = () => {

    const houseIcon = <FontAwesomeIcon icon={faHouse} />;
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
    const locationIcon = <FontAwesomeIcon icon={faLocationCrosshairs} />;



    return (
        <div className="nav-dock">
            <button>{houseIcon}</button>
            <button>{searchIcon}</button>
            <button>{locationIcon}</button>
            
        </div>
    )
}

export default NavDock;