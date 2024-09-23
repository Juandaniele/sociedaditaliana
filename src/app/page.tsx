import Navbar from './NavBar';
import DisciplineCard from './DisciplineCard'; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Barra de navegación */}
      <Navbar />

      {/* Header */}
      <header className="w-full bg-black text-white py-8 text-center px-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="text-green-600">Socie</span>
          <span className="text-white">dad Ita</span>
          <span className="text-red-600">liana</span>
        </h1>
        <p className="text-lg sm:text-xl mt-2">Club Social y Deportivo en Villa del Rosario, Córdoba</p>
      </header>

      {/* Sección principal */}
      <main className="flex flex-col items-center py-12 px-4 sm:px-8 lg:px-16">
        {/* Bienvenida */}
        <section className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Bienvenido a Nuestro Club</h2>
          <p className="text-base sm:text-lg mt-4 max-w-2xl text-gray-400">
            En Sociedad Italiana, ofrecemos una variedad de disciplinas deportivas y eventos sociales para toda la comunidad. ¡Únete a nosotros y sé parte de la familia!
          </p>
        </section>

        {/* Tabs de Disciplinas Deportivas */}
        <section className="w-full max-w-5xl mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Disciplinas Deportivas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards de disciplinas */}
            <DisciplineCard
              title="Handball"
              description="Disfruta de un deporte dinámico y emocionante, adecuado para todas las edades."
              borderColor="border-green-600" // Bordes verdes
            />
            <DisciplineCard
              title="Voley"
              description="Únete a nuestros equipos y participa en ligas locales de voleibol."
              borderColor="border-white" // Bordes blancos
            />
            <DisciplineCard
              title="Patin"
              description="Clases de patinaje para todos los niveles en nuestras instalaciones."
              borderColor="border-red-600" // Bordes rojos
            />
            <DisciplineCard
              title="Taekwondo"
              description="Entrenamiento de taekwondo para niños y adultos, fomenta la disciplina y el respeto."
              borderColor="border-green-600" // Bordes verdes
            />
            <DisciplineCard
              title="Gimnasio"
              description="Acceso a equipos modernos y clases de fitness grupales."
              borderColor="border-white" // Bordes blancos
            />
            <DisciplineCard
              title="Danza"
              description="Clases de danza para todas las edades, desde ballet hasta danzas folclóricas."
              borderColor="border-red-600" // Bordes rojos
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-bg w-full py-4 text-white text-center">
          <p>&copy; 2024 Sociedad Italiana. Todos los derechos reservados.</p>
        </footer>
      </main>
    </div>
  );
}
