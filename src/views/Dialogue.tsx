import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DialogueForm from "../components/DialogueForm";
import quests, { Quest } from "../utils/quest-data";
import { findQuestById } from "../utils/utils";
import { Choice } from "../utils/stuff";
import MCCard from "../components/MCCard";

export default function Dialogue() {
  const { id } = useParams();
  const [quest, setQuest] = useState<Quest>();
  const [choices, setChoices] = useState<Choice[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      if (id) {
        const data = findQuestById(quests, id);
        setQuest(data);
        setChoices(data?.choices);
      }
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <div>
      Dialogue hello
      <MCCard />
      {quest && choices ? (
        <DialogueForm quest={quest} choices={choices} />
      ) : (
        "nothing here"
      )}
    </div>
  );
}
