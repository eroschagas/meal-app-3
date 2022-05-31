import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Category = () => {
  const cat = useParams();
  const meal = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
      cat.category,
    "meals",
  );
  return (
    <div>
      {meal.length > 0 ? (
        <div className="meal-category">
          {meal.map((p) => (
            <Link
              className="meal-card"
              to={"/" + cat.category + "/" + p.idMeal}
              key={p.idMeal}
            >
              <h2>{p.strMeal}</h2>
              <img src={p.strMealThumb} alt={p.strMeal} />
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
