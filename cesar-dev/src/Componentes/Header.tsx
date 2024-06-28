
function Header(){
    return (
        <>
            <header className="header justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col justify-content-wetten">
                            <a href="#">
                                LOGO
                            </a>
                            <button className="btn-hamburguesa d-768">
                                <i className="fa-solid fa-bars fa-lg"></i>
                            </button>
                        </div>
                        <div className="col collapse justify-content-end">
                            <ul className="navbar justify-content-end">
                                <li><a href="#">INICIO</a></li>
                                <li><a href="#">SERVICIOS</a></li>
                                <li><a href="#">PORTAFOLIO</a></li>
                                <li><a href="#">CONTACTO</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;