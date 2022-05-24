import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Categories = () => {
  const cat = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    "categories",
  );

  return (
    <div className="meal-section">
      {cat.length > 0 ? (
        <div className="meal-category">
          {cat.map((p) => (
            <Link
              className="meal-card"
              to={"/" + p.strCategory}
              key={p.idCategory}
            >
              <h1>{p.strCategory}</h1>
              <img
                src={p.strCategoryThumb}
                alt={p.strCategory}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};
