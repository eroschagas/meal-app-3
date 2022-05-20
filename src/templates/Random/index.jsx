import { Recipe } from "../../components/Recipe";
import { useFetch } from "../../hooks/useFetch";

export const Random = () => {
  const rec = useFetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    "meals",
  );
  console.log(rec);
  return <Recipe rec={rec} />;
};
