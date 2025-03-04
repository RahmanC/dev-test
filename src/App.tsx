import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <main data-testid="app">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
