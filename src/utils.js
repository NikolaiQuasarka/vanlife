import { redirect } from "react-router-dom"

export async function isAuthorized({ request }) {
    let isLoggedIn
    const loggedin = localStorage.getItem("loggedin")
    const path = new URL(request.url).pathname
    console.log(path)
    if (loggedin === null) isLoggedIn = false
    else isLoggedIn = true

    if (!isLoggedIn) {
        const message = "You must Log in first"
        const response = redirect(
            "/login" + `?message=${message}&redirectTo=${path}`
        )
        response.body = true
        throw response
    }
    return null
}
export function setLoggedIn(value) {
    localStorage.setItem("loggedin", value)
}
