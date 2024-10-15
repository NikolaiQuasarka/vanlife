import { Outlet, Link } from "react-router-dom"

export default function Hostoutlet(){
    return(
        <>
            <nav className="host-nav">
                <Link to="">host</Link>
                <Link to="income">income</Link>
                <Link to="reviews">reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}