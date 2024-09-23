import Navbar from '../NavBar'; // Asegúrate de que la ruta sea correcta

export default function Contacto() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido de la página */}
      <main className="flex flex-col items-center py-12 px-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl font-bold mt-12">Contacto</h1>
        <p className="text-lg sm:text-xl mt-4">Estamos ubicados en Villa del Rosario, Córdoba, Argentina.</p>
        
        <form className="mt-8 max-w-md w-full">
          <input
            type="text"
            placeholder="Nombre"
            className="p-2 mb-4 bg-gray-800 border border-gray-700 rounded w-full"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="p-2 mb-4 bg-gray-800 border border-gray-700 rounded w-full"
          />
          <textarea
            placeholder="Mensaje"
            className="p-2 mb-4 bg-gray-800 border border-gray-700 rounded w-full"
            rows={4}
          ></textarea>
          <button className="px-4 py-2 bg-red-600 rounded transition-all hover:bg-red-700 w-full">Enviar</button>
        </form>
      </main>

      {/* Footer */}
      <footer className="footer-bg w-full py-4 text-white text-center">
        <p>&copy; 2024 Sociedad Italiana. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}