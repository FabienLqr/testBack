import { useLoaderData } from "react-router-dom";

function Estco() {
  const userEstCo = useLoaderData();
  return (
    <>
      <h2>{userEstCo.pseudo} est connecte</h2>
      <p>Votre pseudo est: {userEstCo.pseudo}</p>
      <p>Votre bio est: {userEstCo.bio}</p>
      <p>Cliquer sur ce bouton pour changer vos infos perso:</p>
      <button type="button">Modifier</button>
      <p>
        Si vous souhaitez supprimer votre compte cliquer sur le bouton suivant.
        ATTENTION cette action est irreversible!:
      </p>
      <button type="button">Supprimer</button>
      <p>Enfin si vous voulez vous decconnecter cliquer sur ce bouton:</p>
      <button type="button">Deconnexion</button>
    </>
  );
}

export default Estco;
