import { RouterProvider } from "react-router-dom/dist";
import router from "./components/AppRouter";

const App = () => {
  return(
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App;