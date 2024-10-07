import React from "react";
import { Choices } from "../utils/stuff";

type MC = {
  name: string;
  score: Score;
};

type Score = {
  love: number;
  confidence: number;
};

export default function MCCard(score: Score) {
  //   const score: Score = {
  //     love: 1,
  //     confidence: 1,
  //   };
  const mc: MC = {
    name: "name",
    score: score,
  };

  return (
    <div>
      <p>{mc.name}</p>
      <p>love: {mc.score.love}</p>
      <p>confidence: {mc.score.confidence}</p>
    </div>
  );
}
