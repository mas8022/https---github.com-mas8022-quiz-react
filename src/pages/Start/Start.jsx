import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import context from "../../context";

export default function Start() {
  const contextStart = useContext(context);
  const [page, setPage] = useState(1);

  const [status, setStatus] = useState(() => {
    const localStatus = JSON.parse(localStorage.getItem("status"));
    return localStatus ? localStatus : "";
  });

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
  }, [status]);






  const nextPageHandler = () => {
    setPage((p) => p + 1);
  };

  return (
    <div className="start">
      {status === "home" ? (
        <>
          <Link to={"/quiz"} className="link">
            <img
              className="image home__image"
              src="../../../public/images/start.png"
              alt="sword"
            />
          </Link>
          <div className="start__selectSubject">
            <div
              onClick={() => contextStart.setSubject("sport")}
              className={
                contextStart.subject === "sport"
                  ? "start__selectSubject__item start__selectSubject__item--active"
                  : "start__selectSubject__item"
              }
            >
              <img
                className="image"
                src="../../../public/images/sport.svg"
                alt="sport"
              />
            </div>

            <div
              onClick={() => contextStart.setSubject("tv")}
              className={
                contextStart.subject === "tv"
                  ? "start__selectSubject__item start__selectSubject__item--active"
                  : "start__selectSubject__item"
              }
            >
              <img
                className="image"
                src="../../../public/images/tv.svg"
                alt="tv"
              />
            </div>
            <div
              onClick={() => contextStart.setSubject("tec")}
              className={
                contextStart.subject === "tec"
                  ? "start__selectSubject__item start__selectSubject__item--active"
                  : "start__selectSubject__item"
              }
            >
              <img
                className="image"
                src="../../../public/images/tec.svg"
                alt="technology"
              />
            </div>
            <div
              onClick={() => contextStart.setSubject("food")}
              className={
                contextStart.subject === "food"
                  ? "start__selectSubject__item start__selectSubject__item--active"
                  : "start__selectSubject__item"
              }
            >
              <img
                className="image"
                src="../../../public/images/food.svg"
                alt="food"
              />
            </div>
            <div
              onClick={() => contextStart.setSubject("animal")}
              className={
                contextStart.subject === "animal"
                  ? "start__selectSubject__item start__selectSubject__item--active"
                  : "start__selectSubject__item"
              }
            >
              <img
                className="image"
                src="../../../public/images/animal.svg"
                alt="animal"
              />
            </div>
            <div
              onClick={() => contextStart.setSubject("math")}
              className={
                contextStart.subject === "math"
                  ? "start__selectSubject__item start__selectSubject__item--active"
                  : "start__selectSubject__item"
              }
            >
              <img
                className="image"
                src="../../../public/images/math.svg"
                alt="math"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            className="image start__image"
            src="../../../public/images/questions.png"
            alt="questions"
          />

          <div className="shadow start__welcomeBox">
            <div className="start__welcomeBox__titleAndDesc">
              {page === 1 && (
                <>
                  <p className="start__welcomeBox__title">
                    Repudiandae ad tempora, voluptate sunt
                  </p>
                  <p className="start__welcomeBox__desc">
                    aperiam excepturi, facere vel, libero quas numquam dolorum
                    nihil quia. Dolorum, debitis earum!
                  </p>
                </>
              )}
              {page === 2 && (
                <>
                  {" "}
                  <p className="start__welcomeBox__title">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <p className="start__welcomeBox__desc">
                    A nobis consequuntur molestias assumenda modi corporis harum
                    possimus, accusantium excepturi dicta!
                  </p>
                </>
              )}
              {page === 3 && (
                <>
                  {" "}
                  <p className="start__welcomeBox__title">
                    exercitationem magnam sunt nulla eaque
                  </p>
                  <p className="start__welcomeBox__desc">
                    itaque, aspernatur repudiandae necessitatibus veritatis
                    molestias? Qui, recusandae a quia ipsam saepe sunt cum.
                  </p>
                </>
              )}
            </div>

            <div className="start__welcomeBox__nextShowPage">
              <div
                className={
                  page === 1
                    ? "start__welcomeBox__nextShowPage__item start__welcomeBox__nextShowPage__item--active"
                    : "start__welcomeBox__nextShowPage__item"
                }
              ></div>
              <div
                className={
                  page === 2
                    ? "start__welcomeBox__nextShowPage__item start__welcomeBox__nextShowPage__item--active"
                    : "start__welcomeBox__nextShowPage__item"
                }
              ></div>
              <div
                className={
                  page === 3
                    ? "start__welcomeBox__nextShowPage__item start__welcomeBox__nextShowPage__item--active"
                    : "start__welcomeBox__nextShowPage__item"
                }
              ></div>
            </div>

            {page === 4 ? (
              <div
                onClick={setStatus("home")}
                className="start__welcomeBox__nextBtn"
              >
                <img
                  className="image start__welcomeBox__nextBtn__image"
                  src="../../../public/images/tik.svg"
                  alt="start button"
                />
              </div>
            ) : (
              <div
                onClick={nextPageHandler}
                className="start__welcomeBox__nextBtn"
              >
                <img
                  className="image start__welcomeBox__nextBtn__image"
                  src="../../../public/images/arrow-right.svg"
                  alt="next button"
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
