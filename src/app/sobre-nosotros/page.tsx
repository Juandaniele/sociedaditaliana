import Navbar from '../NavBar'; // Asegúrate de que la ruta sea correcta

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido de la página */}
      <main className="flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold mt-12">Sobre Nosotros</h1>
        <p className="text-lg mt-4 max-w-2xl text-gray-400 text-center">
          La Sociedad Italiana es un club con más de 100 años de historia en Villa del Rosario, promoviendo el deporte y la cultura a través de nuestras actividades. 
          Nuestro objetivo es crear un espacio donde la comunidad pueda reunirse, disfrutar de diversas disciplinas y celebrar nuestras tradiciones.
        </p>
        <div className="mt-8 max-w-3xl text-gray-400 text-center">
          <p>
            A lo largo de los años, hemos visto crecer a generaciones de deportistas y entusiastas de la cultura. Nos enorgullece ser un punto de encuentro para todos, 
            sin importar la edad o el nivel de habilidad. 
          </p>
          <p className="mt-4">
            Te invitamos a ser parte de nuestra familia, participar en nuestras actividades y disfrutar de lo que la Sociedad Italiana tiene para ofrecer.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-bg w-full py-4 text-white text-center">
        <p>&copy; 2024 Sociedad Italiana. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
