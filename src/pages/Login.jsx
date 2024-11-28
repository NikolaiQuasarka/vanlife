import { useState } from "react"
import {
    useLoaderData,
    Form,
    redirect,
    useActionData,
    useNavigation,
} from "react-router-dom"
import { loginUser } from "../api"
import { setLoggedIn } from "../utils"

export async function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}
export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({ password, email })
        console.log(data)
        setLoggedIn(true)

        const rediretTo = redirect("/host")
        rediretTo.body = true
        return rediretTo
    } catch (err) {
        console.error(err)
        return err.message
    }
}

export default function Login() {
    const message = useLoaderData()
    const messageElement = message ? <h2>{message}</h2> : null

    const state = useNavigation().state
    const errorMessage = useActionData()
    return (
        <main className="login">
            <h1>Sign in your account</h1>
            {messageElement}
            {errorMessage && <h2>{errorMessage}</h2>}
            <Form method="POST" replace>
                <input type="email" name="email"></input>
                <input type="password" name="password"></input>
                <input
                    className="loginSubmitBtn"
                    type="submit"
                    value="Log in"
                    disabled={state === "submitting" ? true : false}
                />
            </Form>
        </main>
    )
}
