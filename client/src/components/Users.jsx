import { useLoaderData } from "react-router-dom";

function Users() {
  const persons = useLoaderData();
  
  return <p>{persons.map((user) => (
    <li key={user.id}>
        {user.firstname}
    </li>
))}</p>;
}

export default Users;
