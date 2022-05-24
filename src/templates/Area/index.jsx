import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Area = () => {
  const area = useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    "meals",
  );
  return (
    <div className="meal-section">
      {area.length > 0 ? (
        <div className="meal-category meal-country">
          {area.map((p) => (
            <Link
              className="meal-card"
              to={"/area/" + p.strArea}
              key={p.strArea}
            >
              <h2>{p.strArea}</h2>
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
