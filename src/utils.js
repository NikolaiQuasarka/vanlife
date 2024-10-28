import { redirect } from "react-router-dom"

export async function isAuthorized() {
    const isLoggedIn = false

    if (!isLoggedIn) {
        const message = "You must Log in first"
        const response = redirect("/login" + `?message=${message}`)
        response.body = true
        throw response
    }
    return null
}
