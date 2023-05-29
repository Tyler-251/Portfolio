import "./Main.css";


function Main() {
    return (
        <div className="cell">
            <div className="sleeve">
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src="./videos/Ship.mp4" type="video/mp4" />
                </video>
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src="./videos/Catan Vid.mp4" type="video/mp4" />
                </video>
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src="./videos/Mageus 1.mp4" type="video/mp4" />
                </video>
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src="./videos/Untitled Project.mp4" type="video/mp4" />
                </video>
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src="./videos/Necesse Mod.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Main;