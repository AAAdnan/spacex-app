import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { HomePage }from './pages/HomePage'
import { LaunchListPage }from './pages/LaunchListPage'
import { RocketListPage }from './pages/RocketListPage'
import { RocketCardDetailPage }from './pages/RocketCardDetailPage'
import { LaunchCardDetailPage }from './pages/LaunchCardDetailPage'
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
          <Route path="/launches/:id" element={<LaunchCardDetailPage />} />
          <Route exact path="/rockets" element={<RocketListPage />}  />
          <Route path="/rockets/:id" element={<RocketCardDetailPage />} />
        </Routes>
    </div>
  );
}

export default App;
