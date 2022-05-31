import { useParams } from "react-router-dom";
import { Recipe } from "../../components/Recipe";
import { useFetch } from "../../hooks/useFetch";

export const Meal = () => {
  const meal = useParams();
  const rec = useFetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
      meal.meal,
    "meals",
  );
  return <Recipe rec={rec} />;
};
