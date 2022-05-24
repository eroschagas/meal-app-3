import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.svg";
export const Home = () => {
  const [classSocial, setClassSocial] =
    useState("social-box");
  const handleSocialOn = () => {
    setClassSocial("social-box social-box-on");
  };
  const handleSocialOff = () => {
    setClassSocial("social-box");
  };
  return (
    <div className="meal-home">
      <img src={Logo} alt="Logo" />
      <p>
        Find Your Meal is a portfolio website made by{" "}
        <span onMouseEnter={handleSocialOn}>
          Eros Chagas{" "}
          <div
            onMouseLeave={handleSocialOff}
            className={classSocial}
          >
            <div className="social-wrap">
              <div className="social-logo">
                <a
                  target="_blank"
                  href="https://www.instagram.com/eros.chagas"
                  rel="noreferrer"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
              <div className="social-logo">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/eros-chagas-b93911b3/"
                  rel="noreferrer"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
              <div className="social-logo">
                <a
                  target="_blank"
                  href="https://github.com/eroschagas"
                  rel="noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>{" "}
        </span>{" "}
        using the{" "}
        <span>
          <a
            target="_blank"
            href="https://www.themealdb.com/api.php"
            rel="noreferrer"
          >
            {" "}
            Meal DB API
          </a>
        </span>
        .
        <br /> Hope you find your meal!
      </p>
      <Link className="home-card" to={"/categories"}>
        Categories
      </Link>
      <Link className="home-card" to={"/area"}>
        Region
      </Link>
    </div>
  );
};
