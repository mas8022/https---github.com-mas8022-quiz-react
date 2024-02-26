import Finish from "./pages/Finish/Finish";
import Quiz from "./pages/Quiz/Quiz";
import Start from "./pages/Start/Start";

const routesArray = [
  { path: "/", element: <Start /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/finish", element: <Finish /> },
];

export default routesArray;
