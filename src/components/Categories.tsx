import { Link } from 'react-router-dom';

export default function Categories() {
    return (
        <ul className="menu bg-base-200 w-56 rounded-box">
            <li><Link to={"/categories/all"}>All</Link></li>
            <li><Link to={"/categories/electrics"}>Electrics</Link></li>
            <li><Link to={"/categories/handtools"}>Hand tools</Link></li>
            <li><Link to={"/categories/accesories"}>Accesories</Link></li>
        </ul>
    )
}