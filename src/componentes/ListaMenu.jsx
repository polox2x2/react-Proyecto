function ListaMenu() {
  return (
    <>
      <div className="menu">
        <a href="#" className="logo-menu">
          Store Bikes Trail
        </a>
        <input type="checkbox" className="menus" />
        <label for="menus">
          <img className="menu-icono" src="src/imagenes/menu.png" />
        </label>
        <nav className="navbar">
          <ul className="navbar-ul">
            <li className="navbar-li">
              {" "}
              <a className="navbar-li-a" href="#">
                Inicio
              </a>{" "}
            </li>
            <li className="navbar-li">
              {" "}
              <a className="navbar-li-a" href="#">
                Servicios
              </a>{" "}
            </li>
            <li className="navbar-li">
              {" "}
              <a className="navbar-li-a" href="#">
                Productos
              </a>{" "}
            </li>
            <li className="navbar-li">
              {" "}
              <a className="navbar-li-a" href="#">
                Contacto
              </a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default ListaMenu;
