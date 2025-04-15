
const Header = () => {
  return (
    <header className="bg-negro text-dorado px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Akademia La Kúpula</h1>
      <nav className="space-x-4">
        <a href="#inicio" className="hover:text-white">Inicio</a>
        <a href="#cursos" className="hover:text-white">Cursos</a>
        <a href="#sobre" className="hover:text-white">Sobre nosotros</a>
        <a href="#contacto" className="hover:text-white">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
