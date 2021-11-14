import { BrowserRouter } from 'react-router-dom';
import ShopingCartProvider from './context/ShoppingCart';
import PageRouter from './pages';

function App() {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
    </ShopingCartProvider>
  );
}

export default App;
