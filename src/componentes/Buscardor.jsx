function Buscador() {
  return (
    <>
      <form>
        <div className="buscador">
          <input className="buscador-ip" type="text" placeholder="Buscar..." />
          <button className="buscador-boton">
            <img
              className="buscador-imagen"
              src="src/imagenes/busqueda-freno-de-disco.png"
            />
          </button>
        </div>
      </form>
    </>
  );
}
export default Buscador;
