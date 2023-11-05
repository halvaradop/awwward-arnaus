import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { AppLayout } from "./components/Layouts/AppLayout"
import { HomePage } from "./pages/HomePage"

const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
        </Route>
    ))

    return <RouterProvider router={router} />
}

export default App
