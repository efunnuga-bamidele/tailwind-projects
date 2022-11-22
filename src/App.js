import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import ErrorPage from './pages/error/error.page';
import EmailSubscription from './pages/email-subscription/email-subscription';
import PriceGrid from './pages/pricing-grid/pricing-grid';
import ProductModal from './pages/product-modal/product-modal';
import ImageGallery from './pages/image-gallery/image-gallery';
import LoginModal from './pages/login-modal/login-modal';

import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      children:[
        {
          path:'/',
          element: <Home />,
        },
        {
          path:'/email-subscription',
          element: <EmailSubscription />,
        }
        ,
        {
          path:'/pricing-grid',
          element: <PriceGrid />,
        },
        {
          path:'/product-modal',
          element: <ProductModal />,
        },
        {
          path:'/image-gallery',
          element: <ImageGallery />,
        },
        {
          path:'/login-modal',
          element: <LoginModal />,
        }
      ],
      errorElement: <ErrorPage />
    }
  ])
    return (
      <RouterProvider router={router} />        
    );
}

export default App;
