import { createHashRouter, RouterProvider } from "react-router-dom";

import Nav from "./components/app/Nav";
import Resume from "./views/Resume";

const router = createHashRouter([
  {
    path: "/",
    element: <Resume />,
  },
]);

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-200">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
