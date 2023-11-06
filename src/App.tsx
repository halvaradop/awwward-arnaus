import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { AppLayout } from "./components/Layouts/AppLayout"
import { HomePage } from "./pages/HomePage"
import { WorkPage } from "./pages/WorkPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { OtherPage } from "./pages/OtherPage"

const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="other" element={<OtherPage />} />
        </Route>
    ), { basename: "/awwward-arnaus" })

    return <RouterProvider router={router} />
}

export default App
