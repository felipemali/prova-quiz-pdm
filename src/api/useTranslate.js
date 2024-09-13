import { useState } from "react";
import { perguntas } from "./quiz";

export const useTranslate = () => {
  const [question, setQuestion] = useState([]);
  const [textt, setTextt] = useState("I'm Felipe and I'm 21 years old");

  const GenerateQuestions = () => {
    const randomIndex = Math.floor(Math.random() * perguntas.length);

    const result = perguntas[randomIndex];
    setQuestion([result]);
  };

  return {
    textt,
    question,
    GenerateQuestions,
  };
};
