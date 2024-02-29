import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import context from "../../context";
import shuffleArray from "../../../utils";
export default function Quiz() {
  const contextQuiz = useContext(context);

  const [questions, setQuestions] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (contextQuiz.data) {
      let shuffleArrays = contextQuiz.data[contextQuiz.subject].questions;
      shuffleArray(shuffleArrays);
      setQuestions(shuffleArrays.slice(0, 4));
    }
  }, [contextQuiz.data]);

  const selectHandler = async (item) => {
    if (item.correct) {
      await setNum((p) => (p = p + 1));
      await contextQuiz.setCorrectAnswer((p) => (p = p + 1));
      if (num === 3) {
        location.pathname = "/finish";
      }
    }
  };
  return questions[num] ? (
    <div className="quiz">
      <div className="quiz__questionBox">{questions[num].question}</div>
      <div className="quiz__answersBox">
        {questions[num].options?.map((item) => (
          <div
            key={item.text}
            onClick={() => selectHandler(item)}
            className="quiz__answersBox__answerBtn"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
