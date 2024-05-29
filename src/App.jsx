import Buscador from "./componentes/Buscardor";
import CatalogoMoto from "./componentes/Catalogo";
import ListaMenu from "./componentes/ListaMenu";
import "./Apps.css";

function App() {
  return (
    <>
      <header className="header">
        <ListaMenu />
        <Buscador />
        <div className="logo">
          <div className="header-txt">
            <h1 className="text-logo">
              {" "}
              Compra tu moto <br /> A tu gusto aquí
            </h1>
            <p className="text-logo-p">
              Esta es una tienda donde se venden motos de alta gama de distintas
              cilindraras del modelo "trail" el cual se caracteriza tener una
              gran desempeso tanto como en off-road como para viajes en
              carretera, estas motos son de lo mejor hasta is gustas las puedes
              usar para enduro con un mantenimiendo menos costoso, solo
              dependera del piloto asi es que ven y pon a prueba tus habilidades
              con una maquina de estas!!!
            </p>{" "}
            <a href="#" className="btn-logo">
              informacion
            </a>
          </div>
          <div className="img-logo">
            <img src="src/imagenes/Honda Africa Twin.jpg" />
          </div>
        </div>
      </header>

      <section className="servicio-contenedor">
        <h2 className="servicio-h2">Nuestro Servicio</h2>

        <div className="servicio">
          <div className="servicios-1">
            <img src="src/imagenes/Iconomoto.png" />
            <h3>Mantenimients</h3>
            <p> incluye todos los mantenimientos gratis.</p>
          </div>

          <div className="servicios-1">
            <img src="src/imagenes/Tarjeta de credito.png" />
            <h3 className="servicio-h3">Credito</h3>
            <p>
              Nuestra empresa te ofrece diversos metodos de pagos, los cuales
              son muy accesibles.
            </p>
          </div>

          <div className="servicios-1">
            <img src="src/imagenes/Garantia.png" />
            <h3 className="servicio-h3">Garantia</h3>
            <p>
              Con nuestra empresa te daremos una garantia hasta los 30 000 km o
              los 3 primeros años de uso lo que llegue primeros de uso donde.
            </p>
          </div>
        </div>
      </section>
      <CatalogoMoto />
      <section className="testimonios">
        <h2>Asesores certificados de ventas</h2>
        <div className="testimonios-contenedor">
          <div class="testimonio-1">
            <img src="src/imagenes/Luis.jpg" />
            <h3>Luis</h3>
            <p>
              Hola, soy Luis, su asesor de ventas de motos. Conozco cada detalle
              de nuestras máquinas y estoy aquí para ayudarles a encontrar la
              moto perfecta para su aventura. Ya sea que busquen potencia,
              versatilidad o emoción, estoy listo para guiarlos hacia su próxima
              moto. ¡Suban a bordo y prepárense para vivir la experiencia de su
              vida sobre dos ruedas!
            </p>
          </div>

          <div class="testimonio-1">
            <img src="src/imagenes/Humberto.jpeg" />
            <h3>Humberto</h3>
            <p>
              Hola, soy Humberto, su asesor de ventas de motos. Estoy aquí para
              hacer realidad sus sueños sobre dos ruedas, ayudándoles a
              encontrar la moto perfecta para su aventura. Con mi experiencia y
              pasión, los guiaré hacia la emoción de la carretera. ¿Listos para
              comenzar la aventura?
            </p>
          </div>
        </div>
      </section>
      <footer className="footer-contenedor">
        <div>
          <ListaMenu />
        </div>
      </footer>
    </>
  );
}

export default App;
