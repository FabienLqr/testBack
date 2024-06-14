import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Connexion() {
  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const pseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3310/api/person/login", {
        pseudo,
        password,
      });
      const user = response.data;
      setPassword("");
      setPseudo("");
      navigate(`/${user.id}`);
    } catch (error) {
      console.error(error.message);
    }
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
