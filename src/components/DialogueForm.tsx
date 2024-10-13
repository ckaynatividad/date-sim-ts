import React, { useEffect, useState } from "react";
import quests, { Quest } from "../utils/quest-data";

export default function DialogueForm({ quest }: { quest: Quest }) {
  return (
    <div>
      DialogueForm
      <p>id: {quest.id}</p>
    </div>
  );
}
