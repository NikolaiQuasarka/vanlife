import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVan } from "../api"

export function loader({ params }) {
    return getVan(params.id)
}

export default function VanDetail() {
    const location = useLocation()
    const vanItem = useLoaderData()

    const search = location.state?.search || ""
    return (
        <main className="van-detail">
            <Link to={`..${search}`} relative="path">
                {`Back to ${search ? location.state.type : "all"} vans`}
            </Link>
            {vanItem === null ? (
                false
            ) : (
                <article>
                    <img src={vanItem.imageUrl} />
                    <div className="info">
                        <div className="type">{vanItem.type}</div>
                        <h2 className="name">{vanItem.name}</h2>
                        <span className="price">{vanItem.price}</span>
                        <p className="description">{vanItem.description}</p>
                        <button className="rent">Rent this van</button>
                    </div>
                </article>
            )}
        </main>
    )
}
