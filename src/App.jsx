import { useRoutes } from "react-router-dom";
import routesArray from "./Routes";
import context from "./context";
import { useEffect, useState } from "react";
import useSWR from "swr";

window.reload;

function App() {
  const routes = useRoutes(routesArray);
  const [subject, setSubject] = useState(() => {
    const localSubject = JSON.parse(localStorage.getItem("subject"));
    return localSubject ? localSubject : "";
  });
  const [correctAnswer, setCorrectAnswer] = useState(() => {
    const localCorrectAnswer = JSON.parse(
      localStorage.getItem("correctAnswer")
    );
    return localCorrectAnswer ? localCorrectAnswer : 0;
  });
  const [mistakes, setMistakes] = useState(() => {
    const localMistakes = JSON.parse(localStorage.getItem("mistakes"));
    return localMistakes ? localMistakes : [];
  });
  const { data } = useSWR("questions", () =>
    fetch("http://localhost:3031/subjects").then((res) => res.json())
  );

  useEffect(() => {
    localStorage.setItem("mistakes", JSON.stringify(mistakes));
  }, [mistakes]);

  useEffect(() => {
    localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));
  }, [correctAnswer]);

  useEffect(() => {
    localStorage.setItem("subject", JSON.stringify(subject));
  }, [subject]);

  return (
    <context.Provider
      value={{
        data,
        subject,
        setSubject,
        correctAnswer,
        setCorrectAnswer,
        mistakes,
        setMistakes,
      }}
    >
      <div className="App">{routes}</div>
    </context.Provider>
  );
}

export default App;
