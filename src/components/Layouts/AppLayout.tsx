import { Outlet } from "react-router-dom"
import { Header } from "../Header"

const AppLayout = () => {

    return (
        <div>
            <Header />
            <main className="w-11/12 mx-auto">
                <Outlet />
            </main>
        </div>
    )
}

export { AppLayout }