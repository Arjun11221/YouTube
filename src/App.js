import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { useState } from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <Provider store={store}>
        <div className="dark:bg-black dark:text-white ">
          <Header />
          <RouterProvider router={appRouter} />
        </div>
        <button
          className="absolute py-2 px-4 rounded-md md:w-20 md:right-24 right-4 top-10 md:h-12 md:top-7  bg-neutral-300 dark:bg-slate-800 md:rounded-lg text-black dark:text-white font-semibold"
          onClick={toggleChange}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </Provider>
    </div>
  );
}

export default App;
