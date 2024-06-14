import { useState } from "react";
import axios from "axios";

function Inscription() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const firstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const lastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const bioChange = (e) => {
    setBio(e.target.value);
  };
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
        firstname,
        lastname,
        pseudo,
        password,
        bio,
      })
      .catch(() => console.error(e.message));
    setFirstname("");
    setLastname("");
    setPassword("");
    setPseudo("");
    setBio("");
  };

  return (
    <section className="popup">
      <h2>Vous voulez vous inscrire?</h2>
    
      <label htmlFor="firstname">Entrer votre prenom:</label>
      <input
        type="text"
        id="firstname"
        name="name"
        required
        onChange={firstnameChange}
        value={firstname}
      />

      <label htmlFor="lastname">Entrer votre nom de famille:</label>
      <input
        type="text"
        id="lastname"
        name="name"
        required
        onChange={lastnameChange}
        value={lastname}
      />
      <label htmlFor="bio">Choississez une bio</label>
      <input
        type="text"
        id="bio"
        name="name"
        onChange={bioChange}
        value={bio}
      />

      
      <label htmlFor="pseudo">Choissisez un pseudo:</label>
      <input
        type="text"
        id="pseudo"
        name="name"
        required
        minLength="4"
        maxLength="15"
        onChange={pseudoChange}
        value={pseudo}
      />
      <label htmlFor="pass">Password (8 characters minimum):</label>
      <input
        type="password"
        id="pass"
        name="password"
        required
        onChange={passwordChange}
        value={password}
      />

      <button type="submit" value="Inscription" onClick={submit}>
        soumettre
      </button>
    </section>
  );
}

export default Inscription;
