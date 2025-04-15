
const Footer = () => {
  return (
    <footer className="bg-black text-dorado text-center py-6 mt-12">
      <p className="mb-2">&copy; {new Date().getFullYear()} Akademia La Kúpula. Todos los derechos reservados.</p>
      <div className="space-x-4">
        <a href="#" className="hover:text-white">Instagram</a>
        <a href="#" className="hover:text-white">WhatsApp</a>
        <a href="#" className="hover:text-white">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
