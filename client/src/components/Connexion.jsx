import { useState } from "react";
import axios from "axios";

function Connexion() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const pseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3310/api/person", {
        pseudo,
        password,
      })
      .catch(() => console.error(e.message));
    setPassword("");
    setPseudo("");
  };

  return (
    <section className="popup">
      <h2>Vous voulez vous connecter?</h2>
      <label htmlFor="pseudo">Rentrez votre pseudo:</label>
      <input
        type="text"
        id="pseudo"
        name="name"
        required
        minLength="3"
        maxLength="15"
        onChange={pseudoChange}
        value={pseudo}
      />

      <label htmlFor="pass">Password:</label>
      <input
        type="password"
        id="pass"
        name="password"
        required
        onChange={passwordChange}
        value={password}
      />

      <button type="submit" value="Connexion" onClick={submit}>
        soumettre
      </button>
    </section>
  );
}

export default Connexion;
