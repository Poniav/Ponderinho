import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./routes/app";
import Academy from "./routes/academy";
import Game from "./routes/game";
import Home from "./routes/home";
import NotFound from "./routes/notfound";
import "bootstrap/dist/css/bootstrap.min.css";

function Root() {
  return (
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
  );
}

export default Root;
