export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title"> Onation</a>
        <ul>
            <li>
                <a href="/homepage">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/donation">Donate</a>
            </li>
        </ul>
    </nav>
}