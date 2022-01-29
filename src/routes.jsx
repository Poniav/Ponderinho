import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './layout/app';
import Academy from './layout/academy';
import Game from './layout/search/wallet';
import Home from './layout/home';
import NotFound from './layout/notfound';
import 'bootstrap/dist/css/bootstrap.min.css';

function Root() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="academy" element={<Academy />}>
              <Route path=":academyId" element={<Academy />} />
            </Route>
            <Route path="game" element={<Game />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default Root;

// export default => () {
//   return(<Routes>
//     <Route path="/" element={<App />}>
//       <Route index element={<Home />} />
//       <Route path="academy" element={<Academy />}>
//         <Route path=":academyId" element={<Academy />} />
//       </Route>
//       <Route path="game" element={<Game />} />
//     </Route>
//     <Route path="*" element={<NotFound />} />
//   </Routes>)
// }
