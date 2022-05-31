import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Country = () => {
  const country = useParams();
  const meal = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=" +
      country.country,
    "meals",
  );
  return (
    <div className="meal-section">
      {meal.length > 0 ? (
        <div className="meal-category">
          {meal.map((p) => (
            <Link
              className="meal-card"
              to={"/region/" + p.idMeal}
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
