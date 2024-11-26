import { redirect } from "react-router-dom"

export async function isAuthorized() {
    let isLoggedIn
    const loggedin = localStorage.getItem("loggedin")

    if (loggedin === null) isLoggedIn = false
    else isLoggedIn = true

    if (!isLoggedIn) {
        const message = "You must Log in first"
        const response = redirect("/login" + `?message=${message}`)
        response.body = true
        throw response
    }
    return null
}
export function setLoggedIn(value) {
    localStorage.setItem("loggedin", value)
}
