import { useRouteError } from "react-router-dom"

export default function ErrorElement() {
    const error = useRouteError()
    console.log(error)
    return <h1>Error: {error.message}</h1>
}
