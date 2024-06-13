import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: async () => {
      try {
        const response = await axios.get(
          "http://localhost:3310/api/person"
        );
      
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
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
