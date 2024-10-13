import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import { MC } from "../utils/stuff";
import { getUser } from "../utils/utils";

export default function MCCard() {
  const [user, setUser] = useState<MC>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();
      setUser(data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <div>
      {user ? (
        <div>
          <p>name: {user.name}</p>
          <p>love: {user.score.love}</p>
          <p>confidence: {user.score.confidence}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
