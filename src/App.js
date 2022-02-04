import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";

import './assets/fonts/Roboto/stylesheet.css';
import './assets/sass/style.sass';

function App() {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/item/:id" element={<ItemPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;