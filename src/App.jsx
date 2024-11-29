import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as VansLoader } from "./pages/Vans"
import UnfoundPage from "./pages/UnfoundPage"
import VanDetail, { loader as VanDetailLoader } from "./pages/VanDetail"
import Layout from "./components/Layout"
import HostLayout from "./pages/host/HostLayout"

import Host from "./pages/Host"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"

import HostVans, { loader as HostVansLoader } from "./pages/host/Vans"
import Details from "./pages/host/vans/Details"
import Pricing from "./pages/host/vans/Pricing"
import Photos from "./pages/host/vans/Photos"
import HostVansLayout from "./pages/host/vans/VansLayout"

import ErrorElement from "./components/Error"

import { isAuthorized } from "./utils"

import Login, {
    loader as LogingLoader,
    action as LoginAction,
} from "./pages/Login"

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="vans" errorElement={<ErrorElement />}>
                    <Route index element={<Vans />} loader={VansLoader} />
                    <Route
                        path=":id"
                        element={<VanDetail />}
                        loader={VanDetailLoader}
                    />
                </Route>

                <Route
                    path="login"
                    element={<Login />}
                    loader={LogingLoader}
                    action={LoginAction}
                />

                <Route
                    path="host"
                    element={<HostLayout />}
                    loader={async (obj) => await isAuthorized(obj)}
                >
                    <Route
                        path=""
                        //loader={async () => await isAuthorized()}
                        element={<Host />}
                    />
                    <Route
                        path="income"
                        //loader={async () => await isAuthorized()}
                        element={<Income />}
                    />
                    <Route
                        path="vans"
                        //loader={async () => await HostVansLoader()}
                    >
                        <Route
                            index
                            element={<HostVans />}
                            //loader={async () => await isAuthorized()}
                        />
                        <Route
                            path=":id"
                            element={<HostVansLayout />}
                            //loader={async () => await isAuthorized()}
                        >
                            <Route
                                path=""
                                element={<Details />}
                                //loader={async () => await isAuthorized()}
                            />
                            <Route
                                path="pricing"
                                element={<Pricing />}
                                //loader={async () => await isAuthorized()}
                            />
                            <Route
                                path="photos"
                                element={<Photos />}
                                //loader={async () => await isAuthorized()}
                            />
                        </Route>
                    </Route>
                    <Route
                        path="reviews"
                        loader={async () => {
                            return null
                        }}
                        element={<Reviews />}
                    />
                </Route>
                <Route path="*" element={<UnfoundPage />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}
