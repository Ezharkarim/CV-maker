import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CvTemplates from './pages/CvTemplates';
import ResumeTemplate from './pages/ResumeTemplate';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cvtemplates" element={<CvTemplates />}></Route>
        <Route path='resumetemplate' element={<ResumeTemplate/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
