import { useFetch } from "../../hooks/useFetch";

export const FetchSearch = () => {
  const fetchBeef = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
    "meals",
  );
  const fetchChicken = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",
    "meals",
  );
  const fetchDessert = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
    "meals",
  );
  const fetchLamb = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb",
    "meals",
  );
  const fetchMiscellaneous = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous",
    "meals",
  );
  const fetchPasta = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta",
    "meals",
  );
  const fetchPork = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",
    "meals",
  );
  const fetchSeafood = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
    "meals",
  );
  const fetchSide = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side",
    "meals",
  );
  const fetchStarter = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter",
    "meals",
  );
  const fetchVegan = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan",
    "meals",
  );
  const fetchVegetarian = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian",
    "meals",
  );
  const fetchBreakfast = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast",
    "meals",
  );
  const fetchGoat = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat",
    "meals",
  );

  const beefNames = fetchBeef.map((p) => p.strMeal);
  const chickenNames = fetchChicken.map((p) => p.strMeal);
  const dessertNames = fetchDessert.map((p) => p.strMeal);
  const lambNames = fetchLamb.map((p) => p.strMeal);
  const miscellaneousNames = fetchMiscellaneous.map(
    (p) => p.strMeal,
  );
  const pastaNames = fetchPasta.map((p) => p.strMeal);
  const porkNames = fetchPork.map((p) => p.strMeal);
  const seaFoodNames = fetchSeafood.map((p) => p.strMeal);
  const sideNames = fetchSide.map((p) => p.strMeal);
  const starterNames = fetchStarter.map((p) => p.strMeal);
  const veganNames = fetchVegan.map((p) => p.strMeal);
  const vegetarianNames = fetchVegetarian.map(
    (p) => p.strMeal,
  );
  const breakfastNames = fetchBreakfast.map(
    (p) => p.strMeal,
  );
  const goatNames = fetchGoat.map((p) => p.strMeal);
  const fetchNames = [
    ...beefNames,
    ...chickenNames,
    ...dessertNames,
    ...lambNames,
    ...miscellaneousNames,
    ...pastaNames,
    ...porkNames,
    ...seaFoodNames,
    ...sideNames,
    ...starterNames,
    ...veganNames,
    ...vegetarianNames,
    ...breakfastNames,
    ...goatNames,
  ];
  return fetchNames;
};
