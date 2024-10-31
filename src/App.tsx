import {Home} from './pages/Home.tsx';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </main>

        </div>
    );
}

export default App
