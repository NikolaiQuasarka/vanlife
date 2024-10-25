import { Link } from "react-router-dom"
import { isAuthorized } from "../../utils"

export async function loader() {
    await isAuthorized()
    return null
}

export default function Vans() {
    return (
        <>
            <h1>Vans</h1>
            <Link to="1">Ссылка</Link>
        </>
    )
}
