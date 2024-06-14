import { useLoaderData } from "react-router-dom";

function Estco() {
  const userEstCo = useLoaderData();
  console.info("BLA" ,userEstCo);
  return <p>{userEstCo.pseudo} est connecte</p>;
}

export default Estco;
