import {Link,NavLink} from "react-router-dom"

export default function Nav(){
    return(
        <nav className="header">
            <Link className="header" to="/">#VANLIFE</Link>
            <div className="links">
                <NavLink to="/about"
                className={({isActive})=> isActive ? "activeLink" : null}
                >About</NavLink>
                <NavLink to="/vans"
                className={({isActive})=> isActive ? "activeLink" : null}
                >Vans</NavLink>
                <NavLink to="/host"
                className={({isActive})=> isActive ? "activeLink" : null}
                >Host</NavLink>
            </div>
        </nav>
    )
}