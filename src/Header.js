import "./Header.css";

function Header() {
    return (
        <>
            <header>
                <a className="siteName" href="/">TylerRussell<em>.info</em></a>
                <nav>
                    <ul>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Resume</a></li>
                        <li><a href="/" className="about">About</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;