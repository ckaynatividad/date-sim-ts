import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MCCard from "../components/MCCard";
import quests, { Quest } from "../utils/quest-data";

export default function Map() {
  return (
    <div>
      Map
      <MCCard />
      <Link to="/tsundere">tsundere</Link>
      <Link to="/yandere">yandere</Link>
      <Link to="/kuudere">Kuudere</Link>
      <Link to="/dandere">dandere</Link>
    </div>
  );
}
