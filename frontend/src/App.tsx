import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Banks from './pages/Banks';
import Deposit from './pages/Deposit';
import Initial from './pages/Initial';
import Pool from './pages/Pool';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Initial />,
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
