import { useState } from "react";
import { Link } from "react-router-dom";
import { FetchSearch } from "../../utils/fetchSearch";

export const Menu = () => {
  const [searchValue, setSearchValue] = useState("");
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
  return (
    <>
      <div className="meal-menu">
        <Link className="meal-menu-link" to={"/"}>
          <div className="meal-menu-icons">
            <ion-icon name="home"></ion-icon>{" "}
          </div>
        </Link>
        <Link className="meal-menu-link" to={-1}>
          <div className="meal-menu-icons">
            <ion-icon name="play-back"></ion-icon>{" "}
          </div>
        </Link>
        <Link
          className="meal-menu-link"
          onClick={() => {
            window.location.href = "/random";
          }}
          to={"/random"}
        >
          <div className="meal-menu-icons">
            <ion-icon name="dice"></ion-icon>{" "}
          </div>
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
                      .includes(searchValue.toLowerCase());
                  })
                  .map((p) => (
                    <li key={p}>
                      <Link
                        className="menu-search-link"
                        reloadDocument
                        to={"/" + "search" + "/" + p}
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
      <div className="meal-menu-spacing"></div>
    </>
  );
};
