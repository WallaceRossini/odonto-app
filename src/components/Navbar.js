import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-dark mb-5">
      <a
        className=" navbar-brand text-white text-uppercase"
        href="/"
      >Odonto
             </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="/home">
              <i className="fas fa-home"></i>
              &nbsp;
              Home
              </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="/dentistas">
              <i className="fas fa-tooth"></i>
              &nbsp;
              Dentistas
              </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="/pacientes">
              <i className="fas fa-male"></i>
              &nbsp;
              Pacientes</a>

          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="/consultas">
              <i className="far fa-clock"></i>
              &nbsp;
              Marcar Consulta
            </a>
          </li>
        </ul>
        <form className="form-inline">
          <input type="search" placeholder="Buscar..." className="form-control mr-2"></input>
          <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
        </form>
      </div>
    </nav>
  )
}

export default NavBar;