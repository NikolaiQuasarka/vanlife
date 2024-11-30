import { Await, defer, Link, useLoaderData } from "react-router-dom"
import { isAuthorized } from "../../utils"
import { getVans } from "../../api"
import { Suspense } from "react"

export async function loader() {
    const vansPromise = getVans()
    return defer({ vans: vansPromise })
}

export default function Vans() {
    const vans = useLoaderData().vans
    console.log(vans)
    function vansElements(vans) {
        return vans.map((van) => {
            return (
                <Link key={van.id}>
                    <img src={van.imageUrl} style={{ maxWidth: "100%" }} />
                    <h3>{van.name}</h3>
                </Link>
            )
        })
    }
    return (
        <>
            <h1>Vans</h1>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={vans}>{vansElements}</Await>
            </Suspense>
        </>
    )
}
