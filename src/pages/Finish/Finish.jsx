import { useContext, useEffect, useState } from "react";
import context from "../../context";
export default function Finish() {
  const contextFinish = useContext(context);
  const [score, setScore] = useState();

  useEffect(() => {
 
    if (!isNaN(contextFinish.correctAnswer)) {
      setScore(
        Math.ceil((contextFinish.correctAnswer / 4) * 100)
      );
    }
  }, []);

  return (
    <div className="finish">
      <p className="finish__title">finish the game</p>
      <p className="finish__score">%{score}</p>
      <div
        onClick={() => (location.pathname = "/")}
        className="finish__backBtn"
      >
        back
      </div>
    </div>
  );
}
