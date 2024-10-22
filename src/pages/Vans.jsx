import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../api"

export default function Vans() {
    const [buses, setBuses] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            const data = await getVans()
            setBuses(data)
            setLoading(false)
        }
        loadVans()
    }, [])

    useEffect(() => {}, [])

    const filteredBuses =
        typeFilter && buses
            ? buses.filter((bus) => bus.type === typeFilter)
            : buses

    const busesElements =
        filteredBuses === null
            ? false
            : filteredBuses.map((el) => {
                  return (
                      <Link
                          to={el.id}
                          key={el.id}
                          state={{
                              search: `?${searchParams.toString()}`,
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

    if (loading) {
        return <h1>Loading...</h1>
    }

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
                    {typeFilter ? (
                        <button
                            onClick={() => setSearchParams({})}
                            className="clear"
                        >
                            Clear filters
                        </button>
                    ) : null}
                </div>
            </section>
            <section className="list">{busesElements}</section>
        </main>
    )
}
