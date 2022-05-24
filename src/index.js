import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./templates/Home";
import { Category } from "./templates/Category";
import { Meal } from "./templates/Meal";
import { Void } from "./templates/Void";
import { Menu } from "./components/Menu";
import { Random } from "./templates/Random";
import { Redirrandom } from "./utils/Redirection/Redirrandom";
import { Redirsearch } from "./utils/Redirection/Redirsearch";
import { Categories } from "./templates/Categories";
import { Area } from "./templates/Area";
import { Country } from "./templates/Country";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="*" element={<Void />} />
      <Route
        path="/redirrandom"
        element={<Redirrandom />}
      />
      <Route
        path="/redirsearch/:params"
        element={<Redirsearch />}
      />
      <Route path="/random" element={<Random />} />
      <Route path="/:category/:meal" element={<Meal />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/area" element={<Area />} />
      <Route path="/area/:country" element={<Country />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
);
