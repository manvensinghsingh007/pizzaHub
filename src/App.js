import "./App.css";
import Container from "./Components/Container";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        {/* handling edge cases */}
        <Router>
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
