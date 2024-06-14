import { useState } from "react";
import Users from "../components/Users";
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";


function Home() {
  const [co, setCo] = useState(false);
  const [insc, setInsc] = useState(false);

  const connexion = () => {
    setCo(true);
  };

  const inscription = () => {
    setInsc(true);
  }


  return (
    <>
      <p>I&apos;m home</p>
      <Users />
      <button type="button" onClick={() => connexion()}>
            {" "}
            Connexion
          </button>
      <button type="button" onClick={() => inscription()}>Inscription</button>

      {co ? (
        <Connexion setCon={setCo} />
      ) : (
        ""
      )}
      
      {insc ? (
        <Inscription setCon={setCo} />
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
