import { Outlet, Link } from 'react-router-dom'
import "./style.scss"
import Nav from "./Nav"

function Navigation() {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}

export default Navigation;