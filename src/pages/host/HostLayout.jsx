import { Outlet, Link, NavLink } from "react-router-dom"

export default function Hostoutlet() {
    const selectedStyle = {
        textDecoration: "underline",
        fontWeight: "700",
        color: "rgba(22, 22, 22, 1)",
    }

    return (
        <main>
            <nav className="host-nav">
                <NavLink
                    to=""
                    end
                    style={({ isActive }) => (isActive ? selectedStyle : null)}
                >
                    host
                </NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }) => (isActive ? selectedStyle : null)}
                >
                    income
                </NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }) => (isActive ? selectedStyle : null)}
                >
                    vans
                </NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }) => (isActive ? selectedStyle : null)}
                >
                    reviews
                </NavLink>
            </nav>
            <Outlet />
        </main>
    )
}
