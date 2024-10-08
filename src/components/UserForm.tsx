import React, { useState } from "react";
import { Event, MC } from "../utils/stuff";
import { setUser } from "../utils/utils";

export default function UserForm() {
  const [formState, setFormState] = useState<MC>({
    name: "",
    score: {
      love: 0,
      confidence: 0,
    },
  });

  const handleSubmit = async (e: Event) => {
    try {
      setUser(formState);
      console.log("set");
    } catch (error) {
      console.log(`error ${error}`);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
      </form>
    </div>
  );
}
