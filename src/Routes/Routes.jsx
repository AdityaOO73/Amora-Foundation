// Routes/Routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Campaigns from '../Pages/Campaigns';
import Donate from '../Pages/Donate';
import Contact from '../Pages/Contact';
import App from '../App';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/campaigns', element: <Campaigns /> },
      { path: '/donate', element: <Donate /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);
