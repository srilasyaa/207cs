import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resume from './components/resume';
import Qualifications from './components/qualifications';
import Skill from './components/technicalskills';
import Awards from './components/awards';
import Certificates from './components/certificates';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-brown">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">Your Brand</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Resume</Link>
                <Link className="nav-link" to="/qualifications">Qualifications</Link>
                <Link className="nav-link" to="/skill">Technicalskills</Link>
                <Link className="nav-link" to="/certificates">Certificates</Link>
                <Link className="nav-link" to="/awards">Awards</Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Resume />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/skill" element={<Skill />} />
          <Route exact path="/certificates" element={<Certificates />} />
          <Route exact path="/awards" element={<Awards />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
