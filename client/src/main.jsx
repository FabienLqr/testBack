import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Estco from "./components/Estco";

const unique = async ({ params }) => {
  try {
    const response = await axios.get(
      `http://localhost:3310/api/person/${params.id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};



const router = createBrowserRouter([
  {
    element: <App />,
    loader: async () => {
      try {
        const response = await axios.get("http://localhost:3310/api/person");

        return response.data;
      } catch (error) {
        console.error(error);
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
    ],
  },
  {
    path: "/:id",
    element: <Estco />,
    loader: unique,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
