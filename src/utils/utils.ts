import { MC, Score } from "./stuff";
import { Quest } from "./quest-data";

export function setUser(user: MC) {
  localStorage.setItem("USER", JSON.stringify(user));
}

export function getUser() {
  const json = localStorage.getItem("USER");
  if (json) {
    const parse = JSON.parse(json);
    return parse;
  } else return null;
}

export function findQuestById(arr: Quest[], id: string) {
  for (let i = 0; i < arr.length; i++) {
    const quest = arr[i];
    if (quest.id === id) {
      return quest;
    }
  }
}

export {};
