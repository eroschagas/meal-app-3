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

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="*" element={<Void />} />
      <Route path="/random" element={<Random />} />
      <Route path="/:category/:meal" element={<Meal />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
);
