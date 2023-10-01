import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import routes from './routes'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

