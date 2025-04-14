import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-negro min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
      {/* Aquí irán las demás secciones */}
      <main className="p-8">
        <h2 className="text-dorado text-3xl font-semibold mb-4">Bienvenida a Akademia La Kúpula</h2>
        <p>Formación estética presencial y online con elegancia y profesionalidad.</p>
      </main>
    </div>
  );
}

export default App;