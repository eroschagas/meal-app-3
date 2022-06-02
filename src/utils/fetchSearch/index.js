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

  const beefNames = fetchBeef.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const chickenNames = fetchChicken.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const dessertNames = fetchDessert.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const lambNames = fetchLamb.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const miscellaneousNames = fetchMiscellaneous.map(
    (p) => ({
      strMeal: p.strMeal,
      idMeal: p.idMeal,
    }),
  );
  const pastaNames = fetchPasta.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const porkNames = fetchPork.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const seaFoodNames = fetchSeafood.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const sideNames = fetchSide.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const starterNames = fetchStarter.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const veganNames = fetchVegan.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const vegetarianNames = fetchVegetarian.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const breakfastNames = fetchBreakfast.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
  const goatNames = fetchGoat.map((p) => ({
    strMeal: p.strMeal,
    idMeal: p.idMeal,
  }));
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
