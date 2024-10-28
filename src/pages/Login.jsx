import { useLoaderData } from "react-router-dom"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const message = useLoaderData()
    const messageElement = message ? <h2>{message}</h2> : null
    return (
        <main className="login">
            <h1>Sign in your account</h1>
            {messageElement}
            <form>
                <input type="email"></input>
                <input type="password"></input>
                <input type="submit" value="Log in" />
            </form>
        </main>
    )
}
