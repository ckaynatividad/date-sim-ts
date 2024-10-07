type MC = {
  name: string;
  score: Score;
};

type Score = {
  love: number;
  confidence: number;
};

type Companion = {
  name: string;
  image?: string;
  initialNarratedDialogue: string;
  narratedChoice: Choices;
};

export type Choices = {
  choice1: Choice;
  choice2: Choice;
  choice3: Choice;
};

const choice1: Choice = {
  name: "fight",
  choice: "Snap back",
  result: "Result here",
  love: 10,
  confidence: 20,
};

const choices: Choices = {
  choice1: choice1,
  choice2: choice1,
  choice3: choice1,
};

type Choice = {
  name: string;
  choice: string;
  result: string;
  love: number;
  confidence: number;
};

type Game = "EnteringName" | "TalkingStage" | "EndScreen";

type EnteringName = { tag: "EnteringName" };
type TalkingStage = {
  tag: "TalkingStage";
  value: { mc: MC; companion: Companion };
};
type EndScreen = { tag: "EndScreen"; value: { mc: MC; endResult: string } };

export {};
