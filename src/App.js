import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainBlock from './components/MainBlock/MainBlock';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainBlock/>} />
      </Routes>
    </div>
  );
}

export default App;
