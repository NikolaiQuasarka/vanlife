import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Layout from "./components/Layout"
import HostLayout from "./pages/host/HostLayout"

import Host from "./pages/Host"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"

import HostVans from "./pages/host/Vans"
import Details from "./pages/host/vans/Details"
import Pricing from "./pages/host/vans/Pricing"
import Photos from "./pages/host/vans/Photos"
import HostVansLayout from "./pages/host/vans/VansLayout"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />

                    <Route path="vans">
                        <Route index element={<Vans />} />
                        <Route path=":id" element={<VanDetail />} />
                    </Route>

                    <Route path="host" element={<HostLayout />}>
                        <Route path="" element={<Host />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans">
                            <Route index element={<HostVans />} />
                            <Route path=":id" element={<HostVansLayout />}>
                                <Route path="" element={<Details />} />
                                <Route path="pricing" element={<Pricing />} />
                                <Route path="photos" element={<Photos />} />
                            </Route>
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
