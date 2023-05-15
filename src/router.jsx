import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
{
 path: "/",
 element: <Homepage />,
 errorElement: <ErrorPage />
},
{
 path: "/users",
 element: <UsersPage />
},
{
 path: "/users/:userId",
 element: <UserPage />
},
{
 path: "/counter",
 element: <Counter />
}
]);
export default router;