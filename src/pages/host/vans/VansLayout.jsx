import { Outlet, NavLink, Link } from "react-router-dom"

export default function VansLayout() {
    return (
        <>
            <Link to=".." relative="path">
                Back to all vans
            </Link>
            <div>
                <NavLink
                    to=""
                    end
                    className={({ isActive }) =>
                        isActive ? "activeLink" : null
                    }
                >
                    Details
                </NavLink>
                <NavLink
                    to="pricing"
                    className={({ isActive }) =>
                        isActive ? "activeLink" : null
                    }
                >
                    Pricing
                </NavLink>
                <NavLink
                    to="photos"
                    className={({ isActive }) =>
                        isActive ? "activeLink" : null
                    }
                >
                    Photos
                </NavLink>
            </div>
            <Outlet />
        </>
    )
}
