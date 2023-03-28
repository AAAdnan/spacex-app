import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { HomePage }from './pages/HomePage'
import { LaunchListPage }from './pages/LaunchListPage'
import { RocketListPage }from './pages/RocketListPage'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './globalStyles';
import './App.css';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/launches" element={<LaunchListPage />}  />
          <Route exact path="/rockets" element={<RocketListPage />}  />
        </Routes>
    </div>
  );
}

export default App;
