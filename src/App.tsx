import {Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Project/Projects.tsx';
import { Contact } from './pages/Contact';
import {GitHubProjects} from "./services/getUserRepositories.tsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/github-projects" element={<GitHubProjects />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
