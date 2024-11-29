import { Suspense, useEffect, useState } from "react"
import {
    Link,
    useSearchParams,
    useLoaderData,
    defer,
    Await,
} from "react-router-dom"
import { getVans } from "../api"

export function loader() {
    const vansPromise = getVans()
    return defer({ vans: vansPromise })
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()

    const vans = useLoaderData().vans
    const typeFilter = searchParams.get("type")

    const busesElements = (
        <Await resolve={vans}>
            {(vansData) => {
                const filteredBuses =
                    typeFilter ?
                        vansData.filter((bus) => bus.type === typeFilter)
                    :   vansData
                return filteredBuses === null ? false : (
                        filteredBuses.map((el) => {
                            return (
                                <Link
                                    to={el.id}
                                    key={el.id}
                                    state={{
                                        search:
                                            searchParams ?
                                                searchParams.toString()
                                            :   null,
                                        type: typeFilter,
                                    }}
                                >
                                    <img src={el.imageUrl} />
                                    <div className="info">
                                        <span className="name">{el.name}</span>
                                        <span className="price">
                                            ${el.price}
                                            <br />
                                            <span
                                                style={{
                                                    fontSize: "70%",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                /day
                                            </span>
                                        </span>
                                    </div>
                                    <div className="type">
                                        {el.type.charAt(0).toUpperCase() +
                                            el.type.slice(1)}
                                    </div>
                                </Link>
                            )
                        })
                    )
            }}
        </Await>
    )

    return (
        <main className="vans">
            <section className="searching">
                <h2>Explore our van options</h2>
                <div className="filter">
                    <div className="options">
                        <button
                            onClick={() => setSearchParams({ type: "simple" })}
                            className={
                                "option " +
                                (typeFilter === "simple" ? "selected" : null)
                            }
                        >
                            Simple
                        </button>
                        <button
                            onClick={() => setSearchParams({ type: "luxury" })}
                            className={
                                "option " +
                                (typeFilter === "luxury" ? "selected" : null)
                            }
                        >
                            Luxury
                        </button>
                        <button
                            onClick={() => setSearchParams({ type: "rugged" })}
                            className={
                                "option " +
                                (typeFilter === "rugged" ? "selected" : null)
                            }
                        >
                            Rugged
                        </button>
                    </div>
                    {typeFilter ?
                        <button
                            onClick={() => setSearchParams({})}
                            className="clear"
                        >
                            Clear filters
                        </button>
                    :   null}
                </div>
            </section>
            <section className="list">
                <Suspense fallback={<h>Loading...</h>}>
                    {busesElements}
                </Suspense>
            </section>
        </main>
    )
}
