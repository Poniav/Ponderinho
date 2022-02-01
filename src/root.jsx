import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './layout/app';
import Prices from './layout/market/prices';
import Wallet from './layout/search/wallet';
import Vault from './layout/vault';
import API from './layout/api';
import Home from './layout/home';
import NotFound from './layout/notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';

function Root() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="prices" element={<Prices />}>
              {/* <Route path=":academyId" element={<Academy />} /> */}
            </Route>
            <Route path="vault" element={<Vault />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="api" element={<API />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default Root;
