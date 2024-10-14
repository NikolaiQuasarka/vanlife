import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

export default function Vans(){
    const [buses, setBuses] = useState(null)

    useEffect(()=>{
        fetch("/api/vans")
        .then(res=>res.json())
        .then(data=>setBuses(data.vans))
        .catch(err=>console.error(err))
    },[])

    const busesElements = 
    buses===null 
    ? false 
    : buses.map(el =>{
        return(
            <Link to={"/vans/"+el.id} key={el.id}>
                    <img src={el.imageUrl}/>
                    <div className="info">
                        <span className="name">{el.name}</span>
                        <span className="price">${el.price}
                            <br/>
                            <span style={{fontSize: "70%", fontWeight:"500"}}>/day</span>
                        </span>
                    </div>
                    <div className="type">
                        {el.type.charAt(0).toUpperCase() + el.type.slice(1)}
                    </div>
            </Link>
        )
    })

    return(
        <main className="vans">
            <section className="searching">
                <h2>Explore our van options</h2>
                <div className="filter">
                    <div className="options">
                        <button className="option">Simple</button>
                        <button className="option">Luxury</button>
                        <button className="option">Rugged</button>
                    </div>
                    <button className="clear">Clear filters</button>
                </div>
            </section>
            <section className="list">
                {busesElements}
            </section>
        </main>
    )
}