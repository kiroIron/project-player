import React, { useState  } from "react";
import "./App.css";
import CardPlayer from "./components/CardPlayer";
const App = () => {
  const [player, setPlayer] = useState({
    id: "",
    name: "",
    age: "",
    position: "",
    nationality: "",
    club: "",
  });
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Lionel Messi",
      age: 35,
      position: "Forward",
      nationality: "Argentinian",
      club: "Paris Saint-Germain",
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      age: 38,
      position: "Forward",
      nationality: "Portuguese",
      club: "Al Nassr",
    },
    {
      id: 3,
      name: "Kevin De Bruyne",
      age: 31,
      position: "Midfielder",
      nationality: "Belgian",
      club: "Manchester City",
    },
    {
      id: 4,
      name: "Virgil van Dijk",
      age: 31,
      position: "Defender",
      nationality: "Dutch",
      club: "Liverpool",
    },
  ]);
  const actionSubmit = (e)=>{
    e.preventDefault()
    setPlayers([
      ...players,
      {...player , 
      id : players[players.length -1].id +1
      }
    ])
  }

  return (
    <main className="Container">
      <section className="Container-player">
        {players.map((player) => (
          <CardPlayer player={player} />
        ))}
      </section>
      <section className="Container-form">
        <form action="" onSubmit={actionSubmit}>
          {Object.keys(player).map((key, index) => {
            if (key === "id") return null;
            return (
              <div key={index} className="Con-input">
                <label htmlFor={key}>{key}</label>
                <input type="text" id={key} name={key} onChange={
                  ({target : {value}})=>{
                    setPlayer({
                      ...player,
                      [key]: value
                    })
                  }
                } value={
                  player[key]
                }/>
              </div>
            );
          })}
          <button type="submit">
            Add Player
          </button>
        </form>
      </section>
    </main>
  );
};

export default App;
