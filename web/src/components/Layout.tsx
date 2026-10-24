import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    const location = useLocation();

    const esconderNavbar = [
        "/login",
        "/cadastro"
    ].includes(location.pathname);

    return (
        <>
            {!esconderNavbar && <Navbar />}
            <Outlet />
        </>
    );
}