import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
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

  const nav = useNavigate();

  const handleSubmit = async (e: Event) => {
    try {
      setUser(formState);
      nav("/map");
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
