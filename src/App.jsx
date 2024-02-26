import { json, useRoutes } from "react-router-dom";
import routesArray from "./Routes";
import context from "./context";
import { useEffect, useState } from "react";

function App() {
  const routes = useRoutes(routesArray);
  const [subject, setSubject] = useState(() => {
    const localSubject = JSON.parse(localStorage.getItem("subject"));
    return localSubject ? localSubject : "";
  });

  useEffect(() => {
    localStorage.setItem("subject", JSON.stringify(subject));
  }, [subject]);

  return (
    <context.Provider value={{ subject, setSubject }}>
      <div className="App">{routes}</div>
    </context.Provider>
  );
}

export default App;
