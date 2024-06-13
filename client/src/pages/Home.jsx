import { useLoaderData } from "react-router-dom";
import Users from "../components/Users";

function Home() {
 
  console.info(useLoaderData());
  return (
    <>
      <p>I&apos;m home</p>
      <Users />
    </>
  );
}

export default Home;
