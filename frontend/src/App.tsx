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
      path: '/',
      element: <Initial />,
    },
    {
      path: '/status',
      element: <Status />,
    },
    {
      path: '/banks',
      element: <Banks />,
    },
    {
      path: '/pool/:name',
      element: <Pool />,
    },
    {
      path: '/deposit/:name',
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
