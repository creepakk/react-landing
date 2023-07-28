import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export function Layout() {
    return (
        <>
            <Navigation />
            <section className="container">
                <Outlet />
            </section>
            <Footer />
        </>
    )
}