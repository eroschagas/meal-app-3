import { useState } from "react";
import { Link } from "react-router-dom";
import { FetchSearch } from "../../utils/fetchSearch";
import Logo from "../../img/logo.svg";

export const Menu = () => {
  const [searchValue, setSearchValue] = useState("");
  const [mobileClass, setMobileClass] = useState({
    bars: "menu-bars-container",
    menu: "meal-menu-link-container",
  });
  const [animClass, setAnimClass] = useState({
    random: "",
    home: "",
    categories: "",
    region: "",
  });
  const [searchClass, setSearchClass] =
    useState("menu-input");
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const search = FetchSearch();

  const handleFocus = () => {
    setSearchClass("menu-input menu-input-focus");
  };

  const handleOnBlur = () => {
    setTimeout(function () {
      setSearchValue("");
    }, 200);
    setSearchClass("menu-input menu-input-not-focus");
  };

  const handleMenuChange = () => {
    if (mobileClass.bars === "menu-bars-container") {
      setMobileClass({
        ...mobileClass,
        bars: "menu-bars-container menu-change",
        menu: "meal-menu-link-container menu-display-appear",
      });
    } else {
      setMobileClass({
        ...mobileClass,
        bars: "menu-bars-container",
        menu: "meal-menu-link-container  menu-display-disappear",
      });
      setTimeout(function () {
        setMobileClass({
          ...mobileClass,
          bars: "menu-bars-container",
          menu: "meal-menu-link-container",
        });
      }, 400);
    }
  };
  const handleAnimationInRandom = () => {
    setAnimClass({
      random:
        "meal-menu-icons animate__animated animate__shakeX",
    });
  };
  const handleAnimationInHome = () => {
    setAnimClass({
      home: "meal-menu-icons animate__animated animate__jello",
    });
  };
  const handleAnimationInCategories = () => {
    setAnimClass({
      categories:
        "meal-menu-icons animate__animated animate__heartBeat",
    });
  };
  const handleAnimationInRegion = () => {
    setAnimClass({
      region:
        "meal-menu-icons animate__animated animate__swing",
    });
  };
  const handleAnimationOut = () => {
    setAnimClass({
      random: "",
      home: "",
      categories: "",
      region: "",
    });
  };
  return (
    <>
      <div className="meal-menu">
        <div
          className={mobileClass.bars}
          onClick={handleMenuChange}
        >
          <div className="menu-bar1"></div>
          <div className="menu-bar2"></div>
          <div className="menu-bar3"></div>
        </div>
        <img className="menu-logo" src={Logo} alt="Logo" />
        <div className={mobileClass.menu}>
          <Link
            onMouseEnter={handleAnimationInHome}
            onMouseLeave={handleAnimationOut}
            onClick={handleMenuChange}
            className="meal-menu-link"
            to={"/"}
          >
            <div
              className={
                "meal-menu-icons " + animClass.home
              }
            >
              <ion-icon name="home"></ion-icon>{" "}
            </div>
            <h1>Home</h1>
          </Link>
          <Link
            onMouseEnter={handleAnimationInCategories}
            onMouseLeave={handleAnimationOut}
            onClick={handleMenuChange}
            className="meal-menu-link"
            to={"/categories"}
          >
            <div
              className={
                "meal-menu-icons " + animClass.categories
              }
            >
              <ion-icon name="grid"></ion-icon>{" "}
            </div>
            <h1>Categories</h1>
          </Link>
          <Link
            onMouseEnter={handleAnimationInRegion}
            onMouseLeave={handleAnimationOut}
            onClick={handleMenuChange}
            className="meal-menu-link"
            to={"/area"}
          >
            <div
              className={
                "meal-menu-icons " + animClass.region
              }
            >
              <ion-icon name="map"></ion-icon>{" "}
            </div>
            <h1>Region</h1>
          </Link>
          <Link
            onMouseEnter={handleAnimationInRandom}
            onMouseLeave={handleAnimationOut}
            className="meal-menu-link"
            to={"/redirrandom"}
            onClick={handleMenuChange}
          >
            <div
              className={
                "meal-menu-icons " + animClass.random
              }
            >
              <ion-icon name="dice"></ion-icon>{" "}
            </div>
            <h1>Random</h1>
          </Link>
          <div className="menu-search">
            <input
              className={searchClass}
              type="search"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search 🔎︎"
              onFocus={handleFocus}
              onBlur={handleOnBlur}
            />
            {searchValue.length > 0 && search != null ? (
              <div className="menu-search-complete">
                <ul>
                  {search
                    .filter((p) => {
                      return p
                        .toLowerCase()
                        .includes(
                          searchValue.toLowerCase(),
                        );
                    })
                    .map((p) => (
                      <li key={p}>
                        <Link
                          onClick={handleMenuChange}
                          className="menu-search-link"
                          to={"/" + "redirsearch" + "/" + p}
                        >
                          {p}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="meal-menu-spacing"></div>
    </>
  );
};
