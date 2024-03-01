import { useContext, useEffect, useState } from "react";
import context from "../../context";
import shuffleArray from "../../../utils";
export default function Quiz() {
  const contextQuiz = useContext(context);

  const [questions, setQuestions] = useState([]);
  const [num, setNum] = useState(0);
  const [time, setTime] = useState(45);

  useEffect(() => {
    setInterval(() => {
      setTime((p) => (p = p - 1));
    }, 1000);
  }, []);

  useEffect(() => {
    if (time === 0) {
      location.pathname = "/finish";
    }
  }, [time]);

  useEffect(() => {
    if (contextQuiz.data) {
      let shuffleArrays = contextQuiz.data[contextQuiz.subject].questions;
      shuffleArray(shuffleArrays);
      setQuestions(shuffleArrays.slice(0, 4));
    }
  }, [contextQuiz.data]);

  const selectHandler = async (item, q) => {
    await setNum((p) => (p = p + 1));
    if (item.correct) {
      await contextQuiz.setCorrectAnswer((p) => (p = p + 1));
    } else {
      console.log('f');
      contextQuiz.setMistakes((p) => [...p, q]);
    }
    if (num === 3) {
      location.pathname = "/finish";
    }
  };
  return questions[num] ? (
    <div className="quiz">
      <div className="quiz__questionBox">{questions[num].question}</div>

      <div className="time">{time}s</div>

      <div className="quiz__answersBox">
        {questions[num].options?.map((item) => (
          <div
            key={item.text}
            onClick={() => selectHandler(item, questions[num])}
            className="quiz__answersBox__answerBtn"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
