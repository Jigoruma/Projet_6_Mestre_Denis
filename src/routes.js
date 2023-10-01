import Home from './pages/Home/Home';
import About from './pages/About/About';
import FicheLogement from './pages/FicheLogement/FicheLogement';
import Error from './pages/Error/Error';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/logement/:id", element: <FicheLogement /> },
  { path: "*", element: <Error /> }
];

export default routes;
