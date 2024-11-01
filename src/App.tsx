import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
    const location = useLocation();

    return (
        <Flowbite>
            <div className={`flex flex-col min-h-screen ${computedMode === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
                <Header />
                <main className="flex-grow">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route
                                path="/"
                                element={
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                                        <Home />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                                        <About />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/skills"
                                element={
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                                        <Skills />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/projects"
                                element={
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                                        <Projects />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/contact"
                                element={
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                                        <Contact />
                                    </motion.div>
                                }
                            />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </Flowbite>
    );
}

export default App;
