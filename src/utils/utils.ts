import { MC, Score } from "./stuff";

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

export {};
