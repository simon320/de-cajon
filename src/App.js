import LOGO from "./assets/Sello1a.png";

function App() {
  return (
    <>
	<header>
		<nav>
			<a href="#">Inicio</a>
			<a href="#">Productos</a>
			<a href="#">Multimedia</a>
			<a href="#">Contacto</a>
			<a href="#">Acerca de..</a>
		</nav>
		<section className="textos-header">
			<img src={LOGO} />
			<h2>Instrumentos de percusión artesanales</h2>
		</section>
		{/* <div className="wave" style={height: '150px'; overflow: 'hidden';} >
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M0.00,49.98 C250.27,158.38 363.71,-36.02 500.00,49.98 L500.00,150.00 L-1.41,151.47 Z" style="stroke: none; fill: #fff;">
        </path>
      </svg>
    </div> */}
	</header>
	<main>
		<section className="contenedor sobre-nosotros">
			<h2 className="titulo">Nuestro Producto</h2>
			<div className="contenedor-sobre-nosotros">
				<img src="./assets/Producto.jpg" className="imagen-producto" />
				<div className="contenido-textos">
					<h4><span>1</span>Diferentes tipos y tamaños</h4>
					<p>Cajones personalizados a pedido La Solicitud de Matriculación debe ser presentada por el solicitante en los Colegios de Distrito, completando dos originales del formulario de solicitud, con carácter de Declaración Jurada. Para solicitar la matriculación en este Colegio Profesional se debe cumplir con lo</p>
					<h4><span>2</span>Cajónes Personales</h4>
					<p>Cajones personalizados a pedido La Solicitud de Matriculación debe ser presentada por el solicitante en los Colegios de Distrito, completando dos originales del formulario de solicitud, con carácter de Declaración Jurada. Para solicitar la matriculación en este Colegio Profesional se debe cumplir con lo</p>
				</div>
			</div>
		</section>
		<section className="portafolio">
			<div className="contenedor">
				<h2 className="titulo">Galería</h2>
				<div className="galeria-port">
					<div className="imagen-port">
						<img src="./assets/img/img1.jpg" />
						<div className="hover-galeria">
							<img src="./assets/Sello1a.png" />
							<p>Nuestro trabajo</p>
						</div>
					</div>
					<div className="imagen-port">
						<img src="./assets/img/img2.jpg" />
						<div className="hover-galeria">
							<img src="./assets/Sello1a.png" />
							<p>Nuestro trabajo</p>
						</div>
					</div>
					<div className="imagen-port">
						<img src="./assets/img/img3.jpg" />
						<div className="hover-galeria">
							<img src="./assets/Sello1a.png" />
							<p>Nuestro trabajo</p>
						</div>
					</div>
					<div className="imagen-port">
						<img src="./assets/img/img4.jpg" />
						<div className="hover-galeria">
							<img src="./assets/Sello1a.png" />
							<p>Nuestro trabajo</p>
						</div>
					</div>
					<div className="imagen-port">
						<img src="./assets/img/img3.jpg" />
						<div className="hover-galeria">
							<img src="./assets/Sello1a.png" />
							<p>Nuestro trabajo</p>
						</div>
					</div>
					<div className="imagen-port">
						<img src="./assets/img/img6.jpg" />
						<div className="hover-galeria">
							<img src="./assets/Sello1a.png" />
							<p>Nuestro trabajo</p>
						</div>
					</div>
					<div className="imagen-port">
						<img src="./assets//img/img5.jpg" />
						<div className="hover-galeria">
							<img src="./assets/Sello1a.png" />
							<p>Nuestro trabajo</p>
						</div>
					</div>
					<div className="imagen-port">
						<img src="./assets/img/img8.jpg" />
						<div className="hover-galeria">
							<img src="./assets/Sello1a.png" />
							<p>Nuestro trabajo</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="clientes contenedor">
			<h2 className="titulo">Que dicen nuestros clientes</h2>
			<div className="cards">
				<div className="card">
					<img src="./assets/persona1.jpg" />
					<div className="contenido-textos-card">
						<h4>Nombre</h4>
						<p>n el lenguaje cotidiano, la palabra persona hace referencia a un ser con poder de raciocinio que posee </p>
					</div>
				</div>
				<div className="card">
					<img src="./assets/persona2.jpg" />
					<div className="contenido-textos-card">
						<h4>Nombre</h4>
						<p>n el lenguaje cotidiano, la palabra persona hace referencia a un ser con poder de raciocinio que posee </p>
					</div>
				</div>
			</div>
		</section>
		<section className="contactanos">
			<div className="contenedor">
				<h2 className="titulo">Cajónes en acción</h2>
				<div className="servicio-cont">
					<div className="servicio-ind">
						
						<h3>Nombre</h3>
						<p>El ejemplo excluyente suele ser el hombre, aunque algunos extienden el concepto a otras especies que pueblan este planeta.</p>
					</div>
					<div className="servicio-ind">
					
						<h3>Nombre</h3>
						<p>El ejemplo excluyente suele ser el hombre, aunque algunos extienden el concepto a otras especies que pueblan este planeta.</p>
					</div>
					<div className="servicio-ind">
						
						<h3>Nombre</h3>
						<p>El ejemplo excluyente suele ser el hombre, aunque algunos extienden el concepto a otras especies que pueblan este planeta.</p>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer>
		<div className="contenedor-footer">
			<div className="content-foo">
				<h4>Teléfono</h4>
				<p>2267161213</p>
			</div>
			<div className="content-foo">
				<h4>Email</h4>
				<p>asdj@sad.com</p>
			</div>
			<div className="content-foo">
				<h4>Ubicacion</h4>
				<p>Gral.Sararara</p>
			</div>
		</div>
		<h2 className="titulo-final">&copy; De Cajón | Flia. Juarez</h2>
	</footer>
    </>
  );
}

export default App;
