import PropTypes from "prop-types";

export const Recipe = (props) => {
  const p = props.rec[0];

  return (
    <div>
      {props.rec.length > 0 ? (
        <div className="meal-recipe">
          <div className="meal-info">
            <h1>{p.strMeal}</h1>
            <p>Cuisine: {p.strArea}</p>
            <img src={p.strMealThumb} alt={p.strMeal} />
            <p>Try another recipe:</p>
            <a
              className="meal-recipe-youtube"
              href={
                "https://www.youtube.com/results?search_query=how+to+make+" +
                p.strMeal
              }
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </div>
          <div className="meal-ingredients-wrapper">
            <div className="meal-ingredients-title">
              <h2>Ingredients</h2>
            </div>
            <div className="meal-inner-ingredients-wrapper">
              {Array.from(Array(20), (e, i) => {
                if (
                  p["strIngredient" + (i + 1)] !== "" &&
                  p["strIngredient" + (i + 1)] !== null
                ) {
                  return (
                    <a
                      target="_blank"
                      href={
                        "https://www.google.com/search?q=" +
                        p["strIngredient" + (i + 1)]
                      }
                      className="meal-ingredients"
                      key={i}
                      rel="noreferrer"
                    >
                      <p>
                        {p[
                          "strMeasure" + (i + 1)
                        ][0].toUpperCase() +
                          p["strMeasure" + (i + 1)].slice(
                            1,
                          )}
                      </p>
                      <img
                        src={
                          "https://www.themealdb.com/images/ingredients/" +
                          p[
                            "strIngredient" + (i + 1)
                          ][0].toUpperCase() +
                          p[
                            "strIngredient" + (i + 1)
                          ].slice(1) +
                          "-Small.png"
                        }
                        alt=""
                      />
                      <p>
                        {p[
                          "strIngredient" + (i + 1)
                        ][0].toUpperCase() +
                          p[
                            "strIngredient" + (i + 1)
                          ].slice(1)}
                      </p>
                    </a>
                  );
                }
              })}{" "}
            </div>
          </div>
          <div className="meal-instructions">
            <h2>How to make:</h2>
            <p>{p.strInstructions}</p>
          </div>
          <div className="meal-video">
            {p.strYoutube.length > 0 ? (
              <iframe
                allowFullScreen
                frameBorder="0"
                src={
                  "https://www.youtube.com/embed/" +
                  p.strYoutube.substr(
                    p.strYoutube.length - 11,
                  )
                }
                width="100%"
                height="100%"
              ></iframe>
            ) : (
              <iframe
                allowFullScreen
                frameBorder="0"
                src="https://www.youtube.com/embed/O5rYsoAZ_sk"
                width="100%"
                height="100%"
              ></iframe>
            )}
          </div>
        </div>
      ) : (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

Recipe.propTypes = {
  rec: PropTypes.array.isRequired,
};
