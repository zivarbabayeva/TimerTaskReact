import { useRef, useState } from "react";

export default function Player() {

  const player = useRef();
  const [playerName, setPlayerName] = useState()

  function showName() {
    setPlayerName(player.current.value)
    player.current.value = ""

  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={showName}>Set Name</button>
      </p>
    </section>
  );
}
