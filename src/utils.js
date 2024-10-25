import { redirect } from "react-router-dom"

export async function isAuthorized() {
    const isLoggedIn = false

    if (!isLoggedIn) {
        const response = redirect("/login")
        response.body = true
        throw response
    }
    return null
}
