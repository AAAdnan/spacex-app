import logo from './logo.svg';
import { LaunchListPage } from './pages/LaunchListPage'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import './App.css';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/launches" element={<LaunchListPage />}  />
        </Routes>
    </div>
  );
}

export default App;
