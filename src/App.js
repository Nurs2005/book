import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainBlock from './components/MainBlock/MainBlock';
import WishMainBlock from './components/WishMainBlock/WishMainBlock';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainBlock/>} />
        <Route path="/WishList" element={<WishMainBlock/>} />
      </Routes>
    </div>
  );
}

export default App;
