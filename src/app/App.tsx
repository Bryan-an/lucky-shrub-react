import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/widgets/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:productId',
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
