
function App() {

  return (
      <>
          <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
              <div className="container">
                  <a className="navbar-brand" href="#">
                      <img src="https://react-dev-five-xi.vercel.app/vite.svg" alt="React Dev"/>
                  </a>
                  <button
                      data-mdb-collapse-init
                      className="navbar-toggler"
                      type="button"
                      data-mdb-target="#navbarTogglerDemo01"
                      aria-controls="navbarTogglerDemo01"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                  >
                      <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">SERVICIOS</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">PORTAFOLIO</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">CONTACTO</a>
                          </li>
                          <li className="nav-item">
                              <a href="#" className="btn btn-outline-dark ms-2">CONTACTO</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </>
  )
}

export default App
