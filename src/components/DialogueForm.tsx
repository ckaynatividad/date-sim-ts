import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import quests, { Quest } from "../utils/quest-data";
import { Choice, Event } from "../utils/stuff";
import { findChoiceById, getUser, score } from "../utils/utils";

export default function DialogueForm({
  quest,
  choices,
}: {
  quest: Quest;
  choices: Choice[];
}) {
  const [result, setResult] = useState<string>();
  const user = getUser();

  const handleSubmit = (choice: Choice) => {
    const result = findChoiceById(choices, choice.id);
    setResult(result);
    console.log(choice);
    score(choice, user);
    console.log(user);
  };

  return (
    <div>
      DialogueForm
      <h3>{quest.title}</h3>
      <p>{quest.description}</p>
      {!result &&
        choices.map((choice) => (
          <div key={choice.id}>
            <button onClick={() => handleSubmit(choice)}>
              {choice.description}
            </button>
          </div>
        ))}
      {result && (
        <div>
          <p>{result}</p>
          <Link to="/map">back to map</Link>
        </div>
      )}
    </div>
  );
}
