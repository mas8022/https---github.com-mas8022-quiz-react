import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Quiz() {
  // const [num, setNum] = useState(0);

  const { data, err } = useSWR("questions", () => fetch('http://localhost:3031/subjects').then(res => res.json()).then(data => console.log(data)));

  useEffect(() => {
    console.log('load');
    if (err) {
      console.log(data);
    }else{
      console.log(err);
    }
  }, []);

  // const answerHandler = () => {};

  return (
    <div className="quiz">
      <div className="quiz__questionBox">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquid
        consectetur corporis voluptatum. Placeat deserunt rem vero
        necessitatibus harum eveniet.
      </div>
      <div className="quiz__answersBox">
        <div className="quiz__answersBox__answerBtn">asdsdasdsD</div>
        <div className="quiz__answersBox__answerBtn">SADS EDQE</div>
        <div className="quiz__answersBox__answerBtn">asdsdD</div>
        <div className="quiz__answersBox__answerBtn">DSas sDSD</div>
      </div>
    </div>
  );
}
