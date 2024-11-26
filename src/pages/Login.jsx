import { useState } from "react"
import { useLoaderData, Form, redirect, useActionData } from "react-router-dom"
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

    //const [loginStatus, setLoginStatus] = useState("idle")
    //const [loginErr, setLoginErr] = useState(null)

    /* const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    function handleChange(e) {
        const target = e.target
        setUserData((prev) => {
            return { ...prev, [target.name]: target.value }
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        setLoginStatus("submitting")
        try {
            const data = await loginUser(userData)
            console.log(data)
            setLoginErr(null)
        } catch (err) {
            console.error(err)
            setLoginErr(err)
        } finally {
            setLoginStatus("idle")
        }
    } */

    const errorMessage = useActionData()
    return (
        <main className="login">
            <h1>Sign in your account</h1>
            {messageElement}
            {
                //loginErr?.message && <h2>{loginErr?.message || null}</h2>
            }
            {errorMessage && <h2>{errorMessage}</h2>}
            <Form method="POST" replace>
                <input
                    type="email"
                    name="email"
                    //value={userData.email}
                    //onChange={handleChange}
                ></input>
                <input
                    type="password"
                    name="password"
                    //value={userData.password}
                    //onChange={handleChange}
                ></input>
                <input
                    type="submit"
                    value="Log in"
                    //disabled={loginStatus === "submitting" ? true : false}
                />
            </Form>
        </main>
    )
}
