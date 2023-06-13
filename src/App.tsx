import { createHashRouter, RouterProvider } from "react-router-dom";

import ResumeMotion from "./views/ResumeMotion";

const router = createHashRouter([
  {
    path: "/",
    element: <ResumeMotion />,
  },
]);

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-200">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
