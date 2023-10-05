import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CvTemplates from './pages/CvTemplates';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cvtemplates" element={<CvTemplates />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
