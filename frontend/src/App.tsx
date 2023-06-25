import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Banks from './pages/Banks';
import Deposit from './pages/Deposit';
import Initial from './pages/Initial';
import Pool from './pages/Pool';
import Status from './pages/Status';
function App() {
  const router = createBrowserRouter([
    {
      path: process.env.PUBLIC_URL + '/',
      element: <Initial />,
    },
    {
      path: process.env.PUBLIC_URL + '/status/:name',
      element: <Status />,
    },
    {
      path: process.env.PUBLIC_URL + '/banks',
      element: <Banks />,
    },
    {
      path: process.env.PUBLIC_URL + '/pool/:name',
      element: <Pool />,
    },
    {
      path: process.env.PUBLIC_URL + '/deposit/:name',
      element: <Deposit />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
