import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function VanDetail(){
    const params = useParams()

    const [vanItem, setVanItem] = useState(null)
    
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setVanItem(data.vans))
        .catch(err=>console.error(err))
    },[])

    return(
        <main className="van-detail">
            <button className="back">
                <img/>
            Back to all vans
            </button>
            {vanItem===null
            ? false
            : <article>
                <img src={vanItem.imageUrl}/>
                <div className="info">
                    <div className="type">
                        {vanItem.type}
                    </div>
                    <h2 className="name">
                        {vanItem.name}
                    </h2>
                    <span className="price">
                    {vanItem.price}
                    </span>
                    <p className="description">
                    {vanItem.description}
                    </p>
                    <button className="rent">
                    Rent this van
                    </button>
                </div>
            </article>
            }
        </main>
    )
}