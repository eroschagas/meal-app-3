import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Menu = () => {
  const [searchValue, setSearchValue] = useState("");
  var searchUrl = "none";
  if (searchValue.length > 0) {
    searchUrl =
      "https://www.themealdb.com/api/json/v1/1/search.php?f=" +
      searchValue.toLocaleLowerCase().substring(0, 1);
  }
  const search = useFetch(searchUrl, "meals");
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  useEffect(() => {
    console.log(search);
    console.log(searchUrl);
  }, [searchUrl, search]);

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
            className="menu-input"
            type="search"
            value={searchValue}
            onChange={handleChange}
            placeholder="Search"
          />
          {searchValue.length > 0 && search != null ? (
            <div className="menu-search-complete">
              <ul>
                {search
                  .filter((p) => {
                    return p.strMeal
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
                  })
                  .map((p) => (
                    <li key={p.idMeal}>
                      <Link
                        reloadDocument
                        to={
                          "/" +
                          p.strCategory +
                          "/" +
                          p.strMeal
                        }
                      >
                        {p.strMeal}
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
