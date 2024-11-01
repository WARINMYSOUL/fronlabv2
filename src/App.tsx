import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Project/Projects';
import { Contact } from './pages/Contact';
import { Flowbite, useThemeMode } from "flowbite-react";

function App() {
    const { computedMode } = useThemeMode();

    return (
        <Flowbite>
            <div className={`flex flex-col min-h-screen ${computedMode === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Flowbite>
    );
}

export default App;
