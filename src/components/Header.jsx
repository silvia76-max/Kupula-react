import "../styles/Header.css"; // Asegúrate de importar el archivo CSS

const Header = () => {
  return (
    <header className="header">
      <h1>Akademia La Kúpula</h1>
      <img src="../assets/images/vinilo-logo.png" alt="Logo de Akademia La Kúpula" className="logo" />
      <nav>
        <a href="#inicio" className="hover:text-white">Inicio</a>
        <a href="#cursos" className="hover:text-white">Cursos</a>
        <a href="#sobre" className="hover:text-white">Sobre nosotros</a>
        <a href="#contacto" className="hover:text-white">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
