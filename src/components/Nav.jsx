import {Link} from "react-router-dom"

export default function Nav(){
    return(
        <nav className="header">
            <Link className="header" to="/">#VANLIFE</Link>
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
                <Link to="/host">Host</Link>
            </div>
        </nav>
    )
}