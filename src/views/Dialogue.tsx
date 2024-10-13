import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DialogueForm from "../components/DialogueForm";
import quests, { Quest } from "../utils/quest-data";
import { findQuestById } from "../utils/utils";

export default function Dialogue() {
  const { id } = useParams();
  const [quest, setQuest] = useState<Quest>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      if (id) {
        const data = findQuestById(quests, id);
        setQuest(data);
      }
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <div>
      Dialogue hello
      {quest ? <DialogueForm quest={quest} /> : "nothing here"}
    </div>
  );
}
